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
import { Matiere, MatiereService } from 'src/app/services/matiere.service';
import { MatiereFormComponent } from '../matiere-form/matiere-form.component';
import Swal from 'sweetalert2';
import { MatSlideToggleModule } from "@angular/material/slide-toggle";

@Component({
  selector: 'vex-matiere-list',
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
  templateUrl: './matiere-list.component.html',
  styleUrl: './matiere-list.component.scss'
})
export class MatiereListComponent {

    layoutCtrl = new UntypedFormControl('boxed');
    searchCtrl = new UntypedFormControl();
    dataSource = new MatTableDataSource<Matiere>();
    displayedColumns: string[] = ['id', 'nom','statut', 'actions'];
  
    @ViewChild(MatPaginator, { static: true }) paginator?: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort?: MatSort;
  
    constructor(private matiereService: MatiereService, private dialog: MatDialog) {}
  
    ngOnInit(): void {
      this.chargerMatiere();
      this.searchCtrl.valueChanges.subscribe(v => this.dataSource.filter = v.trim().toLowerCase());
    }
  
    chargerMatiere() {
      this.matiereService.getAllMatieres().subscribe(res => {
        this.dataSource.data = res;
        this.dataSource.paginator = this.paginator!;
        this.dataSource.sort = this.sort!;
      });
    }
  
     applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
    ajouter() { this.openDialog(null); } 
    modifier(matiere: Matiere) { this.openDialog(matiere); }
  
    private openDialog(matiere: Matiere | null) {
      this.dialog.open(MatiereFormComponent, {
        width: '400px',
        data: matiere
      }).afterClosed().subscribe(res => { if (res) this.chargerMatiere(); });
    }
  
    supprimer(matiere : Matiere ) {
      Swal.fire({ title: 'Supprimer ?', icon: 'warning', showCancelButton: true }).then(r => {
        if (r.isConfirmed) this.matiereService.supprimerMatiere(matiere.id!).subscribe(() => this.chargerMatiere());
      });
    }

}
