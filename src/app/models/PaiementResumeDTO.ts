export interface PaiementResumeDTO {
  totalBrut: number;      // fraisInscription + fraisScolarite
  reduction: number;      // montant de la réduction
  totalNet: number;       // totalBrut - reduction
  totalPaye: number;      // somme des paiements
  resteAPayer: number;    // totalNet - totalPaye
  statutPaiement: 'COMPLET' | 'PARTIEL' | 'IMPAYE';
}