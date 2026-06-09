import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { EmploiDuTemps } from '../models/emploi-du-temps.model';
import { environment } from 'src/environnement/environment';

@Injectable({
  providedIn: 'root'
})
export class EmploiDuTempsService {

   private apiUrl = `${environment.apiUrl}/api/emplois-du-temps`;
  
    constructor(private http: HttpClient) {}

  getAll(): Observable<EmploiDuTemps[]> {
    return this.http.get<EmploiDuTemps[]>(this.apiUrl);
  }

  getByClasse(classeId: number): Observable<EmploiDuTemps[]> {
    return this.http.get<EmploiDuTemps[]>(
      `${this.apiUrl}/classe/${classeId}`
    );
  }
  
  getToday(): Observable<EmploiDuTemps[]> {
    return this.http.get<EmploiDuTemps[]>(
      `${this.apiUrl}/all`
    );
  }

  save(data: EmploiDuTemps): Observable<EmploiDuTemps> {
      console.log("📡 HTTP SAVE CALL =>", data);

    if (data.id) {
      return this.http.put<EmploiDuTemps>(
        `${this.apiUrl}/${data.id}`,
        data
      );
    }

    return this.http.post<EmploiDuTemps>(
      this.apiUrl,
      data
    );
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiUrl}/${id}`
    );
  }

  exportPdf(classeId: number) {
    return this.http.get(
      `${this.apiUrl}/export/pdf/${classeId}`,
      {
        responseType: 'blob'
      }
    );
  }
}