export interface SeanceDTO {
  id: number;
  matiere: string;
  professeur: string;
  classe: string;
  filiere: string;
  heureDebut: string;
  heureFin: string;
  statut: 'PLANIFIEE' | 'EN_COURS' | 'TERMINEE';
}