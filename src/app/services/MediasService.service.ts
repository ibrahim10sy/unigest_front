import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medias, MediaType } from '../models/Medias';
import { environment } from 'src/environnement/environment';

@Injectable({
  providedIn: 'root'
})
export class MediaService {

  private apiUrl = `${environment.apiUrl}/api/medias`;

  constructor(private http: HttpClient) {}

  /**
   * Ajouter un media avec fichier
   */
 create(media: Medias, fichier?: File): Observable<Medias> {
  const formData = new FormData();

  formData.append('medias', JSON.stringify(media));

  if (fichier) {
    formData.append('fichier', fichier);
  }

  return this.http.post<Medias>(this.apiUrl, formData);
}

  getByType(type: MediaType, referenceId: number): Observable<Medias[]> {
  return this.http.get<Medias[]>(`${this.apiUrl}`, {
    params: {
      type,
      referenceId
    }
  });
}

  getFichier(id: number): Observable<Blob> {
  return this.http.get(`${this.apiUrl}/${id}/fichier`, {
    responseType: 'blob'
  });
}
  /**
   * Supprimer un media
   */
  delete(id: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/${id}`);
}
}