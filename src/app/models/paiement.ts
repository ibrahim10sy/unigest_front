import { AnneeScolaire } from "./AnneeScolaire";
import { Inscription } from "./Inscription";

export enum ModePaiement {
  ESPECES = 'ESPECES',
  MOBILE_MONEY = 'MOBILE_MONEY',
  CARTE = 'CARTE',
  VIREMENT = 'VIREMENT'
}

export interface Paiement {
  id?: number;
  inscription: Inscription;
  anneeScolaire : AnneeScolaire,
  montant: number;
  datePaiement: string; // ISO string (LocalDate côté backend)
  modePaiement: ModePaiement;
  reference?: string;
}