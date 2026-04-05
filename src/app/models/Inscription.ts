import { Etudiant } from './Etudiant';
import { Classe } from './Classe';
import { AnneeScolaire } from './AnneeScolaire';

export interface Inscription {
  id?: number;
  // Relations d'objets (pour l'affichage dans la liste)
  etudiant?: Etudiant;
  classe?: Classe;
  anneeScolaire?: AnneeScolaire;
  // Champs simples
  dateInscription?: string | Date;
  montantTotal: number;
  statut: 'INSCRIT' | 'ABANDONNE' | 'TERMINE';
  // Pour la gestion interne du formulaire (ID techniques)
  etudiantId?: number;
  classeId?: number;
  anneeId?: number;
}