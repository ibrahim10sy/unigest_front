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
import { Matiere, MatiereService } from 'src/app/services/matiere.service';
import { Classe } from 'src/app/models/Classe';
import {
  Enseignant,
  EnseignantService
} from 'src/app/services/enseignant.service';
import { ClasseService } from 'src/app/services/classe.service';

@Component({
  selector: 'vex-affectation-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonModule
  ],
  templateUrl: './affectation-form.component.html',
  styleUrl: './affectation-form.component.scss'
})
export class AffectationFormComponent implements OnInit {
  form: FormGroup;
  mode: 'create' | 'update' = 'create';
  enseignant: Enseignant[] = [];
  matiere: Matiere[] = [];
  classe: Classe[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<AffectationFormComponent>,
    private fb: FormBuilder,
    private eService: EnseignantService,
    private mService: MatiereService,
    private cService: ClasseService
  ) {
    this.form = this.fb.group({
      id: [defaults?.id || null],
      enseignant: [defaults?.enseignant || null, Validators.required],
      matieres: [defaults?.matieres || [], Validators.required], // ✅ tableau
      classe: [defaults?.classe || null, Validators.required]
    });
  }

  ngOnInit() {
    if (this.defaults) this.mode = 'update';
    // Charger la liste des parents pour le sélecteur
    this.eService
      .getAllEnseignants()
      .subscribe((res) => (this.enseignant = res));
    this.mService.getAllMatieres().subscribe((res) => (this.matiere = res));
    this.cService.getAllClasses().subscribe((res) => (this.classe = res));
  }

  // Comparateur pour mat-select (indispensable en mode update)
  compareEnseignant(p1: Enseignant, p2: Enseignant): boolean {
    return p1 && p2 ? p1.id === p2.id : p1 === p2;
  }

  compareMatiere(p1: Matiere, p2: Matiere): boolean {
    return p1 && p2 ? p1.id === p2.id : p1 === p2;
  }

  compareClasse(p1: Classe, p2: Classe): boolean {
    return p1 && p2 ? p1.id === p2.id : p1 === p2;
  }

 save() {
  if (this.form.valid) {
    const value = this.form.value;

    const payload = {
      enseignantId: value.enseignant?.id,
      classeId: value.classe?.id,
      matiereIds: value.matieres?.map((m: any) => m.id) || []
    };

    this.dialogRef.close(payload);
  }
}
}
