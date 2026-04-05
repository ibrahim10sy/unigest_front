import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { FiliereService } from 'src/app/services/filiere.service';
import { Filiere } from 'src/app/models/Filiere';
import Swal from 'sweetalert2';
import { NiveauService } from 'src/app/services/niveau.service';
import { Niveau } from 'src/app/models/Niveau';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'vex-filiere-form',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    MatDialogModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatButtonModule, 
    MatSlideToggleModule,
    MatIconModule,
    MatDividerModule,
    MatMenuModule,
    MatSelectModule,    // <--- INDISPENSABLE pour mat-option
  ],
  templateUrl: './filiere-form.component.html'
})
export class FiliereFormComponent implements OnInit {
  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  niveaux: Niveau[] = [];

  constructor(
    private fb: FormBuilder,
    private niveauService: NiveauService,
    private filiereService: FiliereService,
    private dialogRef: MatDialogRef<FiliereFormComponent>,
    @Inject(MAT_DIALOG_DATA) public defaults: Filiere | null
  ) {
    this.form = this.fb.group({
      nom: [this.defaults?.nom || '', [Validators.required]],
      niveauId: [this.defaults?.niveau?.id || '', Validators.required], // ID du niveau parent
      actif: [this.defaults ? this.defaults.actif : true]
    });
  }

  ngOnInit(): void {
    this.niveauService.getAllNiveaux().subscribe(res => this.niveaux = res);
    if (this.defaults) {
      this.mode = 'update';
    }
  }

  save() {
    if (this.form.invalid) return;

    const val = this.form.value;

    if (this.isUpdateMode()) {
      this.filiereService.modifierFiliere(val.niveauId,this.defaults!.id!, val.nom, val.actif).subscribe({
        next: () => this.handleSuccess('Filière mise à jour'),
        error: () => Swal.fire('Erreur', 'Échec de la modification', 'error')
      });
    } else {
      this.filiereService.ajouterFiliere(val.nom, val.niveauId).subscribe({
        next: () => this.handleSuccess('Filière ajoutée'),
        error: () => Swal.fire('Erreur', "Échec de l'ajout", 'error')
      });
    }
  }

  handleSuccess(message: string) {
    Swal.fire({ icon: 'success', title: message, timer: 1500, showConfirmButton: false });
    this.dialogRef.close(true);
  }

  isCreateMode() { return this.mode === 'create'; }
  isUpdateMode() { return this.mode === 'update'; }
}