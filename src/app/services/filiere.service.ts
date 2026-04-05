// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class FiliereService {

//   constructor() { }
// }


import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environnement/environment';
import { Filiere } from '../models/Filiere';

@Injectable({
  providedIn: 'root'
})
export class FiliereService {

  private readonly apiUrl = `${environment.apiUrl}/api/filieres`;

  constructor(private http: HttpClient) { }

  // 1️⃣ Ajouter une filière (Utilise HttpParams car le backend attend @RequestParam)
  ajouterFiliere(nom: string, niveauId:number): Observable<Filiere> {
     let params = new HttpParams();
    if (nom) params = params.set('nom', nom);
     if (niveauId) params = params.set('niveauId', niveauId.toString());
    return this.http.post<Filiere>(this.apiUrl, null, { params });
  }

  // 2️⃣ Modifier une filière
  modifierFiliere( niveauId:number, id: number, nom?: string, actif?: boolean): Observable<Filiere> {
    let params = new HttpParams();
    if (nom) params = params.set('nom', nom);
    if (niveauId) params = params.set('niveauId', niveauId.toString());
    if (actif !== undefined) params = params.set('actif', actif.toString());
    
    return this.http.put<Filiere>(`${this.apiUrl}/${id}`, null, { params });
  }

  // 3️⃣ Supprimer une filière
  supprimerFiliere(id: number): Observable<string> {
    return this.http.delete(`${this.apiUrl}/${id}`, { responseType: 'text' });
  }

  // 4️⃣ Récupérer une filière par ID
  getFiliereById(id: number): Observable<Filiere> {
    return this.http.get<Filiere>(`${this.apiUrl}/${id}`);
  }

  // 5️⃣ Lister toutes les filières
  getAllFilieres(): Observable<Filiere[]> {
    return this.http.get<Filiere[]>(this.apiUrl);
  }



  // 6️⃣ Lister toutes les filières actives
  getFilieresActives(): Observable<Filiere[]> {
    return this.http.get<Filiere[]>(`${this.apiUrl}/actives`);
  }

  // 7️⃣ Rechercher filières par nom
  rechercherParNom(nom: string): Observable<Filiere[]> {
    const params = new HttpParams().set('nom', nom);
    return this.http.get<Filiere[]>(`${this.apiUrl}/recherche`, { params });
  }

updateActif(id: number, actif: boolean): Observable<string> {
  return this.http.patch(`${this.apiUrl}/${id}/actif`, { actif }, { 
    responseType: 'text' // 👈 Indique à Angular de ne pas parser en JSON
  });
}

 getFilieresParNiveau(niveauId: number): Observable<Filiere[]> {
  return this.http.get<Filiere[]>(`${this.apiUrl}/par-niveau/${niveauId}`);
}
}