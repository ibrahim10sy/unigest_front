import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environnement/environment';

export interface Matiere {
  id?: number;
  nom: string;
  coefficient: number;
}

@Injectable({
  providedIn: 'root'
})
export class MatiereService {
  private apiUrl = `${environment.apiUrl}/api/matieres`;

  constructor(private http: HttpClient) {}

  // 1️⃣ Ajouter une matière (Utilise HttpParams pour @RequestParam)
  ajouterMatiere(nom: string, coefficient: number): Observable<Matiere> {
    const params = new HttpParams()
      .set('nom', nom)
      .set('coefficient', coefficient.toString());

    return this.http.post<Matiere>(this.apiUrl, null, { params });
  }

  // 2️⃣ Modifier une matière (Champs optionnels)
  modifierMatiere(id: number, nom?: string, coefficient?: number): Observable<Matiere> {
    let params = new HttpParams();
    if (nom) params = params.set('nom', nom);
    if (coefficient !== undefined && coefficient !== null) {
      params = params.set('coefficient', coefficient.toString());
    }

    return this.http.put<Matiere>(`${this.apiUrl}/${id}`, null, { params });
  }

  // 3️⃣ Supprimer une matière
  supprimerMatiere(id: number): Observable<string> {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }

  // 4️⃣ Récupérer une matière par ID
  getMatiereById(id: number): Observable<Matiere> {
    return this.http.get<Matiere>(`${this.apiUrl}/${id}`);
  }

  // 5️⃣ Lister toutes les matières
  getAllMatieres(): Observable<Matiere[]> {
    return this.http.get<Matiere[]>(this.apiUrl);
  }

  // 6️⃣ Rechercher par nom
  rechercherParNom(nom: string): Observable<Matiere[]> {
    const params = new HttpParams().set('nom', nom);
    return this.http.get<Matiere[]>(`${this.apiUrl}/recherche`, { params });
  }
}