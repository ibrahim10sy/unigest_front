import { Classe } from "./Classe";
import { Niveau } from "./Niveau";
import { Parent } from "./Parent";
export interface Filiere {
  id: number;
  nom: string;

  actif: boolean;

  fraisInscription: number;
  fraisScolarite: number;

  niveau?: Niveau;

  classes?: Classe[];
}