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
import { Etudiant } from 'src/app/models/Etudiant';
import { Paiement } from 'src/app/models/paiement';
import { Medias, MediaType } from 'src/app/models/Medias';
import { PaiementService } from 'src/app/services/paiement.service';
import { InscriptionService } from 'src/app/services/inscription.service';
import { NoteService } from 'src/app/services/note.service';
import { AppelService } from 'src/app/services/appel.service';
import { MediaService } from 'src/app/services/MediasService.service';
import { Appel } from 'src/app/models/Appel';
import { Note } from 'src/app/models/note.model';
import { Inscription } from 'src/app/models/Inscription';

@Component({
  selector: 'vex-detail-etudiant',
  standalone: true,
    animations: [fadeInUp400ms, stagger40ms],
      imports: [
        CommonModule, VexPageLayoutComponent, VexPageLayoutHeaderDirective,
        VexPageLayoutContentDirective, VexBreadcrumbsComponent, MatTableModule,
        MatPaginatorModule, MatSortModule, MatButtonModule, MatIconModule,
        MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatDialogModule,
        MatButtonToggleModule
    ],
  templateUrl: './detail-etudiant.component.html',
  styleUrl: './detail-etudiant.component.scss'
})
export class DetailEtudiantComponent implements OnInit {

  etudiant!: Etudiant;

  inscriptions: Inscription[] = [];
  paiements: Paiement[] = [];
  notes: Note[] = [];
  appels: Appel[] = [];
  documents: Medias[] = [];

  layoutCtrl = new UntypedFormControl('boxed');

  dataSourcePaiements = new MatTableDataSource<Paiement>();
  dataSourceNotes = new MatTableDataSource<Note>();
  dataSourceAppels = new MatTableDataSource<Appel>();

  displayedPaiements: string[] = ['date', 'montant', 'mode', 'reference'];
  displayedNotes: string[] = ['matiere', 'type', 'valeur', 'semestre'];
  displayedAppels: string[] = ['date', 'statut', 'retard', 'motif'];

  @ViewChild('paginatorPaiements') paginatorPaiements!: MatPaginator;
  @ViewChild('paginatorNotes') paginatorNotes!: MatPaginator;
  @ViewChild('paginatorAppels') paginatorAppels!: MatPaginator;

  constructor(
    private paiementService: PaiementService,
    private inscriptionService: InscriptionService,
    private noteService: NoteService,
    private appelService: AppelService,
    private mediaService: MediaService
  ) {}

  ngOnInit(): void {
    this.etudiant = history.state?.etudiant;

    if (!this.etudiant) return;

    this.loadAll();
  }

  ngAfterViewInit() {
    this.dataSourcePaiements.paginator = this.paginatorPaiements;
    this.dataSourceNotes.paginator = this.paginatorNotes;
    this.dataSourceAppels.paginator = this.paginatorAppels;
  }

  loadAll() {
    this.loadPaiements();
    this.loadNotes();
    this.loadAppels();
    this.loadDocuments();
    this.loadInscriptions();
  }

  loadPaiements() {
    this.paiementService.getPaiementsParEtudiant(this.etudiant.id!)
      .subscribe(res => {
        this.dataSourcePaiements.data = res;
      });
  }
  
  loadInscriptions() {
    this.inscriptionService.getInscriptionsParEtudiant(this.etudiant.id!)
      .subscribe(res => {
        this.inscriptions = res;
      });
  }

  loadNotes() {
    this.noteService.getNotesEtudiant(this.etudiant.id!)
      .subscribe((res:any) => {
        this.dataSourceNotes.data = res;
      });
  }

  exporterDossier() {
    // Déclenche la fenêtre d'impression du navigateur
    window.print();
  }
  loadAppels() {
    this.appelService.getByEtudiant(this.etudiant.id!)
      .subscribe(res => {
        this.dataSourceAppels.data = res;
      });
  }

  loadDocuments() {
    this.mediaService.getByType(MediaType.DOSSIER_ETUDIANT, this.etudiant.id!)
      .subscribe(res => this.documents = res);
  }

  uploadDocument(event: any) {
    const file = event.target.files[0];
    if (!file) return;

    const media = {
      type: MediaType.DOSSIER_ETUDIANT,
      referenceId: this.etudiant.id!
    };

    this.mediaService.create(media, file)
      .subscribe(res => this.documents.push(res));
  }

  voirDocument(doc: Medias) {
    window.open(doc.fichierUrl, '_blank');
  }

  supprimerDocument(doc: Medias) {
    this.mediaService.delete(doc.idMedia!).subscribe(() => {
      this.documents = this.documents.filter(d => d.idMedia !== doc.idMedia);
    });
  }

  getMontantTotalPaye(): number {
    return this.dataSourcePaiements.data
      .reduce((sum, p) => sum + p.montant, 0);
  }
}