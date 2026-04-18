import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { PaiementService } from 'src/app/services/paiement.service';
import { InscriptionService } from 'src/app/services/inscription.service';
import { Inscription } from 'src/app/models/Inscription';
import Swal from 'sweetalert2';
import { ModePaiement } from 'src/app/models/paiement';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'vex-paiement-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    FormsModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule
  ],
  templateUrl: './paiement-form.component.html',
  styleUrl: './paiement-form.component.scss'
})
export class PaiementFormComponent implements OnInit {
  form: FormGroup;
  mode: 'create' | 'update' = 'create';
  allInscriptions: Inscription[] = []; // La liste complète
  filteredInscriptions: Inscription[] = []; // La liste filtrée pour le template

  // Variables pour les filtres
  filterYear: string = '';
  searchTerm: string = '';

  paymentModes = Object.values(ModePaiement);

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<PaiementFormComponent>,
    private fb: FormBuilder,
    private pService: PaiementService,
    private iService: InscriptionService
  ) {
    this.form = this.fb.group({
      id: [defaults?.id || null],
      inscription: [defaults?.inscription || null, Validators.required],
      montant: [defaults?.montant || null, Validators.required],
      mode: [defaults?.modePaiement || null, Validators.required]
    });
  }

  get uniqueYears(): string[] {
    const years = this.allInscriptions
      .map((i) => i.anneeScolaire?.libelle)
      .filter((year): year is string => !!year);
    return [...new Set(years)];
  }

 ngOnInit() {
  if (this.defaults) {
  this.mode = 'update';

  this.form.patchValue({
    id: this.defaults.id,
    inscription: this.defaults.inscription,
    montant: this.defaults.montant,
    mode: this.normalizeMode(this.defaults.modePaiement)
  });
}

  this.iService.getAll().subscribe((res) => {
    this.allInscriptions = res;
    this.filteredInscriptions = res;
  });
}

  normalizeMode(mode: any): ModePaiement | null {
    if (!mode) return null;

    return (
      this.paymentModes.find((m) => m.toString() === mode.toString()) || null
    );
  }
  applyFilters() {
    this.filteredInscriptions = this.allInscriptions.filter((item) => {
      const matchYear =
        !this.filterYear || item.anneeScolaire?.libelle === this.filterYear;
      const search = this.searchTerm.toLowerCase();
      const matchName =
        !this.searchTerm ||
        item.etudiant?.nom?.toLowerCase().includes(search) ||
        item.etudiant?.prenom?.toLowerCase().includes(search);

      return matchYear && matchName;
    });
  }
  compareInscription(p1: Inscription, p2: Inscription): boolean {
    return p1 && p2 ? p1.id === p2.id : p1 === p2;
  }

  save() {
    if (this.form.invalid) return;

    const value = this.form.value;

    if (!value.inscription?.id) {
      Swal.fire('Erreur', 'Veuillez sélectionner une inscription', 'error');
      return;
    }

    const inscriptionId = value.inscription.id;
    const montant = value.montant;
    const mode = value.mode;

    const request$ =
      this.mode === 'update'
        ? this.pService.modifierPaiement(value.id, inscriptionId, montant, mode)
        : this.pService.effectuerPaiement(inscriptionId, montant, mode);

    request$.subscribe({
      next: () =>
        this.handleSuccess(
          this.mode === 'update' ? 'Paiement mis à jour' : 'Paiement effectué'
        ),
      error: () =>
        Swal.fire(
          'Erreur',
          this.mode === 'update'
            ? 'Échec de la modification'
            : "Échec de l'ajout",
          'error'
        )
    });
  }

  handleSuccess(message: string) {
    Swal.fire({
      icon: 'success',
      title: message,
      timer: 1500,
      showConfirmButton: false
    });
    this.dialogRef.close(true);
  }
}
