import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environnement/environment';
import { Note, TypeNote } from '../models/note.model';
import { Observable } from 'rxjs';
import { TypePeriode } from '../models/TypePeriode';

@Injectable({
  providedIn: 'root'
})

export class NoteService {
  private apiUrl = `${environment.apiUrl}/api/notes`;

  constructor(private http: HttpClient) {}

  ajouterNote(
    etudiantId: number,
    affectationId: number,
    valeur: number,
    type: TypeNote,
    periode: number,
    typePeriode: TypePeriode
  ): Observable<Note> {
    const params = new HttpParams()
      .set('etudiantId', etudiantId)
      .set('affectationId', affectationId)
      .set('valeur', valeur)
      .set('type', type)
      .set('periode', periode)
      .set('typePeriode', typePeriode);

    return this.http.post<Note>(this.apiUrl, null, { params });
  }

  modifierNote(
    noteId: number,
    valeur: number,
    type: TypeNote
  ): Observable<Note> {
    const params = new HttpParams()
      .set('valeur', valeur)
      .set('type', type);

    return this.http.put<Note>(
      `${this.apiUrl}/${noteId}`,
      null,
      { params }
    );
  }

  supprimerNote(noteId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${noteId}`);
  }

  getNote(noteId: number): Observable<Note> {
    return this.http.get<Note>(`${this.apiUrl}/${noteId}`);
  }

  getNotesEtudiant(etudiantId: number): Observable<Note[]> {
    return this.http.get<Note[]>(
      `${this.apiUrl}/etudiant/${etudiantId}`
    );
  }

  getNotesAffectation(affectationId: number): Observable<Note[]> {
    return this.http.get<Note[]>(
      `${this.apiUrl}/affectation/${affectationId}`
    );
  }

  getNotesEtudiantPeriode(
    etudiantId: number,
    periode: number,
    typePeriode: TypePeriode
  ): Observable<Note[]> {
    const params = new HttpParams()
      .set('periode', periode)
      .set('typePeriode', typePeriode);

    return this.http.get<Note[]>(
      `${this.apiUrl}/etudiant/${etudiantId}/periode`,
      { params }
    );
  }

  calculerMoyenne(
    etudiantId: number,
    periode: number,
    typePeriode: TypePeriode
  ): Observable<number> {
    const params = new HttpParams()
      .set('periode', periode)
      .set('typePeriode', typePeriode);

    return this.http.get<number>(
      `${this.apiUrl}/etudiant/${etudiantId}/moyenne`,
      { params }
    );
  }
}