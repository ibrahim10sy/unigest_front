import { Matiere } from "../services/matiere.service";
import { Classe } from "./Classe";

export interface ClasseMatiere {
  id?: number;
  classe: Classe;
  matiere: Matiere;
  coefficient: number;
}