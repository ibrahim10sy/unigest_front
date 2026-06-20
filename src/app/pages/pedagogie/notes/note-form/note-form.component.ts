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
import Swal from 'sweetalert2';

import { ClasseService } from 'src/app/services/classe.service';
import { AffectationService } from 'src/app/services/affectation.service';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { NoteService } from 'src/app/services/note.service';
import { AnneeScolaireService } from 'src/app/services/annee-scolaire.service';
import { TypePeriode } from 'src/app/models/TypePeriode';
import { Note, TypeNote } from 'src/app/models/note.model';
import { NoteBatchRequest } from 'src/app/models/NoteBatchRequest';
import { Etudiant } from 'src/app/models/Etudiant';

interface EtudiantNote {
  etudiantId: number;
  nom: string;
  prenom: string;
  valeur: number | null;
  notesExistantes: { valeur: number; type: string }[];
}

/**
 * Données reçues selon le contexte d'ouverture :
 *  - Depuis la page détail affectation : { etudiants, matiere, affectation }
 *  - Depuis la page notes (autonome)    : null
 */
interface NoteFormData {
  etudiants?: Etudiant[];
  matiere?: { id: number; nom: string };
  affectation?: { id: number; classe: { id: number; nom: string }; enseignant: any; matieres: any[] };
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
    MatProgressSpinnerModule
  ],
  templateUrl: './note-form.component.html',
  styleUrl: './note-form.component.scss'
})
export class NoteFormComponent implements OnInit {
  form!: FormGroup;
  isLoading = false;
  isLoadingStudents = false;

  // Mode autonome
  classes: any[] = [];
  affectations: any[] = [];
  annees: any[] = [];

  typesPeriode = Object.values(TypePeriode);
  typesNote = Object.values(TypeNote);
  periodes = [1, 2, 3];

  etudiantNotes: EtudiantNote[] = [];

  // true = ouvert depuis détail affectation (étudiants déjà fournis)
  get modePreRempli(): boolean {
    return !!(this.data?.affectation && this.data?.etudiants);
  }

  get selectedAffectation(): any {
    if (this.modePreRempli) return this.data.affectation;
    const id = this.form?.get('affectationId')?.value;
    return this.affectations.find(a => a.id === id) ?? null;
  }

  get notesRenseignees(): number {
    return this.etudiantNotes.filter(e => e.valeur !== null).length;
  }

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: NoteFormData,
    private dialogRef: MatDialogRef<NoteFormComponent>,
    private fb: FormBuilder,
    private classeService: ClasseService,
    private affectationService: AffectationService,
    private etudiantService: EtudiantService,
    private noteService: NoteService,
    private anneeService: AnneeScolaireService
  ) {}

  ngOnInit(): void {
    if (this.modePreRempli) {
      this.initModePreRempli();
    } else {
      this.initModeAutonome();
    }
  }

  // ─── Mode pré-rempli (depuis détail affectation) ──────────────────────────

  private initModePreRempli(): void {
    this.form = this.fb.group({
      typePeriode: [TypePeriode.TRIMESTRE, Validators.required],
      periode:     [1, Validators.required],
      typeNote:    [TypeNote.DEVOIR, Validators.required]
    });

    this.etudiantNotes = (this.data.etudiants ?? []).map(e => ({
      etudiantId: e.id!,
      nom: e.nom,
      prenom: e.prenom,
      valeur: null,
      notesExistantes: []
    }));

    this.chargerNotesExistantes();

    this.form.get('periode')!.valueChanges.subscribe(() => this.chargerNotesExistantes());
    this.form.get('typePeriode')!.valueChanges.subscribe(() => this.chargerNotesExistantes());
  }

  chargerNotesExistantes(): void {
    if (!this.modePreRempli) return;

    const periode     = this.form.get('periode')!.value;
    const typePeriode = this.form.get('typePeriode')!.value;
    const affectationId = this.data.affectation!.id;
    const matiereId     = this.data.matiere!.id;

    this.noteService.getNotesParAffectationEtPeriode(affectationId, periode, typePeriode)
      .subscribe((notes: Note[]) => {
        const filtrees = notes.filter(n => n.matiere?.id === matiereId);

        const byEtudiant = new Map<number, { valeur: number; type: string }[]>();
        filtrees.forEach(n => {
          const key = n.etudiant.id!;
          if (!byEtudiant.has(key)) byEtudiant.set(key, []);
          byEtudiant.get(key)!.push({ valeur: n.valeur, type: n.type as string });
        });

        this.etudiantNotes = this.etudiantNotes.map(e => ({
          ...e,
          notesExistantes: byEtudiant.get(e.etudiantId) ?? []
        }));
      });
  }

  // ─── Mode autonome (depuis page notes) ────────────────────────────────────

  private initModeAutonome(): void {
    this.form = this.fb.group({
      classeId:      [null, Validators.required],
      affectationId: [null, Validators.required],
      matiereId:     [null, Validators.required],
      typePeriode:   [TypePeriode.TRIMESTRE, Validators.required],
      periode:       [1, Validators.required],
      typeNote:      [TypeNote.DEVOIR, Validators.required]
    });

    this.classeService.getAllClasses().subscribe((c: any[]) => (this.classes = c));
    this.anneeService.getAll().subscribe((a: any[]) => {
      this.annees = a;
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

    this.chargerEtudiants(classeId);
  }

  onAffectationChange(): void {
    this.form.patchValue({ matiereId: null });
    const aff = this.selectedAffectation;
    if (aff?.matieres?.length === 1) {
      this.form.patchValue({ matiereId: aff.matieres[0].id });
    }
  }

  private chargerEtudiants(classeId: number): void {
    this.isLoadingStudents = true;
    this.etudiantService.getEtudiantsParClasse(classeId).subscribe({
      next: (etudiants: Etudiant[]) => {
        this.etudiantNotes = etudiants.map(e => ({
          etudiantId: e.id!,
          nom: e.nom,
          prenom: e.prenom,
          valeur: null,
          notesExistantes: []
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

    const affectationId = this.modePreRempli
      ? this.data.affectation!.id
      : v.affectationId;

    const matiereId = this.modePreRempli
      ? this.data.matiere!.id
      : v.matiereId;

    const batch: NoteBatchRequest[] = notesToSave.map(e => ({
      etudiantId:    e.etudiantId,
      affectationId,
      matiereId,
      valeur:        Number(e.valeur),
      type:          v.typeNote,
      periode:       v.periode,
      typePeriode:   v.typePeriode
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
