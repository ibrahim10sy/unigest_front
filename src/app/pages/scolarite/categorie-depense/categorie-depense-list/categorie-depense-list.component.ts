import { Component, OnInit } from '@angular/core';
import { CategorieDepense } from 'src/app/models/CategorieDepense';
import Swal from 'sweetalert2';
import { CategorieFormComponent } from '../categorie-depense-form/categorie-depense-form.component';
import { CategorieDepenseService } from 'src/app/services/categorie-depense.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';


// Importations Vex (Vérifiez les chemins dans votre projet)
import { VexPageLayoutComponent } from '@vex/components/vex-page-layout/vex-page-layout.component';
import { VexPageLayoutHeaderDirective } from '@vex/components/vex-page-layout/vex-page-layout-header.directive';
import { VexPageLayoutContentDirective } from '@vex/components/vex-page-layout/vex-page-layout-content.directive';
import { VexBreadcrumbsComponent } from '@vex/components/vex-breadcrumbs/vex-breadcrumbs.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@Component({
  selector: 'vex-categorie-depense-list',
  standalone: true,
  imports: [
CommonModule,
    // Material
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    // Vex
    VexPageLayoutComponent,
    VexPageLayoutHeaderDirective,
    VexPageLayoutContentDirective,
    VexBreadcrumbsComponent
  ],
  templateUrl: './categorie-depense-list.component.html',
  styleUrl: './categorie-depense-list.component.scss'
})

export class CategorieListComponent implements OnInit {
  dataSource = new MatTableDataSource<CategorieDepense>();
  
  constructor(private service: CategorieDepenseService, private dialog: MatDialog) {}

  ngOnInit(): void { this.loadData(); }

  loadData() {
    this.service.getAll().subscribe((res:any) => this.dataSource.data = res);
  }

  ajouter() { this.openDialog(null); }
  modifier(row: CategorieDepense) { this.openDialog(row); }

  private openDialog(data: CategorieDepense | null) {
    this.dialog.open(CategorieFormComponent, { width: '400px', data }).afterClosed()
      .subscribe((res:any) => { if (res) this.loadData(); });
  }

  supprimer(row: CategorieDepense) {
    Swal.fire({ title: 'Supprimer ?', icon: 'warning', showCancelButton: true }).then(r => {
      if (r.isConfirmed) this.service.delete(row.id!).subscribe(() => this.loadData());
    });
  }
}