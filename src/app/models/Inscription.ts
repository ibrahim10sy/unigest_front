import { Etudiant } from './Etudiant';
import { Classe } from './Classe';
import { AnneeScolaire } from './AnneeScolaire';

export interface Inscription {
  id?: number;
  etudiant?: Etudiant;
  classe?: Classe;
  anneeScolaire?: AnneeScolaire;
  dateInscription?: string | Date;
  montantReduction: number;
  motifReduction: string;
  statut: 'INSCRIT' | 'ABANDONNE' | 'TERMINE';
  etudiantId?: number;
  classeId?: number;
  anneeId?: number;
}