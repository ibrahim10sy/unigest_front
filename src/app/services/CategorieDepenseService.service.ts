import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environnement/environment';

export interface CategorieDepense {
  id?: number;
  nom: string;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class CategorieDepenseService {

  private apiUrl = `${environment.apiUrl}/api/categories`;

  constructor(private http: HttpClient) {}

  // =========================
  // CREATE
  // =========================
  create(categorie: CategorieDepense): Observable<CategorieDepense> {
    return this.http.post<CategorieDepense>(this.apiUrl, categorie);
  }

  // =========================
  // GET ALL
  // =========================
  getAll(): Observable<CategorieDepense[]> {
    return this.http.get<CategorieDepense[]>(this.apiUrl);
  }

  // =========================
  // GET BY ID
  // =========================
  getById(id: number): Observable<CategorieDepense> {
    return this.http.get<CategorieDepense>(`${this.apiUrl}/${id}`);
  }

  // =========================
  // UPDATE
  // =========================
  update(id: number, categorie: CategorieDepense): Observable<CategorieDepense> {
    return this.http.put<CategorieDepense>(
      `${this.apiUrl}/${id}`,
      categorie
    );
  }

  // =========================
  // DELETE
  // =========================
  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}