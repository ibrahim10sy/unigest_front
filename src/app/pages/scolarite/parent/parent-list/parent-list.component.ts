import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

import { ParentFormComponent } from '../parent-form/parent-form.component';
import Swal from 'sweetalert2';
import { Parent } from 'src/app/models/Parent';
import { ParentService } from 'src/app/services/parent.service';

@Component({
  selector: 'vex-parent-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule
  ],
  templateUrl: './parent-list.component.html'
})
export class ParentListComponent implements OnInit {

  // Configuration des colonnes de la table
  displayedColumns: string[] = ['nom', 'email', 'telephone', 'actions'];
  dataSource = new MatTableDataSource<Parent>();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(
    private parentService: ParentService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.chargerParents();
  }

  // Récupération des données depuis le backend
  chargerParents() {
    this.parentService.getAll().subscribe({
      next: (res:any) => {
        this.dataSource.data = res;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log('data', this.dataSource.data);
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