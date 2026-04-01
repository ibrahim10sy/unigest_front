import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environnement/environment';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {
private apiUrl = `${environment.apiUrl}/api/inscriptions`;

  constructor(private http: HttpClient) {}

  // 1️⃣ Inscrire un étudiant (Utilisation de HttpParams pour les @RequestParam)
  inscrire(etudiantId: number, classeId: number, anneeId: number, montant: number): Observable<any> {
    const params = new HttpParams()
      .set('etudiantId', etudiantId.toString())
      .set('classeId', classeId.toString())
      .set('anneeId', anneeId.toString())
      .set('montant', montant.toString());

    return this.http.post(this.apiUrl, null, { params });
  }

  // 2️⃣ Récupérer une inscription par ID
  getInscription(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // 3️⃣ Modifier une inscription
  modifier(id: number, classeId: number, anneeId: number): Observable<any> {
    const params = new HttpParams()
      .set('classeId', classeId.toString())
      .set('anneeId', anneeId.toString());

    return this.http.put(`${this.apiUrl}/${id}`, null, { params });
  }

  // 4️⃣ Supprimer une inscription
  supprimer(id: number): Observable<string> {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }

  // 5️⃣ Liste des étudiants par classe
  getEtudiantsParClasse(classeId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/classe/${classeId}`);
  }

  // 6️⃣ Liste filtrée par classe ET année
  getEtudiantsParClasseEtAnnee(classeId: number, anneeId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/classe/${classeId}/annee/${anneeId}`);
  }
}
