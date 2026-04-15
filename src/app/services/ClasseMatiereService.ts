import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClasseMatiere } from '../models/ClasseMatiere';

@Injectable({
  providedIn: 'root'
})
export class ClasseMatiereService {

  private apiUrl = 'http://localhost:9000/api/classe-matiere';

  constructor(private http: HttpClient) {}

  // ✅ Ajouter matière à une classe
  add(classeId: number, matiereId: number, coefficient: number): Observable<ClasseMatiere> {
    const params = new HttpParams()
      .set('classeId', classeId)
      .set('matiereId', matiereId)
      .set('coefficient', coefficient);

    return this.http.post<ClasseMatiere>(this.apiUrl, null, { params });
  }

  // ✅ Lister matières d'une classe
  getByClasse(classeId: number): Observable<ClasseMatiere[]> {
    return this.http.get<ClasseMatiere[]>(`${this.apiUrl}/classe/${classeId}`);
  }

  // ✅ Supprimer
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}