import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environnement/environment';
import { Seance } from '../models/Seance';
import { SeanceDTO } from '../models/SeanceDTO';

@Injectable({
  providedIn: 'root'
})
export class SeanceService {
  private apiUrl = `${environment.apiUrl}/api/seances`;

  constructor(private http: HttpClient) {}

  demarrerSeance(affectationId: number, matiere: string): Observable<Seance> {
    const params = new HttpParams()
      .set('affectationId', affectationId)
      .set('matiere', matiere);

    return this.http.post<Seance>(`${this.apiUrl}/demarrer`, null, { params });
  }

  // ✅ Terminer une séance
  terminerSeance(seanceId: number): Observable<Seance> {
    return this.http.put<Seance>(`${this.apiUrl}/${seanceId}/terminer`, null);
  }

  // ✅ Séances par date
  getSeancesParDate(date: string): Observable<Seance[]> {
    const params = new HttpParams().set('date', date);
    return this.http.get<Seance[]>(`${this.apiUrl}/date`, { params });
  }

  // ✅ Séances par affectation
  getSeancesParAffectation(affectationId: number): Observable<Seance[]> {
    return this.http.get<Seance[]>(
      `${this.apiUrl}/affectation/${affectationId}`
    );
  }

  getSeancesDuJour(): Observable<SeanceDTO[]> {
    return this.http.get<SeanceDTO[]>(`${this.apiUrl}/jour`);
  }

  // ✅ Séances par affectation et date
  getSeancesParAffectationEtDate(
    affectationId: number,
    date: string
  ): Observable<Seance[]> {
    const params = new HttpParams().set('date', date);

    return this.http.get<Seance[]>(
      `${this.apiUrl}/affectation/${affectationId}/date`,
      { params }
    );
  }

  // ✅ Séances en cours
  getSeancesEnCours(): Observable<Seance[]> {
    return this.http.get<Seance[]>(`${this.apiUrl}/encours`);
  }

  getSeances(): Observable<Seance[]> {
    return this.http.get<Seance[]>(`${this.apiUrl}`);
  }
}
