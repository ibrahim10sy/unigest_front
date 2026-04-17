import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogActions } from "@angular/material/dialog";
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

  constructor(@Inject(MAT_DIALOG_DATA) public data: Paiement) { }

  ngOnInit(): void {}

  getPaymentIcon(mode: ModePaiement): string {
    switch (mode) {
      case ModePaiement.CARTE: return 'mat:credit_card';
      case ModePaiement.MOBILE_MONEY: return 'mat:smartphone';
      case ModePaiement.VIREMENT: return 'mat:account_balance';
      case ModePaiement.ESPECES: return 'mat:payments';
      default: return 'mat:help_outline';
    }
  }

  imprimerRecu(paiement: Paiement) {
    // Logique d'impression ici
    console.log('Impression du reçu pour:', paiement.reference);
  }
}
