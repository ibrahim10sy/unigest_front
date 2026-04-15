import { Affectation } from 'src/app/models/Affectation';
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
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { Seance } from 'src/app/models/Seance';
import { SeanceService } from 'src/app/services/seance.service';


@Component({
  selector: 'vex-seance-list',
  standalone: true,
      animations: [fadeInUp400ms, stagger40ms],
      imports: [
        CommonModule, VexPageLayoutComponent, VexPageLayoutHeaderDirective,
        VexPageLayoutContentDirective, VexBreadcrumbsComponent, MatTableModule,
        MatPaginatorModule, MatSortModule, MatButtonModule, MatIconModule,
        MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatDialogModule,
        MatButtonToggleModule
    ],
  templateUrl: './seance-list.component.html',
  styleUrl: './seance-list.component.scss'
})
export class SeanceListComponent implements OnInit{

    layoutCtrl = new UntypedFormControl('boxed');
    searchCtrl = new UntypedFormControl();
    dataSource = new MatTableDataSource<Seance>();
    displayedColumns: string[] = ['date', 'matiere','heureDebut','heureFin', "statut"];
  
    @ViewChild(MatPaginator, { static: true }) paginator?: MatPaginator;
    @ViewChild(MatSort, { static: true }) sort?: MatSort;

      constructor(private seanceService: SeanceService, private dialog: MatDialog) {}

  ngOnInit(): void {
 

  this.chargerSeances();
}
  chargerSeances() {
    this.seanceService.getSeances().subscribe(res => {
      this.dataSource.data = res;
      this.dataSource.paginator = this.paginator!;
      this.dataSource.sort = this.sort!;
    });
  }

}
