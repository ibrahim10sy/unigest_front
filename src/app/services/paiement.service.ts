import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environnement/environment';
import { ModePaiement, Paiement } from '../models/paiement';


@Injectable({
  providedIn: 'root'
})
export class PaiementService {

  private apiUrl = `${environment.apiUrl}/api/paiements`;
  
    constructor(private http: HttpClient) {}

    // ✅ Effectuer un paiement
  effectuerPaiement(inscriptionId: number, montant: number, mode: ModePaiement): Observable<Paiement> {
    const params = new HttpParams()
      .set('inscriptionId', inscriptionId)
      .set('montant', montant)
      .set('mode', mode);

    return this.http.post<Paiement>(this.apiUrl, null, { params });
  }

  // ✅ Modifier un paiement
  modifierPaiement(id: number,inscriptionId: number, montant: number, mode: ModePaiement): Observable<Paiement> {
    const params = new HttpParams()
      .set('inscriptionId', inscriptionId)
      .set('montant', montant)
      .set('mode', mode);

    return this.http.put<Paiement>(`${this.apiUrl}/${id}`, null, { params });
  }

  // ✅ Supprimer un paiement
  supprimerPaiement(id: number): Observable<string> {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }

  // ✅ Total payé pour une inscription
  calculerTotalPaye(inscriptionId: number): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/total/${inscriptionId}`);
  }

  // ✅ Paiements par étudiant
  getPaiementsParEtudiant(etudiantId: number): Observable<Paiement[]> {
    return this.http.get<Paiement[]>(`${this.apiUrl}/etudiant/${etudiantId}`);
  }

  // ✅ Historique par classe + année
  getHistoriquePaiements(classeId: number, anneeId: number): Observable<Paiement[]> {
    return this.http.get<Paiement[]>(`${this.apiUrl}/classe/${classeId}/annee/${anneeId}`);
  }

  // ✅ Paiement par ID
  getPaiementById(id: number): Observable<Paiement> {
    return this.http.get<Paiement>(`${this.apiUrl}/${id}`);
  }

  // ✅ Historique étudiant + classe + année
  getHistoriquePaiementsEtudiant(etudiantId: number, classeId: number, anneeId: number): Observable<Paiement[]> {
    return this.http.get<Paiement[]>(
      `${this.apiUrl}/etudiant/${etudiantId}/classe/${classeId}/annee/${anneeId}`
    );
  }
}
