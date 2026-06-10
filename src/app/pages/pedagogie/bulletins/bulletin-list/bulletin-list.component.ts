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
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { VexBreadcrumbsComponent } from '@vex/components/vex-breadcrumbs/vex-breadcrumbs.component';
import { VexPageLayoutContentDirective } from '@vex/components/vex-page-layout/vex-page-layout-content.directive';
import { VexPageLayoutHeaderDirective } from '@vex/components/vex-page-layout/vex-page-layout-header.directive';
import { VexPageLayoutComponent } from '@vex/components/vex-page-layout/vex-page-layout.component';
import { Bulletin } from 'src/app/models/Bulletin';
import { TypePeriode } from 'src/app/models/TypePeriode';
import { AnneeScolaireService } from 'src/app/services/annee-scolaire.service';
import { BulletinService } from 'src/app/services/BulletinService.service';
import { ClasseService } from 'src/app/services/classe.service';
import { EtudiantService } from 'src/app/services/etudiant.service';
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
    private etudiantService: EtudiantService,
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
    if (!this.selectedClasseId) {
      Swal.fire('Attention', 'Sélectionnez une classe', 'warning');
      return;
    }

    Swal.fire({
      title: 'Générer les bulletins ?',
      text: `Période ${this.selectedPeriode} (${this.selectedTypePeriode}) — les bulletins déjà existants seront ignorés.`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Générer',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (!result.isConfirmed) return;

      this.isGenerating = true;

      // Utilise getEtudiantsParClasse — retourne Etudiant[] directement
      this.etudiantService.getEtudiantsParClasse(this.selectedClasseId)
        .subscribe({
          next: (etudiants: any[]) => {
            if (etudiants.length === 0) {
              this.isGenerating = false;
              Swal.fire('Info', 'Aucun étudiant trouvé dans cette classe', 'info');
              return;
            }

            // catchError sur chaque appel → on ignore les bulletins déjà existants
            const appels = etudiants.map((etu) =>
              this.bulletinService.genererBulletin(
                etu.id,
                this.selectedPeriode,
                this.selectedTypePeriode
              ).pipe(catchError(() => of(null)))
            );

            forkJoin(appels).subscribe({
              next: (resultats) => {
                this.isGenerating = false;
                const nbGeneres  = resultats.filter(r => r !== null).length;
                const nbIgnores  = resultats.filter(r => r === null).length;

                let message = `${nbGeneres} bulletin(s) généré(s)`;
                if (nbIgnores > 0) {
                  message += ` · ${nbIgnores} déjà existant(s) ignoré(s)`;
                }

                Swal.fire({ icon: 'success', title: message, timer: 2500, showConfirmButton: false });
                this.chargerBulletins();
              },
              error: () => {
                this.isGenerating = false;
                Swal.fire('Erreur', 'Une erreur est survenue pendant la génération', 'error');
              }
            });
          },
          error: () => {
            this.isGenerating = false;
            Swal.fire('Erreur', 'Impossible de récupérer les étudiants de la classe', 'error');
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

  // ─── Téléchargement PDF ───────────────────────────────────────────────────

  telechargerPdf(bulletin: Bulletin) {
    this.bulletinService.telechargerPdf(bulletin.id!).subscribe({
      next: (blob) => {
        const url = window.URL.createObjectURL(blob);
        const a   = document.createElement('a');
        const nom = `bulletin_${bulletin.etudiant?.nom}_${bulletin.etudiant?.prenom}_${bulletin.typePeriode}${bulletin.periode}.pdf`
          .toLowerCase().replace(/ /g, '_');
        a.href     = url;
        a.download = nom;
        a.click();
        window.URL.revokeObjectURL(url);
      },
      error: () => Swal.fire('Erreur', 'Impossible de générer le PDF', 'error')
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
