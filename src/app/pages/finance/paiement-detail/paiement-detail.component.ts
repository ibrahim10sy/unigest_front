import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogActions, MatDialogRef } from "@angular/material/dialog";
import { ModePaiement, Paiement } from 'src/app/models/paiement';
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";

@Component({
  selector: 'vex-paiement-detail',
  standalone: true,
  imports: [MatDialogContent, MatDialogActions, CommonModule, MatProgressBarModule, MatIconModule, MatDividerModule],
  templateUrl: './paiement-detail.component.html',
  styleUrl: './paiement-detail.component.scss'
})
export class PaiementDetailComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<PaiementDetailComponent> // Indispensable pour fermer
  ) { }

  ngOnInit(): void {}

  // Action de fermeture
  close() {
    this.dialogRef.close();
  }

  getPercentage(): number {
    if (!this.data.inscription?.montantTotal) return 0;
    return Math.round((this.data.montant / this.data.inscription.montantTotal) * 100);
  }

  getPaymentIcon(mode: string): string {
    switch (mode) {
      case 'ESPECES': return 'mat:payments';
      case 'MOBILE_MONEY': return 'mat:smartphone';
      case 'CARTE': return 'mat:credit_card';
      case 'VIREMENT': return 'mat:account_balance';
      default: return 'mat:help_outline';
    }
  }

  getStatusClass(statut: string): string {
    switch (statut) {
      case 'INSCRIT': return 'bg-green-100 text-green-700 border border-green-200';
      case 'ABANDONNE': return 'bg-red-100 text-red-700 border border-red-200';
      case 'TERMINE': return 'bg-blue-100 text-blue-700 border border-blue-200';
      default: return 'bg-gray-100 text-gray-700 border border-gray-200';
    }
  }

  imprimerRecu(data: any) {
    console.log('Impression en cours...', data);
    // Logique d'impression (window.print() ou service PDF)
  }
}