import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { forkJoin } from 'rxjs';
import { VexBreadcrumbsComponent } from '@vex/components/vex-breadcrumbs/vex-breadcrumbs.component';
import { VexPageLayoutContentDirective } from '@vex/components/vex-page-layout/vex-page-layout-content.directive';
import { VexPageLayoutHeaderDirective } from '@vex/components/vex-page-layout/vex-page-layout-header.directive';
import { VexPageLayoutComponent } from '@vex/components/vex-page-layout/vex-page-layout.component';
import { Bulletin } from 'src/app/models/Bulletin';
import { TypePeriode } from 'src/app/models/TypePeriode';
import { AnneeScolaireService } from 'src/app/services/annee-scolaire.service';
import { BulletinService } from 'src/app/services/BulletinService.service';
import { ClasseService } from 'src/app/services/classe.service';
import { InscriptionService } from 'src/app/services/inscription.service';
import { BulletinDetailComponent } from '../bulletin-detail/bulletin-detail.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'vex-bulletin-list',
  standalone: true,
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
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatTooltipModule
  ],
  templateUrl: './bulletin-list.component.html',
  styleUrl: './bulletin-list.component.scss'
})
export class BulletinListComponent implements OnInit {
  layoutCtrl = new UntypedFormControl('boxed');
  searchCtrl = new UntypedFormControl();

  dataSource = new MatTableDataSource<Bulletin>();

  displayedColumns: string[] = [
    'id',
    'etudiant',
    'classe',
    'periode',
    'typePeriode',
    'moyenneGenerale',
    'rang',
    'dateGeneration',
    'actions'
  ];

  classes: any[] = [];
  annees: any[] = [];

  periodes: number[] = [1, 2, 3];
  typesPeriode = Object.values(TypePeriode);

  selectedClasseId!: number;
  selectedAnneeId!: number;
  selectedPeriode!: number;
  selectedTypePeriode!: TypePeriode;

  isGenerating = false;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(
    private bulletinService: BulletinService,
    private classeService: ClasseService,
    private anneeService: AnneeScolaireService,
    private inscriptionService: InscriptionService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.configurerRecherche();
    this.chargerInitialData();
  }

  configurerRecherche() {
    this.dataSource.filterPredicate = (data, filter) => {
      const etu = `${data.etudiant?.nom} ${data.etudiant?.prenom}`.toLowerCase();
      const classe = data.classe?.nom?.toLowerCase() ?? '';
      return (
        etu.includes(filter) ||
        classe.includes(filter) ||
        (data.moyenneGenerale + '').includes(filter)
      );
    };

    this.searchCtrl.valueChanges.subscribe((v) => {
      this.dataSource.filter = v?.trim().toLowerCase();
      if (this.dataSource.paginator) this.dataSource.paginator.firstPage();
    });
  }

  chargerInitialData() {
    this.classeService.getAllClasses().subscribe((classes) => {
      this.classes = classes;
      this.anneeService.getAll().subscribe((annees) => {
        this.annees = annees;
        this.selectedClasseId = this.classes[0]?.id;
        const active = annees.find((a: any) => a.active);
        this.selectedAnneeId = (active?.id ?? annees[0]?.id) as number;
        this.selectedPeriode = 1;
        this.selectedTypePeriode = TypePeriode.TRIMESTRE;
        this.chargerBulletins();
      });
    });
  }

  chargerBulletins() {
    if (!this.selectedClasseId || !this.selectedPeriode || !this.selectedTypePeriode) return;

    this.bulletinService
      .getBulletinsClassePeriode(
        this.selectedClasseId,
        this.selectedPeriode,
        this.selectedTypePeriode
      )
      .subscribe({
        next: (res) => {
          this.dataSource.data = res;
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        },
        error: () => {
          Swal.fire('Erreur', 'Chargement impossible', 'error');
        }
      });
  }

  onFilterChange() {
    this.chargerBulletins();
  }

  // ─── Génération des bulletins pour toute la classe ───────────────────────

  genererTousBulletins() {
    if (!this.selectedClasseId || !this.selectedAnneeId) {
      Swal.fire('Attention', 'Sélectionnez une classe et une année', 'warning');
      return;
    }

    Swal.fire({
      title: 'Générer les bulletins ?',
      text: `Générer les bulletins pour toute la classe — Période ${this.selectedPeriode} (${this.selectedTypePeriode})`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Générer',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (!result.isConfirmed) return;

      this.isGenerating = true;

      this.inscriptionService
        .getEtudiantsParClasseEtAnnee(this.selectedClasseId, this.selectedAnneeId)
        .subscribe({
          next: (inscriptions: any[]) => {
            const etudiants = inscriptions.filter((ins) => ins.etudiant?.id);

            if (etudiants.length === 0) {
              this.isGenerating = false;
              Swal.fire('Info', 'Aucun étudiant inscrit dans cette classe', 'info');
              return;
            }

            const appels = etudiants.map((ins) =>
              this.bulletinService.genererBulletin(
                ins.etudiant.id,
                this.selectedPeriode,
                this.selectedTypePeriode
              )
            );

            forkJoin(appels).subscribe({
              next: () => {
                this.isGenerating = false;
                Swal.fire({
                  icon: 'success',
                  title: `${etudiants.length} bulletin(s) généré(s)`,
                  timer: 2000,
                  showConfirmButton: false
                });
                this.chargerBulletins();
              },
              error: (err) => {
                this.isGenerating = false;
                Swal.fire('Erreur', err?.error?.message ?? 'Génération échouée', 'error');
              }
            });
          },
          error: () => {
            this.isGenerating = false;
            Swal.fire('Erreur', 'Impossible de récupérer les étudiants', 'error');
          }
        });
    });
  }

  // ─── Détail du bulletin ───────────────────────────────────────────────────

  voirDetail(bulletin: Bulletin) {
    this.dialog.open(BulletinDetailComponent, {
      width: '640px',
      data: { bulletinId: bulletin.id }
    });
  }

  // ─── Supprimer ────────────────────────────────────────────────────────────

  supprimer(bulletin: Bulletin) {
    Swal.fire({
      title: 'Supprimer ce bulletin ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Supprimer',
      cancelButtonText: 'Annuler'
    }).then((r) => {
      if (r.isConfirmed) {
        this.bulletinService
          .supprimerBulletin(bulletin.id!)
          .subscribe(() => this.chargerBulletins());
      }
    });
  }

  resetFilters() {
    this.selectedPeriode = 1;
    this.selectedTypePeriode = TypePeriode.TRIMESTRE;
    this.chargerBulletins();
  }
}
