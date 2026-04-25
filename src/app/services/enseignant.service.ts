import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environnement/environment';


// Interface pour typer tes données (Léger et robuste)
export interface Enseignant {
  id?: number;
  nom: string;
  prenom: string;
  specialite?: string;
  email?: string;
  adresse?: string;
  telephone?: string;
}

@Injectable({
  providedIn: 'root'
})
export class EnseignantService {
  private apiUrl = `${environment.apiUrl}/api/enseignants`;

  constructor(private http: HttpClient) {}

  // 1️⃣ Créer un enseignant (@RequestBody -> Envoi direct de l'objet)
  creerEnseignant(enseignant: Enseignant): Observable<Enseignant> {
    return this.http.post<Enseignant>(this.apiUrl, enseignant);
  }

  // 2️⃣ Modifier un enseignant (@RequestBody)
  modifierEnseignant(id: number, data: Enseignant): Observable<Enseignant> {
    return this.http.put<Enseignant>(`${this.apiUrl}/${id}`, data);
  }

  // 3️⃣ Supprimer un enseignant
  supprimerEnseignant(id: number): Observable<string> {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }

  // 4️⃣ Trouver un enseignant par ID
  getEnseignantById(id: number): Observable<Enseignant> {
    return this.http.get<Enseignant>(`${this.apiUrl}/${id}`);
  }

  // 5️⃣ Lister tous les enseignants
  getAllEnseignants(): Observable<Enseignant[]> {
    return this.http.get<Enseignant[]>(this.apiUrl);
  }
}
