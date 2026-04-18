import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environnement/environment';
import { Parent } from '../models/Parent';

@Injectable({
  providedIn: 'root'
})
export class ParentService {
  private apiUrl = `${environment.apiUrl}/api/parents`;

  constructor(private http: HttpClient) {}

  getAll() {
    return this.http.get<Parent[]>(this.apiUrl);
  }

  getById(id: number) {
    return this.http.get<Parent>(`${this.apiUrl}/${id}`);
  }

  save(parent: Parent) {
    if (parent.id)
      return this.http.put<Parent>(`${this.apiUrl}/${parent.id}`, parent);
    return this.http.post<Parent>(this.apiUrl, parent);
  }

  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
