import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environnement/environment';
import { tap } from 'rxjs/operators'; // Import pour l'opérateur tap

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private serviceUrl: string;
  private baseUrl: string = "api/auth";
  constructor(private http: HttpClient) {
    this.serviceUrl = environment.apiUrl;
  }

login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.serviceUrl}/${this.baseUrl}/login`, credentials).pipe(
      tap((res: any) => {
        if (res && res.token) {
          localStorage.setItem('auth_token', res.token);
          console.log('Token stocké avec succès');
        }
      })
    );
  }

  getMe(): Observable<any> {
    return this.http.get(`${this.serviceUrl}/me`);
  }

  logout(): void {
    localStorage.removeItem('auth_token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('auth_token');
  }

  getToken(): string | null {
    return localStorage.getItem('auth_token');
  }
  
}
