import { Niveau } from "./Niveau";
import { Parent } from "./Parent";
export interface Filiere {
  id?: number;
  nom: string;
  actif: boolean;
  niveau: Niveau;
  
}