// import { Component } from '@angular/core';

// @Component({
//   selector: 'vex-filiere-form',
//   standalone: true,
//   imports: [],
//   templateUrl: './filiere-form.component.html',
//   styleUrl: './filiere-form.component.scss'
// })
// export class FiliereFormComponent {

// }


import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FiliereService } from 'src/app/services/filiere.service';
import Swal from 'sweetalert2';
import { MatIconModule } from '@angular/material/icon';

import { Filiere } from 'src/app/models/Filiere';

@Component({
  selector: 'vex-filiere-form',
  standalone: true,
  imports: [
    MatIconModule,
    CommonModule, ReactiveFormsModule, MatDialogModule, 
    MatInputModule, MatFormFieldModule, MatButtonModule, MatSlideToggleModule
  ],
  templateUrl: './filiere-form.component.html'
})
export class FiliereFormComponent implements OnInit {
  form!: FormGroup;
  isEditMode: boolean = false;

  constructor(
    private fb: FormBuilder,
    private filiereService: FiliereService,
    private dialogRef: MatDialogRef<FiliereFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Filiere // Reçoit les infos si modif
  ) {}

  ngOnInit(): void {
    this.isEditMode = !!this.data; // Si data existe, on est en modif

    this.form = this.fb.group({
      nom: [this.data?.nom || '', [Validators.required, Validators.minLength(3)]],
      actif: [this.data ? this.data.actif : true]
    });
  }

  save() {
    if (this.form.invalid) return;

    const val = this.form.value;

    if (this.isEditMode) {
      // MODIFICATION
      this.filiereService.modifierFiliere(this.data.id!, val.nom, val.actif).subscribe({
        next: () => this.handleSuccess('Filière mise à jour'),
        error: () => Swal.fire('Erreur', 'Echec de la modification', 'error')
      });
    } else {
      // AJOUT
      this.filiereService.ajouterFiliere(val.nom).subscribe({
        next: () => this.handleSuccess('Filière ajoutée'),
        error: () => Swal.fire('Erreur', "Echec de l'ajout", 'error')
      });
    }
  }

  handleSuccess(message: string) {
    Swal.fire({ icon: 'success', title: message, timer: 1500, showConfirmButton: false });
    this.dialogRef.close(true); // Ferme et dit à la liste de se rafraîchir
  }

  close() {
    this.dialogRef.close(false);
  }
}