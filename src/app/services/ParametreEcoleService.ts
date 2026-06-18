import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environnement/environment';
import { ParametreEcole } from '../models/ParametreEcole';
import { AppreciationSeuil } from '../models/AppreciationSeuil';

@Injectable({ providedIn: 'root' })
export class ParametreEcoleService {

  private base = `${environment.apiUrl}/api/parametres`;

  constructor(private http: HttpClient) {}

  getParametres(): Observable<ParametreEcole> {
    return this.http.get<ParametreEcole>(`${this.base}/ecole`);
  }

  sauvegarderParametres(p: ParametreEcole): Observable<ParametreEcole> {
    return this.http.put<ParametreEcole>(`${this.base}/ecole`, p);
  }

  getSeuils(): Observable<AppreciationSeuil[]> {
    return this.http.get<AppreciationSeuil[]>(`${this.base}/appreciations`);
  }

  sauvegarderSeuils(seuils: AppreciationSeuil[]): Observable<AppreciationSeuil[]> {
    return this.http.put<AppreciationSeuil[]>(`${this.base}/appreciations`, seuils);
  }

  supprimerSeuil(id: number): Observable<void> {
    return this.http.delete<void>(`${this.base}/appreciations/${id}`);
  }
}
