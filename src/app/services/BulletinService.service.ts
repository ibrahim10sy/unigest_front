import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environnement/environment';
import { TypePeriode } from '../models/TypePeriode';
import { Bulletin } from '../models/Bulletin';

@Injectable({
  providedIn: 'root'
})
export class BulletinService {
  private apiUrl = `${environment.apiUrl}/api/bulletins`;

  constructor(private http: HttpClient) {}

  genererBulletin(
    etudiantId: number,
    periode: number,
    typePeriode: TypePeriode
  ): Observable<Bulletin> {
    const params = new HttpParams()
      .set('etudiantId', etudiantId)
      .set('periode', periode)
      .set('typePeriode', typePeriode);

    return this.http.post<Bulletin>(this.apiUrl, null, { params });
  }

  getBulletin(id: number): Observable<Bulletin> {
    return this.http.get<Bulletin>(`${this.apiUrl}/${id}`);
  }

  getBulletinsEtudiant(etudiantId: number): Observable<Bulletin[]> {
    return this.http.get<Bulletin[]>(`${this.apiUrl}/etudiant/${etudiantId}`);
  }

  getBulletinPeriode(
    etudiantId: number,
    periode: number,
    typePeriode: TypePeriode
  ): Observable<Bulletin> {
    const params = new HttpParams()
      .set('periode', periode)
      .set('typePeriode', typePeriode);

    return this.http.get<Bulletin>(
      `${this.apiUrl}/etudiant/${etudiantId}/periode`,
      { params }
    );
  }

  supprimerBulletin(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
