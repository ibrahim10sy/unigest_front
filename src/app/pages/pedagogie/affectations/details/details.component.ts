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
    MatButtonToggleModule
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

  constructor(
    private seanceService: SeanceService,
    private dialog: MatDialog,
    private etudiantService: EtudiantService
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
