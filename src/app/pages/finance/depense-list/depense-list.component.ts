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
import { Router } from '@angular/router';
import { Depense, DepenseService } from 'src/app/services/DepenseService.service';
import { DepenseFormComponent } from '../depense-form/depense-form.component';
import { CategorieDepenseService } from 'src/app/services/categorie-depense.service';

@Component({
  selector: 'vex-depense-list',
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
  templateUrl: './depense-list.component.html',
  styleUrl: './depense-list.component.scss'
})
export class DepenseListComponent implements OnInit {
  // Configuration des colonnes de la table
  layoutCtrl = new UntypedFormControl('boxed');
  searchCtrl = new UntypedFormControl();
  dataSource = new MatTableDataSource<Depense>();
  displayedColumns: string[] = [
    'dateDepense',
    'libelle',
    'categorie',
    'montant',
    'actions'
  ];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(
    private dService: DepenseService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit() {
    this.refresh();
    this.searchCtrl.valueChanges.subscribe(
      (v) => (this.dataSource.filter = v.trim().toLowerCase())
    );
  }

  refresh() {
    this.dService.getAll().subscribe((res) => {
      this.dataSource.data = res;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log('data', this.dataSource.data);
    });
  }

 supprimer(row: Depense) {
  Swal.fire({ 
    title: 'Supprimer ?', 
    icon: 'warning', 
    showCancelButton: true,
    confirmButtonText: 'Oui, supprimer',
    cancelButtonText: 'Annuler'
  }).then(r => {
    if (r.isConfirmed) {
      this.dService.delete(row.id!).subscribe(() => {
        // Rafraîchir la liste
        this.refresh();
        
        // Message de succès sans bouton OK
        Swal.fire({
          icon: 'success',
          title: 'Supprimé avec succès',
          showConfirmButton: false, // Cache le bouton OK
          timer: 1500,              // Disparaît après 1.5 secondes
          timerProgressBar: true    // Ajoute une petite barre de progression
        });
      });
    }
  });
}

  ouvrirForm(depense?: Depense) {
    this.dialog.open(DepenseFormComponent, { data: depense || null, width: '500px' })
      .afterClosed().subscribe(res => { if (res) this.refresh(); });
  }
}
