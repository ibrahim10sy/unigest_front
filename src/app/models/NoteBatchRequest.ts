import { TypeNote } from "./TypeNote";
import { TypePeriode } from "./TypePeriode";

export interface NoteBatchRequest {
  etudiantId: number;
  affectationId: number;
  matiereId: number;
  valeur: number;
  type: TypeNote;
  periode: number;
  typePeriode: TypePeriode;
}