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
import Swal from 'sweetalert2';
import { VexPageLayoutComponent } from '@vex/components/vex-page-layout/vex-page-layout.component';
import { VexPageLayoutHeaderDirective } from '@vex/components/vex-page-layout/vex-page-layout-header.directive';
import { VexPageLayoutContentDirective } from '@vex/components/vex-page-layout/vex-page-layout-content.directive';
import { VexBreadcrumbsComponent } from '@vex/components/vex-breadcrumbs/vex-breadcrumbs.component';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { stagger40ms } from '@vex/animations/stagger.animation';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { Enseignant } from 'src/app/models/Enseignant';
import { EnseignantService } from 'src/app/services/enseignant.service';
import { EnseignantFormComponent } from '../enseignant-form/enseignant-form.component';

@Component({
  selector: 'vex-enseignant-list',
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
  templateUrl: './enseignant-list.component.html',
  styleUrl: './enseignant-list.component.scss'
})
export class EnseignantListComponent implements OnInit {
  layoutCtrl = new UntypedFormControl('boxed');
  searchCtrl = new UntypedFormControl();
  displayedColumns: string[] = [
    'nom',
    'specialite',
    'adresse',
    'email',
    'telephone',
    'actions'
  ];
  dataSource = new MatTableDataSource<Enseignant>();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(
    private enService: EnseignantService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.chargerEnseignant();
    this.searchCtrl.valueChanges.subscribe(
      (v) => (this.dataSource.filter = v.trim().toLowerCase())
    );
  }

  chargerEnseignant() {
    this.enService.getAllEnseignants().subscribe({
      next: (res: any) => {
        this.dataSource.data = res;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err: any) => {
        console.error('Erreur lors du chargement des enseignants', err);
        Swal.fire(
          'Erreur',
          'Impossible de charger la liste des enseignants',
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

  ajouter() {
    this.ouvrirDialogue();
  }

  // Ouvrir le formulaire pour la modification
  modifier(enseignant: Enseignant) {
    this.ouvrirDialogue(enseignant);
  }
  appeler(numero: string) {
    window.open(`tel:${numero}`, '_self');
  }

  envoyerEmail(email: string) {
    window.open(`mailto:${email}`, '_self');
  }

  ouvrirCarte(adresse: string) {
    const url = `https://www.google.com/maps/search/${encodeURIComponent(adresse)}`;
    window.open(url, '_blank');
  }
  // Logique commune pour le dialogue
  private ouvrirDialogue(enseignant?: Enseignant) {
    const dialogRef = this.dialog.open(EnseignantFormComponent, {
      data: enseignant || null,
      width: '600px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.enService.creerEnseignant(result).subscribe({
          next: () => {
            Swal.fire({
              icon: 'success',
              title: enseignant ? 'Enseignant modifié' : 'Enseignant créé',
              timer: 1500,
              showConfirmButton: false
            });
            this.chargerEnseignant();
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

  // Suppression d'un enseignant avec confirmation Swal
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
        this.enService.supprimerEnseignant(id).subscribe({
          next: () => {
            Swal.fire('Supprimé !', 'Le enseignant supprimé.', 'success');
            this.chargerEnseignant();
          },
          error: (err: any) => {
            console.log('erreur ', err);
            Swal.fire('Erreur', 'Impossible de supprimer  ', 'error');
          }
        });
      }
    });
  }
}
