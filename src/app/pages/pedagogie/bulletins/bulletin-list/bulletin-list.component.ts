import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSortModule, MatSort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { VexBreadcrumbsComponent } from '@vex/components/vex-breadcrumbs/vex-breadcrumbs.component';
import { VexPageLayoutContentDirective } from '@vex/components/vex-page-layout/vex-page-layout-content.directive';
import { VexPageLayoutHeaderDirective } from '@vex/components/vex-page-layout/vex-page-layout-header.directive';
import { VexPageLayoutComponent } from '@vex/components/vex-page-layout/vex-page-layout.component';
import { Bulletin } from 'src/app/models/Bulletin';
import { TypePeriode } from 'src/app/models/TypePeriode';
import { AnneeScolaireService } from 'src/app/services/annee-scolaire.service';
import { BulletinService } from 'src/app/services/BulletinService.service';
import { ClasseService } from 'src/app/services/classe.service';
import Swal from 'sweetalert2';
import { MatSelectModule } from "@angular/material/select";

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
    MatSelectModule
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

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(
    private bulletinService: BulletinService,
    private classeService: ClasseService,
    private anneeService: AnneeScolaireService
  ) {}

  ngOnInit(): void {
    this.configurerRecherche();
    this.chargerInitialData();
  }

  configurerRecherche() {
    this.dataSource.filterPredicate = (data, filter) => {
      const etu =
        `${data.etudiant?.nom} ${data.etudiant?.prenom}`.toLowerCase();

      const classe = data.classe?.nom?.toLowerCase() || '';

      return (
        etu.includes(filter) ||
        classe.includes(filter) ||
        (data.moyenneGenerale + '').includes(filter)
      );
    };

    this.searchCtrl.valueChanges.subscribe((v) => {
      this.dataSource.filter = v?.trim().toLowerCase();

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

        this.chargerBulletins();
      });
    });
  }

  chargerBulletins() {
    if (
      !this.selectedClasseId ||
      !this.selectedPeriode ||
      !this.selectedTypePeriode
    ) return;

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

  supprimer(bulletin: Bulletin) {
    Swal.fire({
      title: 'Supprimer ce bulletin ?',
      icon: 'warning',
      showCancelButton: true
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
    this.selectedTypePeriode = TypePeriode.SEMESTRE;
    this.chargerBulletins();
  }
}