import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environnement/environment';

export interface Depense {
  id?: number;
  libelle: string;
  montant: number;
  dateDepense: string;
  description?: string;
  modePaiement?: string;
  dateCreation?: string;
  categorieDepense?: any;
  utilisateur?: any;
}

@Injectable({
  providedIn: 'root'
})
export class DepenseService {

  private apiUrl = `${environment.apiUrl}/api/depenses`;

  constructor(private http: HttpClient) {}

  // =========================
  // CREATE
  // =========================
  create(depense: Depense): Observable<Depense> {
    return this.http.post<Depense>(this.apiUrl, depense);
  }

  
  // =========================
  // UPDATE
  // =========================
  update(id: number, depense: Depense): Observable<Depense> {
  return this.http.put<Depense>(`${this.apiUrl}/${id}`, depense);
}

  // =========================
  // GET ALL
  // =========================
  getAll(): Observable<Depense[]> {
    return this.http.get<Depense[]>(this.apiUrl);
  }

  // =========================
  // GET BY ID
  // =========================
  getById(id: number): Observable<Depense> {
    return this.http.get<Depense>(`${this.apiUrl}/${id}`);
  }

  // =========================
  // FILTER BY CATEGORIE
  // =========================
  getByCategorie(categorieId: number): Observable<Depense[]> {
    const params = new HttpParams().set('categorieId', categorieId);
    return this.http.get<Depense[]>(`${this.apiUrl}/by-categorie`, { params });
  }

  // =========================
  // FILTER BY DATE
  // =========================
  getByDate(dateDebut: string, dateFin: string): Observable<Depense[]> {
    const params = new HttpParams()
      .set('dateDebut', dateDebut)
      .set('dateFin', dateFin);

    return this.http.get<Depense[]>(`${this.apiUrl}/by-date`, { params });
  }

  // =========================
  // TOTAL GLOBAL
  // =========================
  getTotal(): Observable<number> {
    return this.http.get<number>(`${this.apiUrl}/total`);
  }

  // =========================
  // TOTAL PAR CATEGORIE
  // =========================
  getTotalByCategorie(categorieId: number): Observable<number> {
    return this.http.get<number>(
      `${this.apiUrl}/total/categorie/${categorieId}`
    );
  }

  // =========================
  // DELETE
  // =========================
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}