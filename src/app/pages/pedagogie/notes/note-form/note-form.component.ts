import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';
import Swal from 'sweetalert2';

import { ClasseService } from 'src/app/services/classe.service';
import { AffectationService } from 'src/app/services/affectation.service';
import { InscriptionService } from 'src/app/services/inscription.service';
import { NoteService } from 'src/app/services/note.service';
import { AnneeScolaireService } from 'src/app/services/annee-scolaire.service';
import { TypePeriode } from 'src/app/models/TypePeriode';
import { TypeNote } from 'src/app/models/TypeNote';
import { NoteBatchRequest } from 'src/app/models/NoteBatchRequest';

interface EtudiantNote {
  etudiantId: number;
  nom: string;
  prenom: string;
  valeur: number | null;
}

@Component({
  selector: 'vex-note-form',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatTooltipModule
  ],
  templateUrl: './note-form.component.html',
  styleUrl: './note-form.component.scss'
})
export class NoteFormComponent implements OnInit {
  form!: FormGroup;
  isLoading = false;
  isLoadingStudents = false;

  classes: any[] = [];
  affectations: any[] = [];
  annees: any[] = [];

  typesPeriode = Object.values(TypePeriode);
  typesNote = Object.values(TypeNote);
  periodes = [1, 2, 3];

  etudiantNotes: EtudiantNote[] = [];

  get selectedAffectation(): any {
    const id = this.form?.get('affectationId')?.value;
    return this.affectations.find(a => a.id === id) ?? null;
  }

  get notesRenseignees(): number {
    return this.etudiantNotes.filter(e => e.valeur !== null).length;
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<NoteFormComponent>,
    private fb: FormBuilder,
    private classeService: ClasseService,
    private affectationService: AffectationService,
    private inscriptionService: InscriptionService,
    private noteService: NoteService,
    private anneeService: AnneeScolaireService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      classeId:     [null, Validators.required],
      anneeId:      [null, Validators.required],
      affectationId:[null, Validators.required],
      matiereId:    [null, Validators.required],
      typePeriode:  [TypePeriode.TRIMESTRE, Validators.required],
      periode:      [1, Validators.required],
      typeNote:     [TypeNote.DEVOIR, Validators.required]
    });

    this.loadInitialData();
  }

  loadInitialData(): void {
    this.classeService.getAllClasses().subscribe((c: any[]) => (this.classes = c));
    this.anneeService.getAll().subscribe((a: any[]) => {
      this.annees = a;
      const active = a.find(x => x.active);
      if (active) this.form.patchValue({ anneeId: active.id });
    });
  }

  onClasseChange(): void {
    const classeId = this.form.get('classeId')?.value;
    this.form.patchValue({ affectationId: null, matiereId: null });
    this.etudiantNotes = [];
    this.affectations = [];
    if (!classeId) return;

    this.affectationService.getAffectationsParClasse(classeId).subscribe((a: any[]) => {
      this.affectations = a;
    });

    this.chargerEtudiants();
  }

  onAnneeChange(): void {
    this.chargerEtudiants();
  }

  onAffectationChange(): void {
    this.form.patchValue({ matiereId: null });
    const aff = this.selectedAffectation;
    if (aff?.matieres?.length === 1) {
      this.form.patchValue({ matiereId: aff.matieres[0].id });
    }
  }

  chargerEtudiants(): void {
    const classeId = this.form.get('classeId')?.value;
    const anneeId = this.form.get('anneeId')?.value;
    if (!classeId || !anneeId) return;

    this.isLoadingStudents = true;
    this.inscriptionService.getEtudiantsParClasseEtAnnee(classeId, anneeId).subscribe({
      next: (inscriptions: any[]) => {
        this.etudiantNotes = inscriptions
          .filter(ins => ins.etudiant?.id)
          .map(ins => ({
            etudiantId: ins.etudiant.id,
            nom: ins.etudiant.nom ?? '',
            prenom: ins.etudiant.prenom ?? '',
            valeur: null
          }));
        this.isLoadingStudents = false;
      },
      error: () => {
        this.isLoadingStudents = false;
      }
    });
  }

  getAffectationLabel(a: any): string {
    const ens = a.enseignant ? `${a.enseignant.nom} ${a.enseignant.prenom}` : '';
    const mat = a.matieres?.map((m: any) => m.nom).join(', ') ?? '';
    return ens + (mat ? ` — ${mat}` : '');
  }

  toutRemplir(valeur: number): void {
    this.etudiantNotes.forEach(e => (e.valeur = valeur));
  }

  effacerTout(): void {
    this.etudiantNotes.forEach(e => (e.valeur = null));
  }

  trackByEtudiant(_: number, e: EtudiantNote): number {
    return e.etudiantId;
  }

  save(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const notesToSave = this.etudiantNotes.filter(
      e => e.valeur !== null && !isNaN(Number(e.valeur))
    );

    if (notesToSave.length === 0) {
      Swal.fire('Attention', 'Veuillez saisir au moins une note', 'warning');
      return;
    }

    const v = this.form.value;
    const batch: NoteBatchRequest[] = notesToSave.map(e => ({
      etudiantId: e.etudiantId,
      affectationId: v.affectationId,
      matiereId: v.matiereId,
      valeur: Number(e.valeur),
      type: v.typeNote,
      periode: v.periode,
      typePeriode: v.typePeriode
    }));

    this.isLoading = true;
    this.noteService.ajouterNotesBatch(batch).subscribe({
      next: () => {
        this.isLoading = false;
        Swal.fire({
          icon: 'success',
          title: `${notesToSave.length} note(s) enregistrée(s)`,
          timer: 1800,
          showConfirmButton: false
        });
        this.dialogRef.close(true);
      },
      error: (err: any) => {
        this.isLoading = false;
        Swal.fire('Erreur', err?.error?.message ?? 'Une erreur est survenue', 'error');
      }
    });
  }
}
