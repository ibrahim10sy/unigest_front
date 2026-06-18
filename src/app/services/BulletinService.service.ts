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

  /**
   * Générer bulletin
   */
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

  /**
   * Bulletin par id
   */
  getBulletin(id: number): Observable<Bulletin> {
    return this.http.get<Bulletin>(`${this.apiUrl}/${id}`);
  }

  /**
   * Tous les bulletins d’un étudiant
   */
  getBulletinsEtudiant(etudiantId: number): Observable<Bulletin[]> {
    return this.http.get<Bulletin[]>(
      `${this.apiUrl}/etudiant/${etudiantId}`
    );
  }

//   getBulletinsClassePeriode(
//   classeId: number,
//   periode: number,
//   typePeriode: TypePeriode
// ): Observable<Bulletin[]> {

//   const params = new HttpParams()
//     .set('periode', periode)
//     .set('typePeriode', typePeriode);

//   return this.http.get<Bulletin[]>(
//     `${this.apiUrl}/classe/${classeId}/periode`,
//     { params }
//   );
// }

  /**
   * Bulletin étudiant par période
   */
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

  /**
   * Bulletins d’une classe
   */
  getBulletinsClasse(classeId: number): Observable<Bulletin[]> {
    return this.http.get<Bulletin[]>(
      `${this.apiUrl}/classe/${classeId}`
    );
  }

  /**
   * Bulletins classe par période
   */
  getBulletinsClassePeriode(
    classeId: number,
    periode: number,
    typePeriode: TypePeriode
  ): Observable<Bulletin[]> {

    const params = new HttpParams()
      .set('periode', periode)
      .set('typePeriode', typePeriode);

    return this.http.get<Bulletin[]>(
      `${this.apiUrl}/classe/${classeId}/periode`,
      { params }
    );
  }

  /**
   * Régénérer bulletin
   */
  regenererBulletin(
    etudiantId: number,
    periode: number,
    typePeriode: TypePeriode
  ): Observable<Bulletin> {

    const params = new HttpParams()
      .set('etudiantId', etudiantId)
      .set('periode', periode)
      .set('typePeriode', typePeriode);

    return this.http.put<Bulletin>(
      `${this.apiUrl}/regenerer`,
      null,
      { params }
    );
  }

  /**
   * Télécharger le PDF d'un bulletin
   */
  telechargerPdf(id: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/${id}/pdf`, {
      responseType: 'blob'
    });
  }

  /**
   * Télécharger le Word d'un bulletin
   */
  telechargerWord(id: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/${id}/word`, {
      responseType: 'blob'
    });
  }

  /**
   * Supprimer bulletin
   */
  supprimerBulletin(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}