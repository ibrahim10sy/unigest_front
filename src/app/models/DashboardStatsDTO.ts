import { EvolutionInscriptionDTO } from './EvolutionInscriptionDTO';

export interface DashboardStatsDTO {
  totalFilieres: number;
  totalClasses: number;
  totalEtudiants: number;
  totalInscriptions: number;
  totalAnneesScolaires: number;

  inscriptionsAnneeCourante: number;

  evolutionInscriptions: EvolutionInscriptionDTO[];
}