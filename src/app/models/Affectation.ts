import { Classe } from "./Classe";
import { Enseignant } from "./Enseignant";
import { Matiere } from "./Matiere";

export interface Affectation {
  id?: number;

  enseignant: Enseignant;
  matieres: Matiere[];
  classe: Classe;

  // Optionnel (car @JsonIgnore côté backend)
  seances?: any[];
  notes?: any[];
}