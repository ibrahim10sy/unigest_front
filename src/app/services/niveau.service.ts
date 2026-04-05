import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environnement/environment';
import { Niveau } from '../models/Niveau';

@Injectable({
  providedIn: 'root'
})

export class NiveauService {
  private apiUrl = `${environment.apiUrl}/api/niveaux`;

  constructor(private http: HttpClient) { }

  /** 1. Lister tous les niveaux */
  getAllNiveaux(): Observable<Niveau[]> {
    return this.http.get<Niveau[]>(this.apiUrl);
  }

  /** 2. Créer un niveau (@RequestBody côté Spring) */
  creerNiveau(niveau: Niveau): Observable<Niveau> {
    return this.http.post<Niveau>(this.apiUrl, niveau);
  }

  /** 3. Modifier un niveau (@RequestBody côté Spring) */
  modifierNiveau(id: number, niveau: Niveau): Observable<Niveau> {
    return this.http.put<Niveau>(`${this.apiUrl}/${id}`, niveau);
  }

  /** 4. Supprimer un niveau */
  supprimerNiveau(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  /** 5. Récupérer un niveau par son ID */
  getNiveauById(id: number): Observable<Niveau> {
    return this.http.get<Niveau>(`${this.apiUrl}/${id}`);
  }
  
}