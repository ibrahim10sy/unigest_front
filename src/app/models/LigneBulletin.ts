export interface LigneBulletin {
  id: number;
  matiere?: { id: number; nom: string };
  moyenneMatiere: number;
  coefficient: number;
  appreciation: string;
}