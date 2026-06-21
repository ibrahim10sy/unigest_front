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
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import Swal from 'sweetalert2';
import { Appel } from 'src/app/models/Appel';
import { AppelService } from 'src/app/services/appel.service';
import { AppelFormComponent } from '../appel-form/appel-form.component';
import { AppelDetailsComponent } from '../appel-details/appel-details.component';
import { AnneeScolaireService } from 'src/app/services/annee-scolaire.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { ClasseService } from 'src/app/services/classe.service';

@Component({
  selector: 'vex-appel-seance',
  standalone: true,
  animations: [fadeInUp400ms, stagger40ms],
  imports: [
    CommonModule,
    ReactiveFormsModule,

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
    MatDialogModule,
    MatButtonToggleModule,

    MatDatepickerModule,
    MatNativeDateModule,

    MatOptionModule,
    MatSelectModule
  ],
  templateUrl: './appel-seance.component.html',
  styleUrl: './appel-seance.component.scss'
})
export class AppelSeanceComponent implements OnInit {
  layoutCtrl = new UntypedFormControl('boxed');
  searchCtrl = new UntypedFormControl('');
  anneeCtrl = new UntypedFormControl();
  classeCtrl = new UntypedFormControl();
  statutCtrl = new UntypedFormControl();
  dateCtrl = new UntypedFormControl();

  annees: any[] = [];
  classes: any[] = [];

  tousLesAppels: Appel[] = [];
  totalAppels = 0;
  totalAbsents = 0;
  totalRetards = 0;

  displayedColumns: string[] = [
    'date',
    'seance',
    'classe',
    'etudiant',
    'statut',
    'actions'
  ];

  dataSource = new MatTableDataSource<Appel>([]);

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(
    private appelService: AppelService,
    private classeService: ClasseService,
    private dialog: MatDialog,
    private anneeScolaireService: AnneeScolaireService
  ) {}

  ngOnInit(): void {
    this.chargerAnnees();
    this.chargerClasses();
    this.chargerAppelsAnneeCourante();

    this.anneeCtrl.valueChanges.subscribe(anneeId => {
      if (anneeId) {
        this.appelService.getByAnnee(anneeId).subscribe({
          next: appels => { this.tousLesAppels = appels; this.appliquerTousFiltres(); },
          error: () => {}
        });
      }
    });

    this.searchCtrl.valueChanges.subscribe(() => this.appliquerTousFiltres());
    this.classeCtrl.valueChanges.subscribe(() => this.appliquerTousFiltres());
    this.statutCtrl.valueChanges.subscribe(() => this.appliquerTousFiltres());
    this.dateCtrl.valueChanges.subscribe(() => this.appliquerTousFiltres());
  }

  chargerAnnees(): void {
    this.anneeScolaireService.getAll().subscribe({
      next: (res) => {
        this.annees = res;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des années scolaires', err);
      }
    });
  }

  chargerClasses(): void {
    this.classeService.getAllClasses().subscribe({
      next: (res) => {
        this.classes = res;
      },
      error: (err) => {
        console.error('Erreur lors du chargement des classes', err);
      }
    });
  }
  calculerStats(): void {
    const data = this.dataSource.data;

    this.totalAppels = data.length;
    this.totalAbsents = data.filter((x) => x.statut === 'ABSENT').length;
    this.totalRetards = data.filter((x) => x.statut === 'RETARD').length;
  }

  resetFiltres(): void {
    this.searchCtrl.reset('');
    this.anneeCtrl.reset();
    this.classeCtrl.reset();
    this.statutCtrl.reset();
    this.dateCtrl.reset();

    this.chargerAppelsAnneeCourante();
  }

  chargerAppelsAnneeCourante(): void {
    this.anneeScolaireService.getAnneeActive().subscribe({
      next: (annee) => {
        this.anneeCtrl.setValue(annee.id, { emitEvent: false });
        this.appelService.getByAnnee(annee.id!).subscribe({
          next: (appels) => {
            this.tousLesAppels = appels;
            this.appliquerTousFiltres();
          },
          error: () => {}
        });
      },
      error: () => {}
    });
  }

  chargerAppels(): void {
    this.appelService.getAll().subscribe({
      next: (res: Appel[]) => {
        this.tousLesAppels = res;
        this.appliquerTousFiltres();
      },
      error: () => {}
    });
  }

  appliquerTousFiltres(): void {
    let resultat = [...this.tousLesAppels];

    const texte = (this.searchCtrl.value || '').trim().toLowerCase();
    if (texte) {
      resultat = resultat.filter(a =>
        a.etudiant?.nom?.toLowerCase().includes(texte) ||
        a.etudiant?.prenom?.toLowerCase().includes(texte) ||
        a.seance?.matiere?.toLowerCase().includes(texte) ||
        a.seance?.affectation?.classe?.nom?.toLowerCase().includes(texte) ||
        a.statut?.toLowerCase().includes(texte)
      );
    }

    const classeId = this.classeCtrl.value;
    if (classeId) {
      resultat = resultat.filter(a => a.seance?.affectation?.classe?.id === classeId);
    }

    const statut = this.statutCtrl.value;
    if (statut) {
      resultat = resultat.filter(a => a.statut === statut);
    }

    const date: Date | null = this.dateCtrl.value;
    if (date) {
      const iso = date.toISOString().substring(0, 10);
      resultat = resultat.filter(a => a.seance?.date?.toString().substring(0, 10) === iso);
    }

    this.dataSource.data = resultat;
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.calculerStats();
  }

  ouvrirDetail(appel: Appel): void {
    this.dialog.open(AppelDetailsComponent, {
      data: appel,
      width: '800px'
    });
  }

  ouvrirForm(appel?: Appel): void {
    this.dialog
      .open(AppelFormComponent, {
        data: appel ?? null,
        width: '800px'
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          this.chargerAppels();
        }
      });
  }

  exportAbsences(): void {
    const classeId = this.classeCtrl.value;
    const anneeId  = this.anneeCtrl.value;
    if (!classeId || !anneeId) {
      Swal.fire('Sélection requise', 'Veuillez sélectionner une classe et une année scolaire.', 'warning');
      return;
    }
    this.appelService.exportAbsencesClassePdf(classeId, anneeId).subscribe(blob => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      const classe = this.classes.find(c => c.id === classeId);
      a.download = `absences-${classe?.nom ?? classeId}.pdf`;
      a.click();
      URL.revokeObjectURL(url);
    });
  }

  supprimer(id: number): void {
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: 'Cette action est irréversible !',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer !',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.appelService.delete(id).subscribe({
          next: () => {
            Swal.fire(
              'Supprimé !',
              'L’appel a été supprimé avec succès.',
              'success'
            );

            this.chargerAppels();
          },
          error: (err) => {
            console.error(err);

            Swal.fire('Erreur', 'Impossible de supprimer cet appel', 'error');
          }
        });
      }
    });
  }
}
