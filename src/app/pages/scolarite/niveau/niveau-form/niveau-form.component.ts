import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import Swal from 'sweetalert2';
import { NiveauService } from 'src/app/services/niveau.service';
import { Niveau } from 'src/app/models/Niveau';

@Component({
  selector: 'vex-niveau-form',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule, 
    MatDialogModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatButtonModule, 
    MatIconModule, 
    MatDividerModule
  ],
  templateUrl: './niveau-form.component.html'
})
export class NiveauFormComponent implements OnInit {
  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(
    private fb: FormBuilder,
    private niveauService: NiveauService,
    private dialogRef: MatDialogRef<NiveauFormComponent>,
    @Inject(MAT_DIALOG_DATA) public defaults: Niveau | null
  ) {
    this.form = this.fb.group({
      nom: [this.defaults?.nom || '', [Validators.required]]
    });
  }

  ngOnInit(): void {
    if (this.defaults) this.mode = 'update';
  }

  save() {
    if (this.form.invalid) return;
    const niveau = this.form.value;

    if (this.mode === 'update') {
      this.niveauService.modifierNiveau(this.defaults!.id!, niveau).subscribe({
        next: () => this.handleSuccess('Niveau mis à jour'),
        error: () => Swal.fire('Erreur', 'Échec de la modification', 'error')
      });
    } else {
      this.niveauService.creerNiveau(niveau).subscribe({
        next: () => this.handleSuccess('Niveau ajouté'),
        error: () => Swal.fire('Erreur', "Échec de l'ajout", 'error')
      });
    }
  }

  handleSuccess(message: string) {
    Swal.fire({ icon: 'success', title: message, timer: 1500, showConfirmButton: false });
    this.dialogRef.close(true);
  }
}