
export interface EmploiDuTemps {

  id?: number;

  classe: any;

  enseignant: any;

  matiere: any;

  jour: string;

  heureDebut: string;

  heureFin: string;

  dateDebut: Date;

  dateFin: Date;

  periodicite: string;

  couleur?: string;

  description?: string;

  actif?: boolean;
}