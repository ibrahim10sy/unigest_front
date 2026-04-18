
export interface Enseignant {
  id?: number;
  nom: string;
  prenom: string;
  email: string;
  adresse: string;
  specialite: string;
  telephone: string;
  password?: string;
  actif: boolean;
}