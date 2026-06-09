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
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import Swal from 'sweetalert2';
import { EmploiDuTempsService } from 'src/app/services/emploi-du-temps.service';
import { EnseignantService } from 'src/app/services/enseignant.service';
import { ClasseService } from 'src/app/services/classe.service';
import { MatiereService } from 'src/app/services/matiere.service';

@Component({
  selector: 'vex-emploi-du-temps-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  templateUrl: './emploi-du-temps-form.component.html',
  styleUrl: './emploi-du-temps-form.component.scss'
})
export class EmploiDuTempsFormComponent implements OnInit {
  form!: FormGroup;
  isLoading = false;
  mode: 'create' | 'update' = 'create';

  jours        = ['LUNDI', 'MARDI', 'MERCREDI', 'JEUDI', 'VENDREDI', 'SAMEDI'];
  periodicites = ['HEBDOMADAIRE', 'QUOTIDIEN', 'MENSUEL', 'UNIQUE'];
  types        = ['COURS', 'RECREATION', 'PAUSE'];

  classes:     any[] = [];
  enseignants: any[] = [];
  matieres:    any[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public defaults: any,
    private dialogRef: MatDialogRef<EmploiDuTempsFormComponent>,
    private fb: FormBuilder,
    private service: EmploiDuTempsService,
    private enseignantService: EnseignantService,
    private classeService: ClasseService,
    private matiereService: MatiereService
  ) {}

  ngOnInit(): void {
    if (this.defaults) {
      this.mode = 'update';
    }

    this.form = this.fb.group({
      id:          [this.defaults?.id ?? null],
      classe:      [this.defaults?.classe?.id ?? null],
      enseignant:  [this.defaults?.enseignant?.id ?? null],
      matiere:     [this.defaults?.matiere?.id ?? null],
      jours:       [this.defaults?.jours ?? [],    Validators.required],
      heureDebut:  [this.defaults?.heureDebut ?? '', Validators.required],
      heureFin:    [this.defaults?.heureFin   ?? '', Validators.required],
      periodicite: [this.defaults?.periodicite ?? '', Validators.required],
      dateDebut:   [this.defaults?.dateDebut   ?? '', Validators.required],
      dateFin:     [this.defaults?.dateFin     ?? '', Validators.required],
      description: [this.defaults?.description ?? ''],
      type:        [this.defaults?.type        ?? 'COURS', Validators.required]
    });

    // Mettre à jour les validateurs quand le type change
    this.form.get('type')!.valueChanges.subscribe(type => {
      this.mettreAJourValidateurs(type);
    });

    // Appliquer les validateurs au type initial
    this.mettreAJourValidateurs(this.form.get('type')!.value);

    this.loadData();
  }

  get isCours(): boolean {
    return this.form.get('type')!.value === 'COURS';
  }

  mettreAJourValidateurs(type: string): void {
    const champsCours = ['classe', 'enseignant', 'matiere'];

    if (type === 'COURS') {
      champsCours.forEach(champ => {
        this.form.get(champ)!.setValidators(Validators.required);
        this.form.get(champ)!.updateValueAndValidity();
      });
    } else {
      // RECREATION / PAUSE : on vide et on retire les validateurs
      champsCours.forEach(champ => {
        this.form.get(champ)!.clearValidators();
        this.form.get(champ)!.setValue(null);
        this.form.get(champ)!.updateValueAndValidity();
      });
    }
  }

  loadData(): void {
    this.classeService.getAllClasses().subscribe((res: any)     => this.classes     = res);
    this.enseignantService.getAllEnseignants().subscribe((res: any) => this.enseignants = res);
    this.matiereService.getAllMatieres().subscribe((res: any)   => this.matieres    = res);
  }

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isLoading = true;
    const v = this.form.value;

    const payload: any = {
      ...v,
      classe:     v.classe     ? { id: v.classe }     : null,
      enseignant: v.enseignant ? { id: v.enseignant } : null,
      matiere:    v.matiere    ? { id: v.matiere }    : null
    };

    this.service.save(payload).subscribe({
      next: (res: any) => {
        this.isLoading = false;
        Swal.fire({
          icon: 'success',
          title: 'Succès',
          text: this.mode === 'create' ? 'Emploi du temps ajouté' : 'Emploi du temps modifié',
          timer: 2000,
          showConfirmButton: false
        });
        this.dialogRef.close(res);
      },
      error: (err: any) => {
        this.isLoading = false;
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: err?.error?.message || 'Une erreur est survenue'
        });
      }
    });
  }
}