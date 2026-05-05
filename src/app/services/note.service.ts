import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environnement/environment';
import { Note, TypeNote } from '../models/note.model';
import { Observable } from 'rxjs';
import { TypePeriode } from '../models/TypePeriode';
import { NoteBatchRequest } from '../models/NoteBatchRequest';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private apiUrl = `${environment.apiUrl}/api/notes`;

  constructor(private http: HttpClient) {}

  /**
   * Ajouter une note
   */
  ajouterNote(
    etudiantId: number,
    affectationId: number,
    matiereId: number,
    valeur: number,
    type: TypeNote,
    periode: number,
    typePeriode: TypePeriode
  ): Observable<Note> {
    const params = new HttpParams()
      .set('etudiantId', etudiantId.toString())
      .set('affectationId', affectationId.toString())
      .set('matiereId', matiereId.toString())
      .set('valeur', valeur.toString())
      .set('type', type)
      .set('periode', periode.toString())
      .set('typePeriode', typePeriode);

    return this.http.post<Note>(this.apiUrl, null, { params });
  }

  /**
   * Ajouter plusieurs notes
   */
  ajouterNotesBatch(
    notes: NoteBatchRequest[]
  ): Observable<Note[]> {
    return this.http.post<Note[]>(
      `${this.apiUrl}/batch`,
      notes
    );
  }

  /**
   * Modifier une note
   */
  modifierNote(
    noteId: number,
    valeur: number,
    type: TypeNote
  ): Observable<Note> {
    const params = new HttpParams()
      .set('valeur', valeur.toString())
      .set('type', type);

    return this.http.put<Note>(
      `${this.apiUrl}/${noteId}`,
      null,
      { params }
    );
  }

  /**
   * Supprimer une note
   */
  supprimerNote(noteId: number): Observable<void> {
    return this.http.delete<void>(
      `${this.apiUrl}/${noteId}`
    );
  }

  /**
   * Récupérer une note
   */
  getNoteById(noteId: number): Observable<Note> {
    return this.http.get<Note>(
      `${this.apiUrl}/${noteId}`
    );
  }

  /**
   * Notes par classe et période
   */
  getNotesParClasseEtPeriode(
    classeId: number,
    anneeScolaireId: number,
    periode: number,
    typePeriode: TypePeriode
  ): Observable<Note[]> {
    const params = new HttpParams()
      .set('classeId', classeId.toString())
      .set('anneeScolaireId', anneeScolaireId.toString())
      .set('periode', periode.toString())
      .set('typePeriode', typePeriode);

    return this.http.get<Note[]>(
      `${this.apiUrl}/classe/periode`,
      { params }
    );
  }

  /**
   * Notes d’un étudiant
   */
  getNotesEtudiant(
    etudiantId: number
  ): Observable<Note[]> {
    return this.http.get<Note[]>(
      `${this.apiUrl}/etudiant/${etudiantId}`
    );
  }

  /**
   * Notes d’un étudiant par période
   */
  getNotesEtudiantPeriode(
    etudiantId: number,
    periode: number,
    typePeriode: TypePeriode
  ): Observable<Note[]> {
    const params = new HttpParams()
      .set('periode', periode.toString())
      .set('typePeriode', typePeriode);

    return this.http.get<Note[]>(
      `${this.apiUrl}/etudiant/${etudiantId}/periode`,
      { params }
    );
  }

  /**
   * Notes par affectation
   */
  getNotesParAffectation(
    affectationId: number
  ): Observable<Note[]> {
    return this.http.get<Note[]>(
      `${this.apiUrl}/affectation/${affectationId}`
    );
  }

  /**
   * Notes par affectation et période
   */
  getNotesParAffectationEtPeriode(
    affectationId: number,
    periode: number,
    typePeriode: TypePeriode
  ): Observable<Note[]> {
    const params = new HttpParams()
      .set('periode', periode.toString())
      .set('typePeriode', typePeriode);

    return this.http.get<Note[]>(
      `${this.apiUrl}/affectation/${affectationId}/periode`,
      { params }
    );
  }

  /**
   * Notes par période
   */
  getNotesParPeriode(
    anneeScolaireId: number,
    periode: number,
    typePeriode: TypePeriode
  ): Observable<Note[]> {
    const params = new HttpParams()
      .set('anneeScolaireId', anneeScolaireId.toString())
      .set('periode', periode.toString())
      .set('typePeriode', typePeriode);

    return this.http.get<Note[]>(
      `${this.apiUrl}/periode`,
      { params }
    );
  }

  /**
   * Notes par période active
   */
  getNotesParPeriodeActive(
    periode: number,
    typePeriode: TypePeriode
  ): Observable<Note[]> {
    const params = new HttpParams()
      .set('periode', periode.toString())
      .set('typePeriode', typePeriode);

    return this.http.get<Note[]>(
      `${this.apiUrl}/periode/active`,
      { params }
    );
  }

  /**
   * Moyenne étudiant
   */
  calculerMoyenneEtudiant(
    etudiantId: number,
    periode: number,
    typePeriode: TypePeriode
  ): Observable<number> {
    const params = new HttpParams()
      .set('periode', periode.toString())
      .set('typePeriode', typePeriode);

    return this.http.get<number>(
      `${this.apiUrl}/etudiant/${etudiantId}/moyenne`,
      { params }
    );
  }
}
