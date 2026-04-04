import { Filiere } from "./Filiere";

export interface Classe {
  id?: number;
  nom: string;
  niveau?: string;
  filiere:Filiere;

}