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
import { AffectationService } from 'src/app/services/affectation.service';
import { Affectation } from 'src/app/models/Affectation';
import { AffectationFormComponent } from '../affectation-form/affectation-form.component';
import { Router } from '@angular/router';
import { AffectationRequest } from 'src/app/models/AffectationRequest';
@Component({
  selector: 'vex-affectation-list',
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
  templateUrl: './affectation-list.component.html',
  styleUrl: './affectation-list.component.scss'
})
export class AffectationListComponent implements OnInit {
  layoutCtrl = new UntypedFormControl('boxed');
  searchCtrl = new UntypedFormControl();
  displayedColumns: string[] = ['enseignant', 'matiere', 'classe', 'actions'];
  dataSource = new MatTableDataSource<Affectation>();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(
    private affectationService: AffectationService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.chargerAffectations();
    this.searchCtrl.valueChanges.subscribe(
      (v) => (this.dataSource.filter = v.trim().toLowerCase())
    );
  }

  // Récupération des données
  chargerAffectations() {
    this.affectationService.getAll().subscribe({
      next: (res: any) => {
        console.log('affectation : ', res);
        this.dataSource.data = res;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err: any) => {
        console.error('Erreur lors du chargement des affectations', err);
        Swal.fire(
          'Erreur',
          'Impossible de charger la liste des affectations',
          'error'
        );
      }
    });
  }

  // Filtre
  appliquerFiltre(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  // Ajouter
  ajouter() {
    this.ouvrirDialogue();
  }

  // Modifier
  modifier(affectation: AffectationRequest) {
    this.ouvrirDialogue(affectation);
  }
  details(affectation: Affectation) {
  this.router.navigate(['/pedagogie/affectations/details'], {
  state: { affectation }
});

  console.log("details affect :", affectation);
}

  // Dialogue (ajout / modification)
  private ouvrirDialogue(affectation?: AffectationRequest) {
    const dialogRef = this.dialog.open(AffectationFormComponent, {
      data: affectation || null,
      width: '600px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.affectationService.ajouterAffectation(result).subscribe({
          next: () => {
            Swal.fire({
              icon: 'success',
              title: affectation ? 'Affectation modifiée' : 'Affectation créée',
              timer: 1500,
              showConfirmButton: false
            });
            this.chargerAffectations();
          },
          error: (err: any) => {
            Swal.fire(
              'Erreur',
              "Une erreur est survenue lors de l'enregistrement",
              'error'
            );
          }
        });
      }
    });
  }

  // Supprimer
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
        this.affectationService.supprimerAffectation(id).subscribe({
          next: () => {
            Swal.fire(
              'Supprimé !',
              'L’affectation a été supprimée.',
              'success'
            );
            this.chargerAffectations();
          },
          error: (err: any) => {
            console.log('erreur ', err);
            Swal.fire(
              'Erreur',
              'Impossible de supprimer cette affectation',
              'error'
            );
          }
        });
      }
    });
  }
}
