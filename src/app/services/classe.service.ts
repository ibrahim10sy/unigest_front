import { Injectable } from '@angular/core';

import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environnement/environment';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {
  private apiUrl = `${environment.apiUrl}/api/classes`;

  constructor(private http: HttpClient) {}

  // 1️⃣ Créer une classe (Utilise HttpParams car le backend attend des @RequestParam)
  // 1️⃣ Créer une classe
  creerClasse(nom: string, filiereId: number): Observable<any> {
    // Sécurité : si les IDs sont absents, on ne tente pas le toString()
    if (!filiereId) {
      console.error('Tentative de création avec des IDs manquants', {
        filiereId
      });
    }

    const params = new HttpParams()
      .set('nom', nom)
      .set('filiereId', (filiereId ?? '').toString());

    return this.http.post(this.apiUrl, null, { params });
  }

  // 2️⃣ Modifier une classe
  modifierClasse(
    id: number,
    nom?: string,
    filiereId?: number
  ): Observable<any> {
    let params = new HttpParams();
    if (nom) params = params.set('nom', nom);

    // Utilise une condition stricte pour le chiffre 0 si nécessaire,
    // mais ici on vérifie surtout que ce n'est pas null/undefined

    if (filiereId !== undefined && filiereId !== null) {
      params = params.set('filiereId', filiereId.toString());
    }

    return this.http.put(`${this.apiUrl}/${id}`, null, { params });
  }

  // 3️⃣ Supprimer une classe
  supprimerClasse(id: number): Observable<string> {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }

  // 4️⃣ Récupérer une classe par ID
  getClasseById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  // 5️⃣ Lister toutes les classes
  getAllClasses(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // 6️⃣ Classes par filière
  getClassesParFiliere(filiereId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/filiere/${filiereId}`);
  }

  // 7️⃣ Étudiants d'une classe pour une année scolaire
  getEtudiantsParClasseEtAnnee(
    classeId: number,
    anneeId: number
  ): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.apiUrl}/${classeId}/annee/${anneeId}/etudiants`
    );
  }
}
