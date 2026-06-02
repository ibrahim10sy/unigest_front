import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmploiDuTempsService } from 'src/app/services/emploi-du-temps.service';

import Swal from 'sweetalert2';
import { EmploiDuTempsFormComponent } from '../emploi-du-temps-form/emploi-du-temps-form.component';
import { MatIconModule } from "@angular/material/icon";
import { VexPageLayoutHeaderDirective } from "@vex/components/vex-page-layout/vex-page-layout-header.directive";
import { VexBreadcrumbsComponent } from "@vex/components/vex-breadcrumbs/vex-breadcrumbs.component";
import { VexPageLayoutComponent } from "@vex/components/vex-page-layout/vex-page-layout.component";
import { VexPageLayoutContentDirective } from "@vex/components/vex-page-layout/vex-page-layout-content.directive";
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'vex-emploi-du-temps-list',
  standalone: true,
  imports: [ CommonModule, MatIconModule, MatTableModule,VexPageLayoutHeaderDirective, VexBreadcrumbsComponent, VexPageLayoutComponent, VexPageLayoutContentDirective],
  templateUrl: './emploi-du-temps-list.component.html',
  styleUrl: './emploi-du-temps-list.component.scss'
})
export class EmploiDuTempsListeComponent implements OnInit {

  emplois: any[] = [];

  constructor(
    private service: EmploiDuTempsService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh() {
    this.service.getAll()
      .subscribe(res => {
        this.emplois = res;
      });
  }

  ajouter() {
    this.dialog.open(
      EmploiDuTempsFormComponent,
      {
        width: '800px'
      }
    ).afterClosed().subscribe(val => {

      if (val) {

        this.service.save(val)
          .subscribe(() => {

            Swal.fire(
              'Succès',
              'Emploi ajouté',
              'success'
            );

            this.refresh();
          });
      }
    });
  }

  modifier(row: any) {

    this.dialog.open(
      EmploiDuTempsFormComponent,
      {
        width: '800px',
        data: row
      }
    ).afterClosed().subscribe(val => {

      if (val) {

        this.service.save(val)
          .subscribe(() => {

            Swal.fire(
              'Succès',
              'Modification effectuée',
              'success'
            );

            this.refresh();
          });
      }
    });
  }

  supprimer(id: number) {

    Swal.fire({
      title: 'Supprimer ?',
      showCancelButton: true
    }).then(r => {

      if (r.isConfirmed) {

        this.service.delete(id)
          .subscribe(() => {

            this.refresh();
          });
      }
    });
  }

  exporterPdf(classeId: number) {

    this.service.exportPdf(classeId)
      .subscribe(blob => {

        const url = window.URL.createObjectURL(blob);

        window.open(url);
      });
  }
}