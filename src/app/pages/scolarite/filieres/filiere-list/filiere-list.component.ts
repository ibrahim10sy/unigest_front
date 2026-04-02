import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FiliereService } from 'src/app/services/filiere.service';

import Swal from 'sweetalert2';
import { Filiere } from 'src/app/models/Filiere';
import { FiliereFormComponent } from '../filiere-form/filiere-form.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@Component({
  selector: 'vex-filiere-list',
  standalone: true,
  imports: [
      MatSlideToggleModule,
    MatIconModule,
    CommonModule, MatTableModule, MatPaginatorModule, MatSortModule,
    MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule, MatTooltipModule
  ],
  templateUrl: './filiere-list.component.html',
  styleUrl: './filiere-list.component.scss'
})
export class FiliereListComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'nom', 'actif', 'actions'];
  dataSource = new MatTableDataSource<Filiere>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private filiereService: FiliereService, private dialog:MatDialog) {}

  ngOnInit(): void {
    this.chargerFilieres();
  }

  

  chargerFilieres() {
    this.filiereService.getAllFilieres().subscribe({
      next: (data) => {
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (error) => {
        console.log('Erreur', 'Impossible de charger les filières',error);
      }
    });
  }


  // Dans filiere-list.component.ts
// 1. Pour l'AJOUT
ajouter() {
  this.openDialog(null);
}

// 2. Pour la MODIFICATION (appelée depuis le bouton edit du tableau)
modifier(filiere: Filiere) {
  this.openDialog(filiere);
}

// 3. La méthode commune qui ouvre la modale
private openDialog(filiere: Filiere | null) {
  this.dialog.open(FiliereFormComponent, {
    width: '400px',
    disableClose: true,
    data: filiere // null si ajout, objet si modif
  }).afterClosed().subscribe((res: any) => {
    if (res) {
      this.chargerFilieres(); // Rafraîchit la liste si le formulaire a été validé
    }
  });
}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  supprimer(filiere: Filiere) {
    Swal.fire({
      title: 'Supprimer ?',
      text: `Voulez-vous vraiment supprimer la filière ${filiere.nom} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Annuler',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed && filiere.id) {
        this.filiereService.supprimerFiliere(filiere.id).subscribe(() => {
          this.chargerFilieres();
          Swal.fire('Supprimé', 'La filière a été retirée', 'success');
        });
      }
    });
  }


  onToggleClick(event: Event, filiere: Filiere) {
  // 1. Bloque le comportement par défaut du switch
  event.preventDefault();

  const statusInitial = filiere.actif;

  Swal.fire({
    title: statusInitial ? 'Désactiver ?' : 'Activer ?',
    text: `Voulez-vous vraiment changer le statut de la filière ${filiere.nom} ?`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Confirmer',
    cancelButtonText: 'Annuler',
    confirmButtonColor: '#3f51b5',
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      const nouveauStatut = !statusInitial;

      // 2. Appel au service (on ne change l'UI qu'en cas de succès)
      this.filiereService.updateActif(filiere.id!, nouveauStatut).subscribe({
        next: () => {
          // ✅ Succès : On met à jour l'objet pour que le switch bascule
          filiere.actif = nouveauStatut;
          
          Swal.fire({
            icon: 'success',
            title: 'Statut mis à jour',
            timer: 1000,
            showConfirmButton: false
          });
        },
        error: (err) => {
          
          // ❌ Erreur : On ne touche à rien, le switch reste sur statusInitial
          console.error(err);
          Swal.fire('Erreur', 'Impossible de modifier le statut sur le serveur', 'error');
        }
      });
    } else {
      // 🔄 Annulation : On ne fait rien. 
      // Le binding [checked]="row.actif" garantit que le switch reste/revient 
      // à la position correspondant à statusInitial.
    }
  });
}

}