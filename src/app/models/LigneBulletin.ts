export interface LigneBulletin {
  id: number;
  matiere?: { id: number; nom: string };
  noteClasse: number;
  noteComposition: number;
  quotaClasse: number;
  quotaComposition: number;
  moyenneMatiere: number;
  coefficient: number;
  appreciation: string;
}