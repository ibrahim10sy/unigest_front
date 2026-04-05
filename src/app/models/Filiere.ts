import { Niveau } from "./Niveau";

export interface Filiere {
  id?: number;
  nom: string;
  niveau:Niveau;
  actif?: boolean;
}