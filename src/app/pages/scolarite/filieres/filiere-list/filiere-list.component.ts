import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {
  FormControl,
  ReactiveFormsModule,
  UntypedFormControl
} from '@angular/forms';
import { VexPageLayoutComponent } from '@vex/components/vex-page-layout/vex-page-layout.component';
import { VexPageLayoutHeaderDirective } from '@vex/components/vex-page-layout/vex-page-layout-header.directive';
import { VexPageLayoutContentDirective } from '@vex/components/vex-page-layout/vex-page-layout-content.directive';
import { VexBreadcrumbsComponent } from '@vex/components/vex-breadcrumbs/vex-breadcrumbs.component';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { stagger40ms } from '@vex/animations/stagger.animation';

import Swal from 'sweetalert2';
import { SelectionModel } from '@angular/cdk/collections';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { Filiere } from 'src/app/models/Filiere';
import { FiliereService } from 'src/app/services/filiere.service';
import { FiliereFormComponent } from '../filiere-form/filiere-form.component';
import { Matiere, MatiereService } from 'src/app/services/matiere.service';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'vex-filiere-list',
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
    MatSlideToggleModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatOptionModule
  ],
  templateUrl: './filiere-list.component.html',
  styleUrl: './filiere-list.component.scss'
})
export class FiliereListComponent implements OnInit {
  layoutCtrl = new UntypedFormControl('boxed');
  searchCtrl = new UntypedFormControl();

  dataSource = new MatTableDataSource<Filiere>();
  selectedMatieres: number[] = []; // IDs des matières sélectionnées
  filiereId!: number;
  matieres: Matiere[] = [];

  matieresControl = new FormControl<number[]>([]);
  filiereSelectionnee: any;

  @ViewChild(MatPaginator, { static: true }) paginator?: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort?: MatSort;

  selection = new SelectionModel<Filiere>(true, []);

  // Ajoute 'checkbox' au début de tes colonnes
  displayedColumns: string[] = [
    'checkbox',
    'nom',
    'niveau',
    'actif',
    'actions'
  ];

  // --- Logique des cases à cocher ---

  /** Vérifie si toutes les lignes sont sélectionnées */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Sélectionne tout ou désélectionne tout */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  chargerMatiere() {
    this.matiereService.getAllMatieres().subscribe((res) => {
      this.matieres = res;
    });
  }
  ouvrirAjoutMatieres(row: any) {
  this.filiereSelectionnee = row;
  this.matieresControl.setValue([]);
}
  ajouterMatieres() {
  if (!this.filiereSelectionnee) return;

  const matiereIds = this.matieresControl.value;

  console.log("IDs envoyés :", matiereIds);

  if (!matiereIds || matiereIds.length === 0) {
    Swal.fire('Attention', 'Veuillez sélectionner au moins une matière', 'warning');
    return;
  }

  const dto = {
    filiereId: this.filiereSelectionnee.id,
    matiereIds: matiereIds
  };

  this.filiereService.ajouterMatieres(dto).subscribe({
    next: () => {
      Swal.fire({
        icon: 'success',
        title: 'Matières ajoutées',
        timer: 1500,
        showConfirmButton: false
      });

      this.matieresControl.setValue([]);
      this.filiereSelectionnee = null;
    },
    error: () => {
      Swal.fire('Erreur', 'Impossible d’ajouter', 'error');
    }
  });
}

  /** Action de suppression groupée (Optionnel) */
  deleteSelectedFilieres() {
    const ids = this.selection.selected.map((f: any) => f.id);
    Swal.fire({
      title: `Supprimer ${ids.length} éléments ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Supprimer tout'
    }).then((result) => {
      if (result.isConfirmed) {
        // Appelle ton service ici pour supprimer la liste d'IDs
        console.log('Suppression de :', ids);
      }
    });
  }

  constructor(
    private filiereService: FiliereService,
    private dialog: MatDialog,
    private matiereService: MatiereService
  ) {}

  ngOnInit(): void {
    this.chargerFilieres();
    this.chargerMatiere();
    // Filtre automatique comme dans AIO
    this.searchCtrl.valueChanges.subscribe((value) => {
      this.onFilterChange(value);
    });
  }

  onFilterChange(value: string) {
    if (!this.dataSource) return;
    value = value.trim().toLowerCase();
    this.dataSource.filter = value;
  }

  chargerFilieres() {
    this.filiereService.getAllFilieres().subscribe({
      next: (data) => {
        this.dataSource.data = data;
        this.dataSource.paginator = this.paginator!;
        this.dataSource.sort = this.sort!;
      }
    });
  }

  // Dans filiere-list.component.ts
  // 1. Pour l'AJOUT
  ajouter() {
    this.openDialog(null);
  }

  // 2. Pour la MODIFICATION (appelée depuis le bouton edit du tableau)
  modifier(filiere: Filiere) {
    this.openDialog(filiere);
  }

  // 3. La méthode commune qui ouvre la modale
  private openDialog(filiere: Filiere | null) {
    this.dialog
      .open(FiliereFormComponent, {
        width: '400px',
        disableClose: true,
        data: filiere // null si ajout, objet si modif
      })
      .afterClosed()
      .subscribe((res: any) => {
        if (res) {
          this.chargerFilieres(); // Rafraîchit la liste si le formulaire a été validé
        }
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  supprimer(filiere: Filiere) {
    Swal.fire({
      title: 'Supprimer ?',
      text: `Voulez-vous vraiment supprimer la filière ${filiere.nom} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: 'Oui, supprimer',
      cancelButtonText: 'Annuler',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed && filiere.id) {
        this.filiereService.supprimerFiliere(filiere.id).subscribe(() => {
          this.chargerFilieres();
          this.handleSuccess('La filière a été retirée');
        });
      }
    });
  }

  onToggleClick(event: Event, filiere: Filiere) {
    // 1. Bloque le comportement par défaut du switch
    event.preventDefault();

    const statusInitial = filiere.actif;

    Swal.fire({
      title: statusInitial ? 'Désactiver ?' : 'Activer ?',
      text: `Voulez-vous vraiment changer le statut de la filière ${filiere.nom} ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Confirmer',
      cancelButtonText: 'Annuler',
      confirmButtonColor: '#3f51b5',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        const nouveauStatut = !statusInitial;

        // 2. Appel au service (on ne change l'UI qu'en cas de succès)
        this.filiereService.updateActif(filiere.id!, nouveauStatut).subscribe({
          next: () => {
            // ✅ Succès : On met à jour l'objet pour que le switch bascule
            filiere.actif = nouveauStatut;

            Swal.fire({
              icon: 'success',
              title: 'Statut mis à jour',
              timer: 1000,
              showConfirmButton: false
            });
          },
          error: (err) => {
            // ❌ Erreur : On ne touche à rien, le switch reste sur statusInitial
            console.error(err);
            Swal.fire(
              'Erreur',
              'Impossible de modifier le statut sur le serveur',
              'error'
            );
          }
        });
      } else {
        // 🔄 Annulation : On ne fait rien.
        // Le binding [checked]="row.actif" garantit que le switch reste/revient
        // à la position correspondant à statusInitial.
      }
    });
  }

  handleSuccess(message: string) {
    Swal.fire({
      icon: 'success',
      title: message,
      timer: 1500,
      showConfirmButton: false
    });
  }
  handleError(message: string) {
    Swal.fire({
      icon: 'error',
      title: message,
      timer: 1500,
      showConfirmButton: false
    });
  }
}
