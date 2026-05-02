import { Etudiant } from "./Etudiant";
import { Seance } from "./Seance";


export enum StatutPresence {
  PRESENT = 'PRESENT',
  ABSENT = 'ABSENT',
  RETARD = 'RETARD'
}

export interface Appel {
  id?: number;

  seance: Seance;
  etudiant: Etudiant;

  statut: StatutPresence;

  minutesRetard?: number;

  motif?: string;

  justifie?: boolean;

  dateJustification?: string;
}