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

import { NiveauService } from 'src/app/services/niveau.service';
import { NiveauFormComponent } from '../niveau-form/niveau-form.component';
import { Niveau } from 'src/app/models/Niveau';

@Component({ 
  selector: 'vex-niveau-list',
  standalone: true,
  animations: [fadeInUp400ms, stagger40ms],
  imports: [
    CommonModule, VexPageLayoutComponent, VexPageLayoutHeaderDirective,
    VexPageLayoutContentDirective, VexBreadcrumbsComponent, MatTableModule,
    MatPaginatorModule, MatSortModule, MatButtonModule, MatIconModule,
    MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatDialogModule,
    MatButtonToggleModule
],
  templateUrl: './niveau-list.component.html' 
})
export class NiveauListComponent implements OnInit {
  layoutCtrl = new UntypedFormControl('boxed');
  searchCtrl = new UntypedFormControl();
  dataSource = new MatTableDataSource<Niveau>();
  displayedColumns: string[] = ['id', 'nom', 'actions'];

  @ViewChild(MatPaginator, { static: true }) paginator?: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort?: MatSort;

  constructor(private niveauService: NiveauService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.chargerNiveaux();
    this.searchCtrl.valueChanges.subscribe(v => this.dataSource.filter = v.trim().toLowerCase());
  }

  chargerNiveaux() {
    this.niveauService.getAllNiveaux().subscribe(res => {
      this.dataSource.data = res;
      this.dataSource.paginator = this.paginator!;
      this.dataSource.sort = this.sort!;
    });
  }

  ajouter() { this.openDialog(null); }
  modifier(niveau: Niveau) { this.openDialog(niveau); }

  private openDialog(niveau: Niveau | null) {
    this.dialog.open(NiveauFormComponent, {
      width: '400px',
      data: niveau
    }).afterClosed().subscribe(res => { if (res) this.chargerNiveaux(); });
  }

  supprimer(niveau: Niveau) {
    Swal.fire({ title: 'Supprimer ?', icon: 'warning', showCancelButton: true }).then(r => {
      if (r.isConfirmed) this.niveauService.supprimerNiveau(niveau.id!).subscribe(() => this.chargerNiveaux());
    });
  }
}