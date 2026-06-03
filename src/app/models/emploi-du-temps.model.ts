import { Enseignant } from "../services/enseignant.service";
import { Matiere } from "../services/matiere.service";
import { Classe } from "./Classe";

export enum JourSemaine {
  LUNDI = 'LUNDI',
  MARDI = 'MARDI',
  MERCREDI = 'MERCREDI',
  JEUDI = 'JEUDI',
  VENDREDI = 'VENDREDI',
  SAMEDI = 'SAMEDI',
  DIMANCHE = 'DIMANCHE'
}
export interface EmploiDuTemps {
  id?: number;

  classe?: Classe;
  enseignant?: Enseignant;
  matiere?: Matiere;

  jours: JourSemaine[];

  heureDebut?: string;
  heureFin?: string;

  dateDebut?: string;
  dateFin?: string;

  couleur?: string;

  type?: any;

  actif?: boolean;

  periodicite?: any;

  description?: string;
}