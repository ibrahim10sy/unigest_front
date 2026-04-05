import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import Swal from 'sweetalert2';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AnneeScolaireService } from 'src/app/services/annee-scolaire.service';
import { AnneeScolaire } from 'src/app/models/AnneeScolaire';
import { AnneeScolaireFormComponent } from '../annee-scolaire-form/annee-scolaire-form.component';


@Component({
  selector: 'vex-annee-scolaire-liste',
  standalone: true,
imports: [CommonModule, MatTableModule, MatPaginatorModule, MatButtonModule, MatIconModule],  templateUrl: './annee-scolaire-liste.component.html',
  styleUrl: './annee-scolaire-liste.component.scss'
})

export class AnneeScolaireListeComponent  implements OnInit {
  dataSource = new MatTableDataSource<AnneeScolaire>();
  displayedColumns: string[] = ['libelle', 'dateDebut', 'dateFin', 'statut', 'actions'];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private service: AnneeScolaireService, private dialog: MatDialog) {}

  ngOnInit() { this.refresh(); }

  refresh() {
    this.service.getAll().subscribe(res => {
      this.dataSource.data = res;
      this.dataSource.paginator = this.paginator;
    });
  }

  ajouter() { this.openDialog(); }
  modifier(annee: AnneeScolaire) { this.openDialog(annee); }

  private openDialog(annee?: AnneeScolaire) {
    this.dialog.open(AnneeScolaireFormComponent, { data: annee, width: '500px' })
      .afterClosed().subscribe(val => {
        if (val) {
          this.service.save(val).subscribe(() => {
            Swal.fire('Succès', 'Opération réussie', 'success');
            this.refresh();
          });
        }
      });
  }

  supprimer(id: number) {
    Swal.fire({ title: 'Supprimer ?', showCancelButton: true }).then(r => {
      if (r.isConfirmed) this.service.delete(id).subscribe(() => this.refresh());
    });
  }
}