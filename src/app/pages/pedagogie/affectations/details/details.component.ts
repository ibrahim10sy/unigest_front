import { Affectation } from 'src/app/models/Affectation';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { VexPageLayoutComponent } from '@vex/components/vex-page-layout/vex-page-layout.component';
import { VexPageLayoutHeaderDirective } from '@vex/components/vex-page-layout/vex-page-layout-header.directive';
import { VexPageLayoutContentDirective } from '@vex/components/vex-page-layout/vex-page-layout-content.directive';
import { VexBreadcrumbsComponent } from '@vex/components/vex-breadcrumbs/vex-breadcrumbs.component';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { stagger40ms } from '@vex/animations/stagger.animation';
import Swal from 'sweetalert2';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Seance } from 'src/app/models/Seance';
import { SeanceService } from 'src/app/services/seance.service';
import { ClasseService } from 'src/app/services/classe.service';
import { Etudiant } from 'src/app/models/Etudiant';
import { AppelFormComponent } from '../../appels/appel-form/appel-form.component';
import { Appel } from 'src/app/models/Appel';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { SeanceFormComponent } from '../../seances/seance-form/seance-form.component';
import { Matiere } from 'src/app/models/Matiere';
import { NoteFormComponent } from '../../notes/note-form/note-form.component';
import { NoteService } from 'src/app/services/note.service';
import { Note, TypeNote } from 'src/app/models/note.model';
import { TypePeriode } from 'src/app/models/TypePeriode';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';

