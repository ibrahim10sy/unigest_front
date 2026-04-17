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
import { Paiement } from 'src/app/models/paiement';
import { PaiementService } from 'src/app/services/paiement.service';
import { ClasseService } from 'src/app/services/classe.service';
import { AnneeScolaire } from 'src/app/models/AnneeScolaire';
import { AnneeScolaireService } from 'src/app/services/annee-scolaire.service';
import { PaiementFormComponent } from '../paiement-form/paiement-form.component';
import { MatSelectModule } from '@angular/material/select';
import { PaiementDetailComponent } from '../../paiement-detail/paiement-detail.component';

@Component({
  selector: 'vex-paiement-list',
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
    MatSelectModule
  ],
  templateUrl: './paiement-list.component.html',
  styleUrl: './paiement-list.component.scss'
})
export class PaiementListComponent implements OnInit {
  layoutCtrl = new UntypedFormControl('boxed');
  searchCtrl = new UntypedFormControl();
  displayedColumns: string[] = [
    'datePaiement',
    'etudiant',
    'montant',
    'modePaiement',
    'actions'
  ];
  dataSource = new MatTableDataSource<Paiement>();
  selectedClasseId!: number;
  selectedAnneeId!: number;

  classes: any[] = [];
  annees: any[] = [];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(
    private paiementService: PaiementService,
    private classeService: ClasseService,
    private anneeService: AnneeScolaireService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.chargerInitialData();

    this.searchCtrl.valueChanges.subscribe(
      (v) => (this.dataSource.filter = v.trim().toLowerCase())
    );
  }
  chargerInitialData() {
    this.classeService.getAllClasses().subscribe((classes) => {
      this.classes = classes;

      this.anneeService.getAll().subscribe((annees) => {
        this.annees = annees;

        // ✅ Définir valeurs par défaut (ex: premier élément)
        this.selectedClasseId = this.classes[0]?.id;
        this.selectedAnneeId = this.annees[0]?.id;

        // ✅ Charger paiements
        this.chargerPaiement(this.selectedClasseId, this.selectedAnneeId);
      });
    });
  }

  onFilterChange() {
    this.chargerPaiement(this.selectedClasseId, this.selectedAnneeId);
  }

  // Récupération des données depuis le backend
  chargerPaiement(classeId: number, anneeId: number) {
    if (!classeId || !anneeId) return;

    this.paiementService.getHistoriquePaiements(classeId, anneeId).subscribe({
      next: (res: Paiement[]) => {
        this.dataSource.data = res;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err: any) => {
        console.error('Erreur lors du chargement des paiements', err);
        Swal.fire(
          'Erreur',
          'Impossible de charger la liste des paiements',
          'error'
        );
      }
    });
  }
  // Filtrer la table (recherche rapide)
  appliquerFiltre(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  chargerClasses() {
    this.classeService.getAllClasses().subscribe((data) => {});
  }

  chargerAnnee() {
    this.anneeService.getAll().subscribe((data) => {});
  }

  ajouter() {
    this.openDialog(null);
  }
  modifier(classe: any) {
    this.openDialog(classe);
  }

  voirDetails(paiement: Paiement) {
    this.dialog.open(PaiementDetailComponent, {
      width: '900px',
      data: paiement
    });
  }

  private openDialog(classe: any | null) {
    this.dialog
      .open(PaiementFormComponent, {
        width: '500px',
        disableClose: true,
        data: classe
      })
      .afterClosed()
      .subscribe((res) => {
        if (res) this.chargerClasses();
      });
  }

  supprimer(id: number) {
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
        this.paiementService.supprimerPaiement(id).subscribe({
          next: () => {
            Swal.fire('Supprimé !', 'Le paiement a été supprimé.', 'success');
            this.chargerInitialData();
          },
          error: (err: any) => {
            console.log('erreur ', err);
            Swal.fire(
              'Erreur',
              'Impossible de supprimer ce paiement ',
              'error'
            );
          }
        });
      }
    });
  }
}
