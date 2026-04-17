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
import { RouterLink } from '@angular/router';
// VEX Imports
import { VexPageLayoutComponent } from '@vex/components/vex-page-layout/vex-page-layout.component';
import { VexPageLayoutHeaderDirective } from '@vex/components/vex-page-layout/vex-page-layout-header.directive';
import { VexPageLayoutContentDirective } from '@vex/components/vex-page-layout/vex-page-layout-content.directive';
import { VexBreadcrumbsComponent } from '@vex/components/vex-breadcrumbs/vex-breadcrumbs.component';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { stagger40ms } from '@vex/animations/stagger.animation';

import Swal from 'sweetalert2';
import { ClasseService } from 'src/app/services/classe.service';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NiveauService } from 'src/app/services/niveau.service';
import { MatSelectModule } from '@angular/material/select';
import { ClasseMatiereService } from 'src/app/services/ClasseMatiereService';
import { Classe } from 'src/app/models/Classe';
import { MatiereService } from 'src/app/services/matiere.service';
import { ClassematiereComponent } from '../form/classematiere.component';
import { Router } from '@angular/router';

@Component({
  selector: 'vex-classe-matiere-list',
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
    MatInputModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatSelectModule,
    RouterLink
  ],
  templateUrl: './classe-matiere-list.component.html',
  styleUrl: './classe-matiere-list.component.scss'
})
export class ClasseMatiereListComponent {
  layoutCtrl = new UntypedFormControl('boxed');
  searchCtrl = new UntypedFormControl();

  displayedColumns: string[] = ['classe', 'matiere', 'coefficient', 'actions'];
  dataSource = new MatTableDataSource<any>();
  selection = new SelectionModel<any>(true, []);
  classe!: Classe;

  @ViewChild(MatPaginator, { static: true }) paginator?: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort?: MatSort;

  constructor(
    private classeService: ClasseService,
    private classem: ClasseMatiereService,
    private mService: MatiereService,
    private dialog: MatDialog,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.classe = history.state?.classe;

    if (!this.classe) {
      console.error('Aucune classe reçue !');
      return;
    }

    this.chargerMatiere(this.classe.id);

    this.searchCtrl.valueChanges.subscribe(
      (value) => (this.dataSource.filter = value.trim().toLowerCase())
    );
  }

  chargerMatiere(id: any) {
    this.classem.getByClasse(id).subscribe((res) => {
      this.dataSource.data = res;
      this.dataSource.paginator = this.paginator!;
      this.dataSource.sort = this.sort!;
    });
  }

  chargerM() {
    this.mService.getAllMatieres().subscribe((res) => {
      console.log(res);
    });
  }

  ajouter() {
  this.openDialog({ classe: this.classe });
}

  
  private openDialog(data: { classe: Classe, classeMatiere?: any }) {
  this.dialog
    .open(ClassematiereComponent, {
      width: '500px',
      disableClose: true,
      data: data
    })
    .afterClosed()
    .subscribe((res) => {
      if (res) this.chargerMatiere(this.classe.id);
    });
}

 modifier(classeMatiere: any) {
  this.openDialog({
    classe: this.classe,
    classeMatiere: classeMatiere
  });
}

  supprimer(classe: any) {
    Swal.fire({
      title: 'Supprimer ?',
      text: `Voulez-vous supprimer ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33'
    }).then((result) => {
      if (result.isConfirmed) {
        this.classem.delete(classe.id).subscribe(() => {
          this.chargerMatiere(this.classe.id);
          this.selection.deselect(classe);
          Swal.fire('Supprimé', '', 'success');
        });
      }
    });
  }
}
