export enum MediaType {
  JUSTIFICATIF_DEPENSE = 'JUSTIFICATIF_DEPENSE',
  CV_ENSEIGNANT = 'CV_ENSEIGNANT',
  DOSSIER_ETUDIANT = 'DOSSIER_ETUDIANT',
  DOSSIER_INSCRIPTION = 'DOSSIER_INSCRIPTION'
}

export interface Medias {
  idMedia?: number;
  fichier?: string;
  fichierUrl?: string;
  dateEnregistrement?: string;

  type: MediaType;
  referenceId: number;
}