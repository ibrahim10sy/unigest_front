import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CategorieDepense } from 'src/app/models/CategorieDepense';
import { CategorieDepenseService } from 'src/app/services/categorie-depense.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'vex-categorie-depense-form',
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
  templateUrl: './categorie-depense-form.component.html',
  styleUrl: './categorie-depense-form.component.scss'
})
export class CategorieFormComponent implements OnInit {
  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(
    private fb: FormBuilder,
    private service: CategorieDepenseService,
    private dialogRef: MatDialogRef<CategorieFormComponent>,
    @Inject(MAT_DIALOG_DATA) public defaults: CategorieDepense | null
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
    const data = this.form.value;

    if (this.mode === 'update') {
      this.service.update(this.defaults!.id!, data).subscribe({
        next: () => this.handleSuccess('Catégorie mise à jour'),
        error: () => Swal.fire('Erreur', 'Échec de la modification', 'error')
      });
    } else {
      this.service.create(data).subscribe({
        next: () => this.handleSuccess('Catégorie ajoutée'),
        error: () => Swal.fire('Erreur', "Échec de l'ajout", 'error')
      });
    }
  }

  handleSuccess(message: string) {
    Swal.fire({ icon: 'success', title: message, timer: 1500, showConfirmButton: false });
    this.dialogRef.close(true);
  }
}