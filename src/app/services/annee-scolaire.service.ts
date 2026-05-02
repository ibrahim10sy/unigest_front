import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environnement/environment';
import { AnneeScolaire } from '../models/AnneeScolaire';

@Injectable({ providedIn: 'root' })
export class AnneeScolaireService {
  private apiUrl = `${environment.apiUrl}/api/annee-scolaire`;

  constructor(private http: HttpClient) {}

  getAll(): Observable<AnneeScolaire[]> {
    return this.http.get<AnneeScolaire[]>(this.apiUrl);
  }

  save(annee: AnneeScolaire): Observable<AnneeScolaire> {
    if (annee.id) {
      // Si l'objet a un ID, Angular appelle le PUT (Update)
      return this.http.put<AnneeScolaire>(`${this.apiUrl}/${annee.id}`, annee);
    } else {
      // Si l'ID est absent/null, Angular appelle le POST (Create)
      return this.http.post<AnneeScolaire>(this.apiUrl, annee);
    }
  }
  getAnneeActive(): Observable<AnneeScolaire> {
    console.log(`${this.apiUrl}/active`)
    return this.http.get<AnneeScolaire>(`${this.apiUrl}/active`);
  }
 
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  activer(id: number): Observable<AnneeScolaire> {
    return this.http.patch<AnneeScolaire>(`${this.apiUrl}/${id}/activer`, {});
  }
}
