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
import { ReactiveFormsModule, UntypedFormControl } from '@angular/forms';
import { VexPageLayoutComponent } from '@vex/components/vex-page-layout/vex-page-layout.component';
import { VexPageLayoutHeaderDirective } from '@vex/components/vex-page-layout/vex-page-layout-header.directive';
import { VexPageLayoutContentDirective } from '@vex/components/vex-page-layout/vex-page-layout-content.directive';
import { VexBreadcrumbsComponent } from '@vex/components/vex-breadcrumbs/vex-breadcrumbs.component';
import { fadeInUp400ms } from '@vex/animations/fade-in-up.animation';
import { stagger40ms } from '@vex/animations/stagger.animation';

import Swal from 'sweetalert2';
import { SelectionModel } from '@angular/cdk/collections';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { InscriptionFormComponent } from '../inscription-form/inscription-form.component';
import { Inscription } from 'src/app/models/Inscription';
import { InscriptionService } from 'src/app/services/inscription.service';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MediaService } from 'src/app/services/MediasService.service';
import { MediaType } from 'src/app/models/Medias';
import { InscriptionDetailComponent } from '../inscription-detail/inscription-detail.component';

@Component({
  selector: 'vex-inscription-list',
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
    MatButtonToggleModule
  ],
  templateUrl: './inscription-list.component.html',
  styleUrl: './inscription-list.component.scss'
})
export class InscriptionListComponent implements OnInit {
  displayedColumns: string[] = [
    'date',
    'etudiant',
    'classe',
    'annee',
    'statut',
    'files',
    'actions'
  ];
  dataSource = new MatTableDataSource<Inscription>();
  layoutCtrl = new UntypedFormControl('boxed');
  searchCtrl = new UntypedFormControl();
  filesMap: { [key: number]: any[] } = {};

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(
    private insService: InscriptionService,
    private dialog: MatDialog,
    private mediaService: MediaService
  ) {}

  ngOnInit(): void {
    this.chargerInscriptions();
  }

  // Note: Ton controller n'avait pas de "getAll", on suppose qu'il existe
  // ou on utilise le filtre par classe par défaut.
  chargerInscriptions() {
    this.insService.getAll().subscribe({
      next: (res: any) => {
        this.dataSource.data = res;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        this.chargerFichiers();
      },
      error: () =>
        Swal.fire('Erreur', 'Impossible de charger les inscriptions', 'error')
    });
  }
  chargerFichiers() {
    this.dataSource.data.forEach((inscription) => {
      this.mediaService
        .getByType(MediaType.DOSSIER_INSCRIPTION, inscription.id!)
        .subscribe({
          next: (files) => {
            this.filesMap[inscription.id!] = files;
          },
          error: () => {
            this.filesMap[inscription.id!] = [];
          }
        });
    });
  }

  onFileSelected(event: any, inscription: any) {
    const file = event.target.files[0];
    if (!file) return;

    const media = {
      type: MediaType.DOSSIER_INSCRIPTION,
      referenceId: inscription.id
    };

    this.mediaService.create(media, file).subscribe({
      next: (res) => {
        if (!this.filesMap[inscription.id]) {
          this.filesMap[inscription.id] = [];
        }

        this.filesMap[inscription.id].push(res);

        Swal.fire('Succès', 'Fichier ajouté avec succès', 'success');
      },
      error: () => {
        Swal.fire('Erreur', "Impossible d'ajouter le fichier", 'error');
      }
    });
  }

  voirFichier(media: any) {
    window.open(media.fichierUrl, '_blank');
  }

  hasFiles(id: number): boolean {
    return !!this.filesMap[id]?.length;
  }

  ouvrirDetail(inscription: Inscription) {
  this.dialog.open(InscriptionDetailComponent, {
    width: '800px',
    data: inscription
  });
}
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ajouter() {
    this.ouvrirDialogue();
  }

  modifier(inscription: Inscription) {
    this.ouvrirDialogue(inscription);
  }

  private ouvrirDialogue(inscription?: Inscription) {
    const dialogRef = this.dialog.open(InscriptionFormComponent, {
      data: inscription || null,
      width: '800px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe((val) => {
      if (val) {
        if (val.id) {
          // UPDATE via RequestParams (classeId, anneeId)
          this.insService
            .modifier(
              val.id,
              val.classeId,
              val.anneeId,
              val.montantReduction,
              val.motifReduction
            )
            .subscribe({
              next: () => {
                Swal.fire('Succès', 'Inscription mise à jour', 'success');
                this.chargerInscriptions();
              },
              error: (err: any) =>
                Swal.fire('Erreur', 'Echec de la modification', 'error')
            });
        } else {
          // CREATE via RequestParams (etudiantId, classeId, anneeId, montant)
          this.insService
            .inscrire(
              val.etudiantId,
              val.classeId,
              val.anneeId,
              val.montantReduction,
              val.motifReduction
            )
            .subscribe({
              next: () => {
                Swal.fire('Succès', 'Étudiant inscrit avec succès', 'success');
                this.chargerInscriptions();
              },
              error: (err: any) =>
                Swal.fire('Erreur', "Echec de l'inscription", 'error')
            });
        }
      }
    });
  }

  supprimer(id: number) {
    Swal.fire({
      title: "Annuler l'inscription ?",
      text: "Cela supprimera l'historique de cet étudiant pour cette année.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Oui, supprimer'
    }).then((result) => {
      if (result.isConfirmed) {
        this.insService.supprimer(id).subscribe(() => {
          Swal.fire('Supprimé', "L'inscription a été annulée.", 'success');
          this.chargerInscriptions();
        });
      }
    });
  }
}