@Component({
  selector: 'vex-details',
  standalone: true,
  animations: [fadeInUp400ms, stagger40ms],
  imports: [
    CommonModule,
    VexPageLayoutComponent,
    VexPageLayoutHeaderDirective,
    VexPageLayoutContentDirective,
    VexBreadcrumbsComponent,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatTooltipModule
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent implements OnInit {
  layoutCtrl = new UntypedFormControl('boxed');
  searchCtrl = new UntypedFormControl();

  dataSource = new MatTableDataSource<Seance>();
  displayedColumns: string[] = [
    'date',
    'matiere',
    'heureDebut',
    'heureFin',
    'statut',
    'actions'
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  affectation!: Affectation;
  etudiants: Etudiant[] = [];

  typesPeriode = Object.values(TypePeriode);
  periodes = [1, 2, 3,4,5];
  periodeNotesCtrl  = new UntypedFormControl(1);
  typePeriodeNotesCtrl = new UntypedFormControl(TypePeriode);
  notesParMatiere: { matiereNom: string; lignes: { etudiantNom: string; notes: { id: number; valeur: number; type: string }[] }[] }[] = [];
  isLoadingNotes = false;

  constructor(
    private seanceService: SeanceService,
    private dialog: MatDialog,
    private etudiantService: EtudiantService,
    private noteService: NoteService
  ) {}

  ngOnInit(): void {
    this.affectation = history.state?.affectation;

    if (!this.affectation) return;

    this.chargerSeances(this.affectation.id!);
    this.chargerEtudiants(this.affectation.classe.id!);
  }

  chargerSeances(id: number) {
    this.seanceService.getSeancesParAffectation(id).subscribe((res) => {
      this.dataSource.data = res;

      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      });
    });
  }

  /**
   * Étudiants actifs de la classe (année active backend)
   */
  chargerEtudiants(classeId: number) {
    this.etudiantService
      .getEtudiantsParClasse(classeId)
      .subscribe((res) => (this.etudiants = res));
  }

  ouvrirAppel(seance: Seance) {
    const dialogRef = this.dialog.open(AppelFormComponent, {
      width: '900px',
      data: {
        seance,
        etudiants: this.etudiants
      }
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.chargerSeances(this.affectation.id!);
      }
    });
  }

  confirmerTerminerSeance(seance: Seance) {
    Swal.fire({
      title: 'Terminer la séance ?',
      text: 'Cette action est irréversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#ef4444',
      cancelButtonColor: '#6b7280',
      confirmButtonText: 'Oui, terminer',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.terminerSeance(seance);
      }
    });
  }

  ouvrirDemarrageSeance() {
    const dialogRef = this.dialog.open(SeanceFormComponent, {
      width: '500px',
      data: {
        affectationId: this.affectation?.id,
        matieres: this.affectation?.matieres
      }
    });

    dialogRef.afterClosed().subscribe((res) => {
      if (res) {
        this.chargerSeances(this.affectation.id!);
      }
    });
  }

  chargerNotesParMatiere(): void {
    if (!this.affectation?.id) return;
    this.isLoadingNotes = true;

    this.noteService.getNotesParAffectationEtPeriode(
      this.affectation.id,
      this.periodeNotesCtrl.value,
      this.typePeriodeNotesCtrl.value
    ).subscribe({
      next: (notes: Note[]) => {
        const byMatiere = new Map<number, {
          nom: string;
          byEtudiant: Map<number, { etudiantNom: string; notes: { id: number; valeur: number; type: string }[] }>;
        }>();

        notes.forEach(n => {
          const mid = n.matiere?.id as number;
          if (!byMatiere.has(mid)) {
            byMatiere.set(mid, { nom: n.matiere?.nom ?? '—', byEtudiant: new Map() });
          }
          const mEntry = byMatiere.get(mid)!;
          const eid = n.etudiant?.id as number;
          if (!mEntry.byEtudiant.has(eid)) {
            mEntry.byEtudiant.set(eid, {
              etudiantNom: `${n.etudiant.prenom} ${n.etudiant.nom}`,
              notes: []
            });
          }
          mEntry.byEtudiant.get(eid)!.notes.push({ id: n.id!, valeur: n.valeur, type: n.type as string });
        });

        this.notesParMatiere = [...byMatiere.entries()].map(([, data]) => ({
          matiereNom: data.nom,
          lignes: [...data.byEtudiant.values()]
        }));
        this.isLoadingNotes = false;
      },
      error: () => { this.isLoadingNotes = false; }
    });
  }

  modifierNote(noteId: number, valeurActuelle: number, typeActuel: string): void {
    Swal.fire({
      title: 'Modifier la note',
      input: 'number',
      inputLabel: `Type : ${typeActuel}`,
      inputValue: valeurActuelle,
      inputAttributes: { min: '0', max: '20', step: '0.5' },
      showCancelButton: true,
      confirmButtonText: 'Enregistrer',
      cancelButtonText: 'Annuler',
      inputValidator: (value) => {
        const v = parseFloat(value);
        if (isNaN(v) || v < 0 || v > 20) return 'La note doit être entre 0 et 20';
        return null;
      }
    }).then(result => {
      if (!result.isConfirmed) return;
      const nouvelleValeur = parseFloat(result.value);
      this.noteService.modifierNote(noteId, nouvelleValeur, typeActuel as TypeNote).subscribe({
        next: () => {
          Swal.fire({ title: 'Note modifiée', icon: 'success', timer: 1500, showConfirmButton: false });
          this.chargerNotesParMatiere();
        },
        error: () => Swal.fire({ title: 'Erreur', text: 'Impossible de modifier la note.', icon: 'error' })
      });
    });
  }

  ouvrirNotation(matiere: Matiere) {
  this.dialog.open(NoteFormComponent, {
    width: '1000px',
    data: {
      etudiants: this.etudiants,
      matiere,
      affectation: this.affectation
    }
  });
}

  terminerSeance(seance: Seance) {
    this.seanceService.terminerSeance(seance.id!).subscribe(() => {
      this.chargerSeances(this.affectation.id!);

      Swal.fire({
        title: 'Terminé !',
        text: 'La séance a été clôturée avec succès.',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false
      });
    });
  }

  /**
   * Filtre par date
   */
  filtrerParDate(date: string) {
    this.seanceService.getSeancesParDate(date).subscribe((res) => {
      this.dataSource.data = res;
    });
  }
}
