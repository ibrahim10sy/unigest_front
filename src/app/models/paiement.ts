import { AnneeScolaire } from "./AnneeScolaire";
import { Inscription } from "./Inscription";

export enum ModePaiement {
  ESPECES = 'ESPECES',
  ORANGE_MONEY = 'ORANGE_MONEY',
  MOOV_MONEY = 'MOOV_MONEY',
  SAMA_MONEY = 'SAMA_MONEY',
  WAVE = 'WAVE',
  CHEQUE = 'CHEQUE',
  CARTE = 'CARTE',
  VIREMENT = 'VIREMENT'
}

export interface Paiement {
  id?: number;
  inscription: Inscription;
  montant: number;
  datePaiement: string; // ISO string (LocalDate côté backend)
  modePaiement: ModePaiement;
  reference?: string;
}