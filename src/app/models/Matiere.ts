import { Filiere } from "./Filiere";

export interface Matiere {
  id?: number;
  nom: string;
  coefficient: number;
  filieres: Filiere
}