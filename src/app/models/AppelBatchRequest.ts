import { AppelItem } from "./AppelItem";

export interface AppelBatchRequest {
  seanceId: number;
  appels: AppelItem[];
}