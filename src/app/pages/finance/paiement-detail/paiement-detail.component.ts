import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogActions, MatDialogRef } from "@angular/material/dialog";
import { ModePaiement, Paiement } from 'src/app/models/paiement';
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { PaiementService } from 'src/app/services/paiement.service';
import { PaiementResumeDTO } from 'src/app/models/PaiementResumeDTO';

@Component({
  selector: 'vex-paiement-detail',
  standalone: true,
  imports: [
    CommonModule,
    MatDialogContent,
    MatDialogActions,
    MatProgressBarModule,
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './paiement-detail.component.html',
  styleUrl: './paiement-detail.component.scss'
})
export class PaiementDetailComponent implements OnInit {

  resume!: PaiementResumeDTO;
  loading = true;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Paiement,
    private paiementService: PaiementService,
    private dialogRef: MatDialogRef<PaiementDetailComponent>
  ) {}

  ngOnInit(): void {
    const inscriptionId = this.data?.inscription?.id;

    if (!inscriptionId) {
      console.error('Inscription ID introuvable');
      this.loading = false;
      return;
    }

    this.paiementService.getResume(inscriptionId).subscribe({
      next: (res) => {
        this.resume = res;
        this.loading = false;
      },
      error: (err) => {
        console.error('Erreur chargement résumé paiement', err);
        this.loading = false;
      }
    });
  }

  close() {
    this.dialogRef.close();
  }

  imprimerRecu() {
    window.print();
  }

  // ================= UI HELPERS =================

  getStatusClass(statut: string): string {
    switch (statut) {
      case 'COMPLET':
        return 'bg-green-100 text-green-700 border border-green-200';
      case 'PARTIEL':
        return 'bg-yellow-100 text-yellow-700 border border-yellow-200';
      case 'IMPAYE':
        return 'bg-red-100 text-red-700 border border-red-200';
      default:
        return 'bg-gray-100 text-gray-700 border border-gray-200';
    }
  }
}