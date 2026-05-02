import { Affectation } from "./Affectation";
import { AnneeScolaire } from "./AnneeScolaire";
import { Etudiant } from "./Etudiant";
import { TypeNote } from "./TypeNote";
import { TypePeriode } from "./TypePeriode";

export interface Note {
  id: number;
  etudiant: Etudiant;
  affectation: Affectation;
  anneeScolaire: AnneeScolaire;
  valeur: number;
  type: TypeNote;
  periode: number;
  typePeriode: TypePeriode;
  dateEvaluation: string;
}

export { TypeNote };
