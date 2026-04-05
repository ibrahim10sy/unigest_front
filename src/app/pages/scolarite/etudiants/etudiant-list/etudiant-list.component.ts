import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { EtudiantService } from 'src/app/services/etudiant.service';
import Swal from 'sweetalert2';
import { EtudiantFormComponent } from '../etudiant-form/etudiant-form.component';
import { Etudiant } from 'src/app/models/Etudiant';

@Component({
  selector: 'vex-etudiant-list',
  standalone: true,
imports: [CommonModule, MatTableModule, MatPaginatorModule, MatButtonModule, MatIconModule],  templateUrl: './etudiant-list.component.html',
  styleUrl: './etudiant-list.component.scss'
})

export class EtudiantListComponent implements OnInit {
  dataSource = new MatTableDataSource<Etudiant>();
  displayedColumns: string[] = ['matricule', 'nomComplet', 'parent', 'actions'];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(private etudiantService: EtudiantService, private dialog: MatDialog) {}

  ngOnInit() { this.refresh(); }

  refresh() {
    this.etudiantService.listerEtudiants().subscribe(res => {
      this.dataSource.data = res;
      this.dataSource.paginator = this.paginator;
    });
  }

  ajouter() { this.openDialog(); }
  modifier(etudiant: Etudiant) { this.openDialog(etudiant); }

  private openDialog(etudiant?: Etudiant) {
    this.dialog.open(EtudiantFormComponent, { data: etudiant, width: '700px' })
      .afterClosed().subscribe(val => {
        if (val) {
          this.etudiantService.save(val).subscribe(() => {
            Swal.fire('Succès', 'Opération réussie', 'success');
            this.refresh();
          });
        }
      });
  }

  supprimer(id: number) {
    Swal.fire({ title: 'Supprimer cet étudiant ?', icon: 'warning', showCancelButton: true })
      .then(r => {
        if (r.isConfirmed) {
          this.etudiantService.supprimerEtudiant(id).subscribe(() => this.refresh());
        }
      });
  }
}