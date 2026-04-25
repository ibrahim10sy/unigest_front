import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AnneeScolaire } from 'src/app/models/AnneeScolaire';
import { CategorieDepense } from 'src/app/models/CategorieDepense';
import { AnneeScolaireService } from 'src/app/services/annee-scolaire.service';
import { CategorieDepenseService } from 'src/app/services/categorie-depense.service';
import { DepenseService, Depense } from 'src/app/services/DepenseService.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'vex-depense-form',
  standalone: true,
  imports: [
    MatSelectModule, MatDialogModule,
    CommonModule, ReactiveFormsModule, MatDialogModule, MatInputModule, 
    MatFormFieldModule, MatButtonModule, MatIconModule, MatDividerModule,
    MatDatepickerModule, MatNativeDateModule
  ],
  templateUrl: './depense-form.component.html',
  styleUrl: './depense-form.component.scss'
})
export class DepenseFormComponent implements OnInit {

  form: FormGroup;
  mode: 'create' | 'update' = 'create';
  categories: CategorieDepense[] = [];
  anneesScolaires: AnneeScolaire[] = [];

  constructor(
        private categorieService: CategorieDepenseService,
        private anneeScolaireService: AnneeScolaireService,
    private fb: FormBuilder,
    private depenseService: DepenseService,
    private dialogRef: MatDialogRef<DepenseFormComponent>,
    @Inject(MAT_DIALOG_DATA) public defaults: Depense | null
  ) {
    this.form = this.fb.group({
      libelle: [this.defaults?.libelle || '', Validators.required],
      montant: [this.defaults?.montant || '', [Validators.required, Validators.min(0)]],
      dateDepense: [this.defaults?.dateDepense || new Date(), Validators.required],
      description: [this.defaults?.description || ''],
      modePaiement: [this.defaults?.modePaiement || 'Espèces'], 
      categorieDepense: [this.defaults?.categorieDepense?.id || '', Validators.required] ,// On stocke l'ID
      anneeScolaire: [this.defaults?.anneeScolaire?.id || '', Validators.required] // On stocke l'ID
    });
  }

  ngOnInit(): void {
    if (this.defaults) this.mode = 'update';
    this.categorieService.getAll().subscribe(data => this.categories = data);
    this.anneeScolaireService.getAll().subscribe(data => this.anneesScolaires = data);
  }

  save() {
  if (this.form.invalid) return;
console.log(this.form.value);
  const formValue = this.form.value;

  // Reconstruction de l'objet pour correspondre au modèle Java
  const depensePayload = {
    ...formValue,
    categorieDepense: { id: formValue.categorieDepense } ,
    anneeScolaire: { id: formValue.anneeScolaire }
  };

  if (this.mode === 'update') {
    // Si mode update, on ajoute l'ID de la dépense à l'objet
    depensePayload.id = this.defaults!.id;
    
    
    this.depenseService.update(this.defaults!.id!, depensePayload).subscribe({
      next: () => {
        Swal.fire({ icon: 'success', title: 'Dépense mise à jour', timer: 1500, showConfirmButton: false });
        this.dialogRef.close(true);
      },
      error: () => Swal.fire('Erreur', 'Échec de la mise à jour', 'error')
    });
  } else {
    this.depenseService.create(depensePayload).subscribe({
      next: () => {
        Swal.fire({ icon: 'success', title: 'Dépense enregistrée', timer: 1500, showConfirmButton: false });
        this.dialogRef.close(true);
      },
      error: () => Swal.fire('Erreur', 'Échec de l\'ajout', 'error')
    });
  }
}
}