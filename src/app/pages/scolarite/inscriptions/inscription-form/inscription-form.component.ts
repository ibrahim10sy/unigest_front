import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { AnneeScolaire } from 'src/app/models/AnneeScolaire';
import { Classe } from 'src/app/models/Classe';
import { Etudiant } from 'src/app/models/Etudiant';
import { AnneeScolaireService } from 'src/app/services/annee-scolaire.service';
import { ClasseService } from 'src/app/services/classe.service';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'vex-inscription-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule
  ],
  templateUrl: './inscription-form.component.html',
  styleUrl: './inscription-form.component.scss'
})
export class InscriptionFormComponent implements OnInit {
  form: FormGroup;
  etudiants: Etudiant[] = [];
  classes: Classe[] = [];
  annees: AnneeScolaire[] = [];
  mode: 'create' | 'update' = 'create';

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<InscriptionFormComponent>,
    private fb: FormBuilder,
    private etudiantService: EtudiantService,
    private classeService: ClasseService,
    private anneeService: AnneeScolaireService
  ) {
    this.form = this.fb.group({
      id: [defaults?.id || null],
      etudiantId: [defaults?.etudiant?.id || '', Validators.required],
      classeId: [defaults?.classe?.id || '', Validators.required],
      anneeId: [defaults?.anneeScolaire?.id || '', Validators.required],

      hasReduction: [!!defaults?.montantReduction],

      montantReduction: [defaults?.montantReduction ?? 0],
      motifReduction: [defaults?.motifReduction ?? '']
    });
  }

  ngOnInit() {
  if (this.defaults) {
    this.mode = 'update';
  }

  this.form.get('hasReduction')?.valueChanges.subscribe((checked) => {
    if (!checked) {
      this.form.patchValue({
        montantReduction: 0,
        motifReduction: ''
      });
    }
  });

  this.etudiantService
    .listerEtudiants()
    .subscribe((res: any) => (this.etudiants = res));

  this.classeService
    .getAllClasses()
    .subscribe((res: any) => (this.classes = res));

  this.anneeService
    .getAll()
    .subscribe((res: any) => (this.annees = res));
}

  save() {
    if (!this.form.valid) return;

    const value = this.form.value;

    // 🔥 nettoyage logique
    if (!value.hasReduction) {
      value.montantReduction = 0;
      value.motifReduction = null;
    }

    this.dialogRef.close(value);
  }
}
