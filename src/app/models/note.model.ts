import { Affectation } from "./Affectation";
import { AnneeScolaire } from "./AnneeScolaire";
import { Etudiant } from "./Etudiant";
import { Matiere } from "./Matiere";
import { TypeNote } from "./TypeNote";
import { TypePeriode } from "./TypePeriode";

export interface Note {
  id?: number;
  etudiant: Etudiant;
  affectation: Affectation;
  anneeScolaire: AnneeScolaire;
  matiere: Matiere;
  valeur: number;
  coefficient: number;
  type: TypeNote;
  periode: number;
  typePeriode: TypePeriode;
  dateEvaluation: string;
}

export { TypeNote };
