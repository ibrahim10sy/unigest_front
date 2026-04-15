import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environnement/environment';
import { Affectation } from '../models/Affectation';
import { AffectationRequest } from '../models/AffectationRequest';

@Injectable({
  providedIn: 'root'
})
export class AffectationService {

  private apiUrl = `${environment.apiUrl}/api/affectations`;
    
  constructor(private http: HttpClient) {}

  // 1️⃣ Ajouter une affectation
  ajouterAffectation(request: AffectationRequest): Observable<Affectation> {

  let params = new HttpParams()
    .set('enseignantId', request.enseignantId)
    .set('classeId', request.classeId);

  request.matiereIds.forEach(id => {
    params = params.append('matiereIds', id); // ✅ multi
  });

  return this.http.post<Affectation>(this.apiUrl, null, { params });
}
  // 2️⃣ Modifier une affectation
modifierAffectation(id: number, request: AffectationRequest): Observable<Affectation> {

  let params = new HttpParams();

  if (request.enseignantId)
    params = params.set('enseignantId', request.enseignantId);

  if (request.classeId)
    params = params.set('classeId', request.classeId);

  if (request.matiereIds) {
    request.matiereIds.forEach(mId => {
      params = params.append('matiereIds', mId); // ✅ multi
    });
  }

  return this.http.put<Affectation>(`${this.apiUrl}/${id}`, null, { params });
}
  // 3️⃣ Supprimer une affectation
  supprimerAffectation(id: number): Observable<string> {
    return this.http.delete(`${this.apiUrl}/${id}`, {
      responseType: 'text'
    });
  }

  // 4️⃣ Récupérer une affectation par ID
  getAffectationById(id: number): Observable<Affectation> {
    return this.http.get<Affectation>(`${this.apiUrl}/${id}`);
  }

  // 5️⃣ Affectations d'un enseignant
  getAffectationsParEnseignant(enseignantId: number): Observable<Affectation[]> {
    return this.http.get<Affectation[]>(
      `${this.apiUrl}/enseignant/${enseignantId}`
    );
  }

    getAll(): Observable<Affectation[]> {
      return this.http.get<any[]>(this.apiUrl);
    }

  // 6️⃣ Affectations d'une classe
  getAffectationsParClasse(classeId: number): Observable<Affectation[]> {
    return this.http.get<Affectation[]>(
      `${this.apiUrl}/classe/${classeId}`
    );
  }

  // 7️⃣ Affectations d'une matière
  getAffectationsParMatiere(matiereId: number): Observable<Affectation[]> {
    return this.http.get<Affectation[]>(
      `${this.apiUrl}/matiere/${matiereId}`
    );
  }
}
