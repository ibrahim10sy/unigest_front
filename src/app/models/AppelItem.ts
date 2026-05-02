import { StatutPresence } from "./Appel";

export interface AppelItem {
  etudiantId: number;
  statut: StatutPresence;
  minutesRetard: number;
  motif?: string;
}