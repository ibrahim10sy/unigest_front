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
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
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
    MatSlideToggleModule
  ],
  templateUrl: './emploi-du-temps-list.component.html',
  styleUrl: './emploi-du-temps-list.component.scss'
})
export class EmploiDuTempsListeComponent implements OnInit {
  layoutCtrl  = new UntypedFormControl('boxed');
  searchCtrl  = new UntypedFormControl();

  displayedColumns: string[] = [
    'jour', 'horaire', 'matiere', 'enseignant', 'periode', 'statut', 'actions'
  ];

  dataSource = new MatTableDataSource<EmploiDuTemps>();

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort,      { static: true }) sort!: MatSort;

  constructor(
    private service: EmploiDuTempsService,
    private dialog:  MatDialog
  ) {}

  ngOnInit(): void {
    this.refresh();
    this.searchCtrl.valueChanges.subscribe(
      (v) => (this.dataSource.filter = v?.trim().toLowerCase() ?? '')
    );
  }

  refresh(): void {
    this.service.getAll().subscribe({
      next: (res: any) => {
        this.dataSource.data      = res;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort      = this.sort;
      },
      error: () => {
        Swal.fire('Erreur', 'Impossible de charger les emplois du temps', 'error');
      }
    });
  }

  appliquerFiltre(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  getJoursLabel(jours: string[]): string {
    return jours?.map(j => j.charAt(0) + j.slice(1).toLowerCase()).join(' • ') ?? '';
  }

  // Le formulaire fait lui-même le save() et ferme avec le résultat
  // → on rafraîchit simplement si une valeur est retournée
  ajouter(): void {
    this.dialog
      .open(EmploiDuTempsFormComponent, { width: '800px' })
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          Swal.fire({ icon: 'success', title: 'Succès', text: 'Emploi ajouté', timer: 1500, showConfirmButton: false });
          this.refresh();
        }
      });
  }

  modifier(row: any): void {
    this.dialog
      .open(EmploiDuTempsFormComponent, { width: '800px', data: row })
      .afterClosed()
      .subscribe((res) => {
        if (res) {
          Swal.fire({ icon: 'success', title: 'Succès', text: 'Modification effectuée', timer: 1500, showConfirmButton: false });
          this.refresh();
        }
      });
  }

  // ✅ Correction : on passe row.id et non row entier
  supprimer(row: any): void {
    Swal.fire({
      title: 'Supprimer cet emploi ?',
      text: 'Cette action est irréversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Annuler'
    }).then((r) => {
      if (r.isConfirmed) {
        this.service.delete(row.id).subscribe({
          next: () => {
            Swal.fire({ icon: 'success', title: 'Supprimé', timer: 1500, showConfirmButton: false });
            this.refresh();
          },
          error: () => Swal.fire('Erreur', 'Suppression impossible', 'error')
        });
      }
    });
  }

  exporterPdf(classeId: number): void {
    this.service.exportPdf(classeId).subscribe((blob) => {
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }
}