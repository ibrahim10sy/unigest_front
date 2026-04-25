import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'vex-enseignant-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './enseignant-form.component.html',
  styleUrl: './enseignant-form.component.scss'
})
export class EnseignantFormComponent implements OnInit {
  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<EnseignantFormComponent>,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      id: [defaults?.id || null],
      nom: [defaults?.nom || '', Validators.required],
      prenom: [defaults?.prenom || '', Validators.required],
      adresse: [defaults?.adresse || '', Validators.required],
      email: [defaults?.email || ''],
      specialite: [defaults?.specialite || '', [Validators.required]],
      telephone: [defaults?.telephone || '', Validators.required],
      // password: ['123456'] // Optionnel en update
    });
  }

  ngOnInit() {
    if (this.defaults) this.mode = 'update';
  }

  save() {
    if (this.form.valid) this.dialogRef.close(this.form.value);
  }

}
