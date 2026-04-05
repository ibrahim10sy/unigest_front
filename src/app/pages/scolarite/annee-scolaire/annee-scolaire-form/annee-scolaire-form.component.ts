import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'vex-annee-scolaire-form',
  standalone: true,
 imports: [
    CommonModule, ReactiveFormsModule, MatDialogModule, MatInputModule,
    MatFormFieldModule, MatDatepickerModule, MatNativeDateModule,
    MatSlideToggleModule, MatButtonModule, MatIconModule, MatDividerModule
  ],
  templateUrl: './annee-scolaire-form.component.html',
  styleUrl: './annee-scolaire-form.component.scss'
})
export class AnneeScolaireFormComponent implements OnInit {
  form: FormGroup;
  mode: 'create' | 'update' = 'create';

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<AnneeScolaireFormComponent>,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      id: [defaults?.id || null],
      libelle: [defaults?.libelle || '', Validators.required],
      dateDebut: [defaults?.dateDebut || '', Validators.required],
      dateFin: [defaults?.dateFin || '', Validators.required],
      active: [defaults?.active || false]
    });
  }

  ngOnInit() {
    if (this.defaults) this.mode = 'update';
    // Génération dynamique pour une nouvelle année
    const anneeActuelle = new Date().getFullYear(); // 2026
    const anneeSuivante = anneeActuelle + 1;        // 2027
    const libelleAutomatique = `${anneeActuelle}-${anneeSuivante}`;
    
    // On met à jour la valeur du formulaire
    this.form.patchValue({
      libelle: libelleAutomatique,
      dateDebut: new Date(anneeActuelle, 8, 1), // Par défaut 1er Septembre
      dateFin: new Date(anneeSuivante, 6, 31)   // Par défaut 31 Juillet
    });
  }

  save() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }
  }