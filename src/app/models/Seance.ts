import { Affectation } from "./Affectation";
import { Appel } from "./Appel";


export enum StatutSeance {
  PLANIFIEE = 'PLANIFIEE',
  EN_COURS = 'EN_COURS',
  TERMINEE = 'TERMINEE'
}

export interface Seance {
  id?: number;

  date: string; // LocalDate -> string (YYYY-MM-DD)

  heureDebut?: string; // LocalTime -> string (HH:mm:ss ou HH:mm)
  heureFin?: string;

  statut: StatutSeance;

  dateCreation?: string; // LocalDateTime -> ISO string
  dateModification?: string;
  matiere?: string;

  affectation?: Affectation;

  appels?: Appel[];
}