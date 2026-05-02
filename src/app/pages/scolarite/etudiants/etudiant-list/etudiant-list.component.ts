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
import { EtudiantFormComponent } from '../etudiant-form/etudiant-form.component';
import { Etudiant } from 'src/app/models/Etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';

@Component({
  selector: 'vex-etudiant-list',
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
  templateUrl: './etudiant-list.component.html',
  styleUrl: './etudiant-list.component.scss'
})
export class EtudiantListComponent implements OnInit {
  // Configuration des colonnes de la table
  layoutCtrl = new UntypedFormControl('boxed');
  searchCtrl = new UntypedFormControl();
  dataSource = new MatTableDataSource<Etudiant>();
  displayedColumns: string[] = [
    'matricule',
    'nom',
    'prenom',
    'email',
    'telephone',
    'parent',
    'actions'
  ];
 
  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(
    private etudiantService: EtudiantService,
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
    this.etudiantService.listerEtudiants().subscribe((res) => {
      this.dataSource.data = res;
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log('data', this.dataSource.data);
    });
  }

  details(etudiant: Etudiant) {
    this.router.navigate(['/scolarite/etudiants/details'], {
      state: { etudiant }
    });

    console.log('details etu :', etudiant);
  }

  ajouter() {
    this.openDialog();
  }
  modifier(etudiant: Etudiant) {
    this.openDialog(etudiant);
  }

  private openDialog(etudiant?: Etudiant) {
    this.dialog
      .open(EtudiantFormComponent, { data: etudiant, width: '700px' })
      .afterClosed()
      .subscribe((val) => {
        if (val) {
          this.etudiantService.save(val).subscribe(() => {
            Swal.fire('Succès', 'Opération réussie', 'success');
            this.refresh();
          });
        }
      });
  }

  appliquerFiltre(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  supprimer(id: number) {
    Swal.fire({
      title: 'Supprimer cet étudiant ?',
      icon: 'warning',
      showCancelButton: true
    }).then((r) => {
      if (r.isConfirmed) {
        this.etudiantService
          .supprimerEtudiant(id)
          .subscribe(() => this.refresh());
      }
    });
  }
}
