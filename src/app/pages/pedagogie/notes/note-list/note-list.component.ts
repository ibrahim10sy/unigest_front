import { Component, OnInit, ViewChild } from '@angular/core';
import { ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Note } from 'src/app/models/note.model';
import { NoteService } from 'src/app/services/note.service';
import { NoteFormComponent } from '../note-form/note-form.component';
import Swal from 'sweetalert2';
import { VexPageLayoutComponent } from '@vex/components/vex-page-layout/vex-page-layout.component';
import { VexBreadcrumbsComponent } from '@vex/components/vex-breadcrumbs/vex-breadcrumbs.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { VexPageLayoutContentDirective } from '@vex/components/vex-page-layout/vex-page-layout-content.directive';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { VexPageLayoutHeaderDirective } from '@vex/components/vex-page-layout/vex-page-layout-header.directive';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { TypePeriode } from 'src/app/models/TypePeriode';
import { AnneeScolaireService } from 'src/app/services/annee-scolaire.service';
import { MatSelectModule } from "@angular/material/select";
import { ClasseService } from 'src/app/services/classe.service';

@Component({
  selector: 'vex-note-list',
  standalone: true,
  imports: [
    CommonModule, VexPageLayoutComponent, VexPageLayoutHeaderDirective,
    VexPageLayoutContentDirective, VexBreadcrumbsComponent, MatTableModule,
    MatPaginatorModule, MatSortModule, MatButtonModule, MatIconModule,
    MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatDialogModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatSelectModule
],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.scss'
})
export class NoteListComponent implements OnInit {
  layoutCtrl = new UntypedFormControl('boxed');
  searchCtrl = new UntypedFormControl();

  dataSource = new MatTableDataSource<Note>();

  displayedColumns: string[] = [
    'etudiant',
    'matiere',
    'valeur',
    'type',
    'periode',
    'typePeriode',
    'dateEvaluation',
    'actions'
  ];

  annees: any[] = [];
  classes: any[] = [];

  periodes: number[] = [1, 2, 3,4,5];
  typesPeriode = Object.values(TypePeriode);

  selectedAnneeId!: number;
  selectedClasseId!: number;
  selectedPeriode!: number;
  selectedTypePeriode!: TypePeriode;

  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;

  @ViewChild(MatSort, { static: true })
  sort!: MatSort;

  constructor(
    private noteService: NoteService,
    private anneeService: AnneeScolaireService,
    private classeService: ClasseService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.configurerRecherche();
    this.chargerInitialData();
  }

  configurerRecherche() {
    this.dataSource.filterPredicate = (data, filter) => {
      const fullName =
        `${data.etudiant?.nom} ${data.etudiant?.prenom}`.toLowerCase();

      return (
        fullName.includes(filter) ||
        data.type.toLowerCase().includes(filter) ||
        data.valeur.toString().includes(filter)
      );
    };

    this.searchCtrl.valueChanges.subscribe((value) => {
      this.dataSource.filter = value.trim().toLowerCase();

      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    });
  }

  chargerInitialData() {
    this.classeService.getAllClasses().subscribe((classes) => {
      this.classes = classes;

      this.anneeService.getAll().subscribe((annees) => {
        this.annees = annees;

        this.selectedClasseId = this.classes[0]?.id;
        this.selectedAnneeId = this.annees[0]?.id;

        this.selectedPeriode = 1;
        this.selectedTypePeriode = TypePeriode.SEMESTRE;

        this.chargerNotes();
      });
    });
  }

  chargerNotes() {
    if (
      !this.selectedClasseId ||
      !this.selectedAnneeId ||
      !this.selectedPeriode ||
      !this.selectedTypePeriode
    ) {
      return;
    }

    this.noteService
      .getNotesParClasseEtPeriode(
        this.selectedClasseId,
        this.selectedAnneeId,
        this.selectedPeriode,
        this.selectedTypePeriode
      )
      .subscribe({
        next: (res) => {
          this.dataSource.data = res;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: (err) => {
          console.error(err);
        }
      });
  }

  onFilterChange() {
    this.chargerNotes();
  }

  ajouter() {
    this.dialog
      .open(NoteFormComponent, {
        width: '700px',
        data: null
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) this.chargerNotes();
      });
  }

  modifier(note: Note) {
    this.dialog
      .open(NoteFormComponent, {
        width: '700px',
        data: note
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) this.chargerNotes();
      });
  }

  supprimer(note: Note) {
    Swal.fire({
      title: 'Supprimer cette note ?',
      icon: 'warning',
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.noteService.supprimerNote(note.id!).subscribe(() => {
          this.chargerNotes();
        });
      }
    });
  }
}