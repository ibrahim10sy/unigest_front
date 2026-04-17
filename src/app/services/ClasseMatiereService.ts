import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ClasseMatiere } from '../models/ClasseMatiere';
import { environment } from 'src/environnement/environment';

@Injectable({
  providedIn: 'root'
})
export class ClasseMatiereService {

   private apiUrl = `${environment.apiUrl}/api/classe-matiere`;

  constructor(private http: HttpClient) {}

  // ✅ Ajouter matière à une classe
  add(classeId: number, matiereId: number, coefficient: number): Observable<ClasseMatiere> {
    const params = new HttpParams()
      .set('classeId', classeId)
      .set('matiereId', matiereId)
      .set('coefficient', coefficient);

    return this.http.post<ClasseMatiere>(this.apiUrl, null, { params });
  }

  update(id: number, data: ClasseMatiere): Observable<ClasseMatiere> {
  return this.http.put<ClasseMatiere>(`${this.apiUrl}/${id}`, data);
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