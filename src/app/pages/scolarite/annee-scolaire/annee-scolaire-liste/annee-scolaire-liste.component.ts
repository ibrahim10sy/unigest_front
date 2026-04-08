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
import { AnneeScolaireService } from 'src/app/services/annee-scolaire.service';
import { AnneeScolaire } from 'src/app/models/AnneeScolaire';
import { AnneeScolaireFormComponent } from '../annee-scolaire-form/annee-scolaire-form.component';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";


@Component({
  selector: 'vex-annee-scolaire-liste',
  standalone: true,
   animations: [fadeInUp400ms, stagger40ms],
 imports: [
    CommonModule, VexPageLayoutComponent, VexPageLayoutHeaderDirective,
    VexPageLayoutContentDirective, VexBreadcrumbsComponent, MatTableModule,
    MatPaginatorModule, MatSortModule, MatButtonModule, MatIconModule,
    MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatDialogModule,
    MatButtonToggleModule,
    MatSlideToggleModule
],
templateUrl: './annee-scolaire-liste.component.html',
  styleUrl: './annee-scolaire-liste.component.scss'
})

export class AnneeScolaireListeComponent  implements OnInit {

  layoutCtrl = new UntypedFormControl('boxed');
  searchCtrl = new UntypedFormControl();
  dataSource = new MatTableDataSource<AnneeScolaire>();
  displayedColumns: string[] = ['libelle', 'dateDebut', 'dateFin', 'statut', 'actions'];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(private service: AnneeScolaireService, private dialog: MatDialog) {}

  ngOnInit() { 
    this.refresh(); 
      this.searchCtrl.valueChanges.subscribe(v => this.dataSource.filter = v.trim().toLowerCase());

  }

  refresh() {
    this.service.getAll().subscribe(res => {
      this.dataSource.data = res;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
    });
  }

  appliquerFiltre(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
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

onToggleChange(event: any, row: AnneeScolaire) {

  const ancienStatut = row.active;

  // 🔁 On bloque visuellement le changement
  event.source.checked = ancienStatut;

  Swal.fire({
    title: ancienStatut ? 'Désactiver ?' : 'Activer ?',
    text: 'Voulez-vous vraiment changer le statut ?',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Confirmer',
    cancelButtonText: 'Annuler',
    confirmButtonColor: '#3f51b5',
    reverseButtons: true
  }).then((result) => {

    if (result.isConfirmed) {


      this.service.activer(row.id!).subscribe({
        next: () => {

          row.active = !ancienStatut;
          event.source.checked = row.active;

        },
        error: () => {

          Swal.fire(
            'Erreur',
            'Impossible de modifier le statut',
            'error'
          );
        }
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