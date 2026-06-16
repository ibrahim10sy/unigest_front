import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';

import { VexPageLayoutComponent } from '@vex/components/vex-page-layout/vex-page-layout.component';
import { VexPageLayoutHeaderDirective } from '@vex/components/vex-page-layout/vex-page-layout-header.directive';
import { VexPageLayoutContentDirective } from '@vex/components/vex-page-layout/vex-page-layout-content.directive';
import { VexBreadcrumbsComponent } from '@vex/components/vex-breadcrumbs/vex-breadcrumbs.component';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { stagger40ms } from '@vex/animations/stagger.animation';

import { AffectationService } from 'src/app/services/affectation.service';
import { AuthService } from 'src/app/services/auth.service';
import { Affectation } from 'src/app/models/Affectation';
import Swal from 'sweetalert2';

@Component({
  selector: 'vex-mes-affectations',
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
    MatTooltipModule
  ],
  templateUrl: './mes-affectations.component.html'
})
export class MesAffectationsComponent implements OnInit {
  searchCtrl = new UntypedFormControl();
  displayedColumns: string[] = ['classe', 'matieres', 'actions'];
  dataSource = new MatTableDataSource<Affectation>();

  enseignantNom = '';

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(
    private affectationService: AffectationService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const userData = this.authService.getUserData();
    this.enseignantNom = `${userData?.prenom ?? ''} ${userData?.nom ?? ''}`.trim();

    const enseignantId = this.authService.getEnseignantId();
    if (enseignantId) {
      this.chargerAffectations(enseignantId);
    } else {
      Swal.fire('Erreur', 'Impossible de récupérer votre identifiant enseignant.', 'error');
    }

    this.searchCtrl.valueChanges.subscribe(
      (v) => (this.dataSource.filter = (v ?? '').trim().toLowerCase())
    );
  }

  chargerAffectations(enseignantId: number): void {
    this.affectationService.getAffectationsParEnseignant(enseignantId).subscribe({
      next: (res) => {
        this.dataSource.data = res;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error: () => {
        Swal.fire('Erreur', 'Impossible de charger vos affectations.', 'error');
      }
    });
  }

  voirDetails(affectation: Affectation): void {
    this.router.navigate(['/pedagogie/affectations/details'], {
      state: { affectation }
    });
  }
}
