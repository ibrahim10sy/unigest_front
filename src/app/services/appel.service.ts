import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environnement/environment';
import { Appel, StatutPresence } from '../models/Appel';
import { AppelBatchRequest } from '../models/AppelBatchRequest';


@Injectable({
  providedIn: 'root',
})
export class AppelService {
  private apiUrl = `${environment.apiUrl}/api/appels`;

  constructor(private http: HttpClient) {}

  /**
   * Faire l'appel
   */
  faireAppel(
    seanceId: number,
    etudiantId: number,
    statut: StatutPresence,
    retard: number = 0,
    motif?: string
  ): Observable<Appel> {
    let params = new HttpParams()
      .set('seanceId', seanceId.toString())
      .set('etudiantId', etudiantId.toString())
      .set('statut', statut)
      .set('retard', retard.toString());

    if (motif) {
      params = params.set('motif', motif);
    }

    return this.http.post<Appel>(this.apiUrl, null, { params });
  }

    // =========================================
  // 🚀 BATCH CALL (classe entière)
  // =========================================
  faireAppelBatch(request: AppelBatchRequest): Observable<void> {
    return this.http.post<void>(
      `${this.apiUrl}/batch`,
      request
    );
  }
  
  /**
   * Récupérer tous les appels
   */
  getAll(): Observable<Appel[]> {
    return this.http.get<Appel[]>(this.apiUrl);
  }

  /**
   * Récupérer tous les appels d'une année scolaire
   */
  getByAnnee(anneeId: number): Observable<Appel[]> {
    console.log('appels service ',`${this.apiUrl}/annee/${anneeId}`)
    return this.http.get<Appel[]>(`${this.apiUrl}/annee/${anneeId}`);
  }

  /**
   * Récupérer les appels d'une séance
   */
  getBySeance(seanceId: number): Observable<Appel[]> {
    return this.http.get<Appel[]>(`${this.apiUrl}/seance/${seanceId}`);
  }

  /**
   * Récupérer les appels d'un étudiant
   */
  getByEtudiant(etudiantId: number): Observable<Appel[]> {
    return this.http.get<Appel[]>(`${this.apiUrl}/etudiant/${etudiantId}`);
  }

  /**
   * Récupérer l'appel d'un étudiant dans une séance
   */
  getBySeanceAndEtudiant(
    seanceId: number,
    etudiantId: number
  ): Observable<Appel> {
    return this.http.get<Appel>(
      `${this.apiUrl}/seance/${seanceId}/etudiant/${etudiantId}`
    );
  }

  /**
   * Modifier un appel
   */
  update(
    appelId: number,
    statut: StatutPresence,
    retard: number = 0,
    motif?: string
  ): Observable<Appel> {
    let params = new HttpParams()
      .set('statut', statut)
      .set('retard', retard.toString());

    if (motif) {
      params = params.set('motif', motif);
    }

    return this.http.put<Appel>(
      `${this.apiUrl}/${appelId}`,
      null,
      { params }
    );
  }

  /**
   * Justifier une absence
   */
  justifier(
    appelId: number,
    motif: string
  ): Observable<Appel> {
    const params = new HttpParams().set('motif', motif);

    return this.http.put<Appel>(
      `${this.apiUrl}/${appelId}/justifier`,
      null,
      { params }
    );
  }

  /**
   * Supprimer un appel
   */
  delete(appelId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${appelId}`);
  }

  /**
   * Supprimer l'appel d'un étudiant dans une séance
   */
  deleteBySeanceAndEtudiant(
    seanceId: number,
    etudiantId: number
  ): Observable<void> {
    return this.http.delete<void>(
      `${this.apiUrl}/seance/${seanceId}/etudiant/${etudiantId}`
    );
  }

  /**
   * Supprimer tous les appels d'une séance
   */
  deleteBySeance(seanceId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiUrl}/seance/${seanceId}`
    );
  }
}