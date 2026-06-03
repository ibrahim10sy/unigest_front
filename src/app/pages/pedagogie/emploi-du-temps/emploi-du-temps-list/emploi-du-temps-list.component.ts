import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { EmploiDuTempsService } from 'src/app/services/emploi-du-temps.service';

import Swal from 'sweetalert2';
import { EmploiDuTempsFormComponent } from '../emploi-du-temps-form/emploi-du-temps-form.component';
import { MatIconModule } from '@angular/material/icon';
import { VexPageLayoutHeaderDirective } from '@vex/components/vex-page-layout/vex-page-layout-header.directive';
import { VexBreadcrumbsComponent } from '@vex/components/vex-breadcrumbs/vex-breadcrumbs.component';
import { VexPageLayoutComponent } from '@vex/components/vex-page-layout/vex-page-layout.component';
import { VexPageLayoutContentDirective } from '@vex/components/vex-page-layout/vex-page-layout-content.directive';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { EmploiDuTemps } from 'src/app/models/emploi-du-temps.model';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { stagger40ms } from '@vex/animations/stagger.animation';

@Component({
  selector: 'vex-emploi-du-temps-list',
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
       MatButtonToggleModule,
       MatSlideToggleModule,
],
  templateUrl: './emploi-du-temps-list.component.html',
  styleUrl: './emploi-du-temps-list.component.scss'
})
export class EmploiDuTempsListeComponent implements OnInit {
  layoutCtrl = new UntypedFormControl('boxed');
  searchCtrl = new UntypedFormControl();
  displayedColumns: string[] = [
  'jour',
  'horaire',
  'matiere',
  'enseignant',
  'periodicite',
  'statut',
  'actions'
  ];

  dataSource = new MatTableDataSource<EmploiDuTemps>();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  emplois: any[] = [];

  constructor(
    private service: EmploiDuTempsService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.refresh();
    this.searchCtrl.valueChanges.subscribe(
      (v) => (this.dataSource.filter = v.trim().toLowerCase())
    );
  }

  refresh() {
    this.service.getAll().subscribe({
      next: (res: any) => {
        console.log('emplois du temps : ', res);
        this.dataSource.data = res;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: (err: any) => {
        console.error('Erreur lors du chargement des emplois du temps', err);
        Swal.fire(
          'Erreur',
          'Impossible de charger la liste des emplois du temps',
          'error'
        );
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

  ajouter() {
    this.dialog
      .open(EmploiDuTempsFormComponent, {
        width: '800px'
      })
      .afterClosed()
      .subscribe((val) => {
        if (val) {
          this.service.save(val).subscribe(() => {
            Swal.fire('Succès', 'Emploi ajouté', 'success');

            this.refresh();
          });
        }
      });
  }
getJoursLabel(jours: string[]): string {
  return jours
    ?.map(j => j.charAt(0) + j.slice(1).toLowerCase())
    .join(' • ');
}
  modifier(row: any) {
    this.dialog
      .open(EmploiDuTempsFormComponent, {
        width: '800px',
        data: row
      })
      .afterClosed()
      .subscribe((val) => {
        if (val) {
          this.service.save(val).subscribe(() => {
            Swal.fire('Succès', 'Modification effectuée', 'success');

            this.refresh();
          });
        }
      });
  }

  supprimer(id: number) {
    Swal.fire({
      title: 'Supprimer ?',
      showCancelButton: true
    }).then((r) => {
      if (r.isConfirmed) {
        this.service.delete(id).subscribe(() => {
          this.refresh();
        });
      }
    });
  }

  exporterPdf(classeId: number) {
    this.service.exportPdf(classeId).subscribe((blob) => {
      const url = window.URL.createObjectURL(blob);

      window.open(url);
    });
  }
}
