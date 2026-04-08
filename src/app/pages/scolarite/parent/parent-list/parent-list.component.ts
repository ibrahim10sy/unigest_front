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
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import Swal from 'sweetalert2';
import { ParentService } from 'src/app/services/parent.service';
import { Parent } from 'src/app/models/Parent';
import { ParentFormComponent } from '../parent-form/parent-form.component';


@Component({
  selector: 'vex-parent-list',
  standalone: true,
    animations: [fadeInUp400ms, stagger40ms],
  imports: [
    CommonModule, VexPageLayoutComponent, VexPageLayoutHeaderDirective,
    VexPageLayoutContentDirective, VexBreadcrumbsComponent, MatTableModule,
    MatPaginatorModule, MatSortModule, MatButtonModule, MatIconModule,
    MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatDialogModule,
    MatButtonToggleModule
],
  templateUrl: './parent-list.component.html'
})
export class ParentListComponent implements OnInit {

  // Configuration des colonnes de la table
  layoutCtrl = new UntypedFormControl('boxed');
  searchCtrl = new UntypedFormControl();
  displayedColumns: string[] = ['nom','prenom','adresse', 'email', 'telephone', 'actions'];
  dataSource = new MatTableDataSource<Parent>();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(
    private parentService: ParentService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.chargerParents();
    this.searchCtrl.valueChanges.subscribe(v => this.dataSource.filter = v.trim().toLowerCase());
  }

  // Récupération des données depuis le backend
  chargerParents() {
    this.parentService.getAll().subscribe({
      next: (res:any) => {
        this.dataSource.data = res;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err:any) => {
        console.error('Erreur lors du chargement des parents', err);
        Swal.fire('Erreur', 'Impossible de charger la liste des parents', 'error');
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

  // Ouvrir le formulaire pour l'ajout
  ajouter() {
    this.ouvrirDialogue();
  }

  // Ouvrir le formulaire pour la modification
  modifier(parent: Parent) {
    this.ouvrirDialogue(parent);
  }

  // Logique commune pour le dialogue
  private ouvrirDialogue(parent?: Parent) {
    const dialogRef = this.dialog.open(ParentFormComponent, {
      data: parent || null,
      width: '600px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.parentService.save(result).subscribe({
          next: () => {
            Swal.fire({
              icon: 'success',
              title: parent ? 'Parent modifié' : 'Parent créé',
              timer: 1500,
              showConfirmButton: false
            });
            this.chargerParents();
          },
          error: (err:any) => {
            Swal.fire('Erreur', 'Une erreur est survenue lors de l\'enregistrement', 'error');
          }
        });
      }
    });
  }

  // Suppression d'un parent avec confirmation Swal
  supprimer(id: number) {
    Swal.fire({
      title: 'Êtes-vous sûr ?',
      text: "Cette action est irréversible !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer !',
      cancelButtonText: 'Annuler'
    }).then((result) => {
      if (result.isConfirmed) {
        this.parentService.delete(id).subscribe({
          next: () => {
            Swal.fire('Supprimé !', 'Le parent a été supprimé.', 'success');
            this.chargerParents();
          },
          error: (err:any) => {
          console.log("erreur ", err)
            Swal.fire('Erreur', 'Impossible de supprimer ce parent ', 'error');
          }
        });
      }
    });
  }
}