import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { Parent } from 'src/app/models/Parent';
import { ParentService } from 'src/app/services/parent.service';

@Component({
  selector: 'vex-etudiant-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatDialogModule, MatInputModule, MatSelectModule, MatDatepickerModule, MatButtonModule],
  templateUrl: './etudiant-form.component.html'
})
export class EtudiantFormComponent implements OnInit {
  form: FormGroup;
  mode: 'create' | 'update' = 'create';
  parents: Parent[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<EtudiantFormComponent>,
    private fb: FormBuilder,
    private parentService: ParentService
  ) {
    this.form = this.fb.group({
      id: [defaults?.id || null],
      prenom: [defaults?.prenom || '', Validators.required],
      nom: [defaults?.nom || '', Validators.required],
      email: [defaults?.email || '', [Validators.required, Validators.email]],
      telephone: [defaults?.telephone || ''],
      dateNaissance: [defaults?.dateNaissance || '', Validators.required],
      parent: [defaults?.parent || null, Validators.required] // L'objet Parent complet
    });
  }

  ngOnInit() {
    if (this.defaults) this.mode = 'update';
    // Charger la liste des parents pour le sélecteur
    this.parentService.getAll().subscribe(res => this.parents = res);
  }

  // Comparateur pour mat-select (indispensable en mode update)
  compareParents(p1: Parent, p2: Parent): boolean {
    return p1 && p2 ? p1.id === p2.id : p1 === p2;
  }

  save() {
    if (this.form.valid) this.dialogRef.close(this.form.value);
  }
}