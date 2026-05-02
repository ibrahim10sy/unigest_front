import { AnneeScolaire } from "./AnneeScolaire";
import { Classe } from "./Classe";
import { Etudiant } from "./Etudiant";
import { LigneBulletin } from "./LigneBulletin";
import { TypePeriode } from "./TypePeriode";

export interface Bulletin {
  id: number;
  etudiant: Etudiant;
  classe: Classe;
  anneeScolaire: AnneeScolaire;
  periode: number;
  typePeriode: TypePeriode;
  moyenneGenerale: number;
  rang: number;
  appreciation: string;
  pdfUrl: string;
  dateGeneration: string;
  lignes: LigneBulletin[];
}