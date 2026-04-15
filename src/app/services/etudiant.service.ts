import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environnement/environment';
import { Etudiant } from '../models/Etudiant';



@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private apiUrl = `${environment.apiUrl}/api/etudiants`;

  constructor(private http: HttpClient) {}

  // 1️⃣ Créer un étudiant (@RequestBody)
  creerEtudiant(etudiant: Etudiant): Observable<Etudiant> {
    return this.http.post<Etudiant>(this.apiUrl, etudiant);
  }
 
  // 2️⃣ Modifier un étudiant (@RequestBody)
  modifierEtudiant(id: number, data: Etudiant): Observable<Etudiant> {
    return this.http.put<Etudiant>(`${this.apiUrl}/${id}`, data);
  }

  // 3️⃣ Supprimer un étudiant
  supprimerEtudiant(id: number): Observable<string> {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }

  // 4️⃣ Récupérer un étudiant par ID
  getEtudiant(id: number): Observable<Etudiant> {
    return this.http.get<Etudiant>(`${this.apiUrl}/${id}`);
  }

  // 5️⃣ Lister tous les étudiants
  listerEtudiants(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(this.apiUrl);
  }

  // 6️⃣ Récupérer les étudiants d'une classe
  getEtudiantsParClasse(classeId: number): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(`${this.apiUrl}/classe/${classeId}`);
  }

  // 7️⃣ Récupérer un étudiant par matricule
  getEtudiantParMatricule(matricule: string): Observable<Etudiant> {
    return this.http.get<Etudiant>(`${this.apiUrl}/matricule/${matricule}`);
  }

  // create et update en meme temps
  save(etudiant: Etudiant): Observable<Etudiant> {
    if (etudiant.id) return this.http.put<Etudiant>(`${this.apiUrl}/${etudiant.id}`, etudiant);
    return this.http.post<Etudiant>(this.apiUrl, etudiant);
  }
}