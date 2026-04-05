import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule, UntypedFormControl } from '@angular/forms';

// VEX Imports
import { VexPageLayoutComponent } from '@vex/components/vex-page-layout/vex-page-layout.component';
import { VexPageLayoutHeaderDirective } from '@vex/components/vex-page-layout/vex-page-layout-header.directive';
import { VexPageLayoutContentDirective } from '@vex/components/vex-page-layout/vex-page-layout-content.directive';
import { VexBreadcrumbsComponent } from '@vex/components/vex-breadcrumbs/vex-breadcrumbs.component';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { stagger40ms } from '@vex/animations/stagger.animation';

import Swal from 'sweetalert2';
import { ClasseService } from 'src/app/services/classe.service';
import { ClasseFormComponent } from '../classe-form/classe-form.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NiveauService } from 'src/app/services/niveau.service';
import { MatSelectModule } from '@angular/material/select'; // <--- INDISPENSABLE

@Component({
  selector: 'vex-classe-list',
  standalone: true,
  animations: [fadeInUp400ms, stagger40ms],
  imports: [
    CommonModule, VexPageLayoutComponent, VexPageLayoutHeaderDirective,
    VexPageLayoutContentDirective, VexBreadcrumbsComponent, MatTableModule,
    MatPaginatorModule, MatSortModule, MatButtonModule, MatIconModule,
    MatInputModule, MatFormFieldModule, MatTooltipModule, MatDialogModule, 
    ReactiveFormsModule,MatCheckboxModule,MatSelectModule, // <--- AJOUTE CECI ICI
  ],
  templateUrl: './classe-list.component.html'
})
export class ClasseListComponent implements OnInit {
  layoutCtrl = new UntypedFormControl('boxed');
  searchCtrl = new UntypedFormControl();
  
  displayedColumns: string[] = ['checkbox', 'nom', 'niveau', 'filiere', 'actions'];
  dataSource = new MatTableDataSource<any>();
  selection = new SelectionModel<any>(true, []);
  @ViewChild(MatPaginator, { static: true }) paginator?: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort?: MatSort;

  constructor(private classeService: ClasseService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.chargerClasses();

    this.searchCtrl.valueChanges.subscribe(value => this.dataSource.filter = value.trim().toLowerCase());
  }

  chargerClasses() {
    this.classeService.getAllClasses().subscribe(data => {
      this.dataSource.data = data;
      this.dataSource.paginator = this.paginator!;
      this.dataSource.sort = this.sort!;
    });
  }

  isAllSelected() {
    return this.selection.selected.length === this.dataSource.data.length;
  }

  masterToggle() {
    this.isAllSelected() ? this.selection.clear() : this.dataSource.data.forEach(row => this.selection.select(row));
  }

  ajouter() { this.openDialog(null); }
  modifier(classe: any) { this.openDialog(classe); }

  private openDialog(classe: any | null) {
    this.dialog.open(ClasseFormComponent, {
      width: '500px',
      disableClose: true,
      data: classe
    }).afterClosed().subscribe(res => { if (res) this.chargerClasses(); });
  }

  supprimer(classe: any) {
    Swal.fire({
      title: 'Supprimer ?',
      text: `Voulez-vous supprimer la classe ${classe.nom} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33'
    }).then((result) => {
      if (result.isConfirmed) {
        this.classeService.supprimerClasse(classe.id).subscribe(() => {
          this.chargerClasses();
          this.selection.deselect(classe);
          Swal.fire('Supprimé', '', 'success');
        });
      }
    });
  }
}