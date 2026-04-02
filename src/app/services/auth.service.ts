import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environnement/environment';
import { tap } from 'rxjs/operators'; // Import pour l'opérateur tap
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private serviceUrl: string;
  private baseUrl: string = "api/auth";
  constructor(private http: HttpClient, private router:Router) {
    this.serviceUrl = environment.apiUrl;
  }

login(credentials: any): Observable<any> {
    return this.http.post<any>(`${this.serviceUrl}/${this.baseUrl}/login`, credentials).pipe(
      tap((res: any) => {
        if (res && res.token) {
          localStorage.setItem('auth_token', res.token);
          // On stocke l'utilisateur sous forme de chaîne JSON
          localStorage.setItem('user_data', JSON.stringify({
            nom: res.nom,
            prenom: res.prenom,
            role: res.role
          }));
        }
      })
    );
}

  getMe(): Observable<any> {
    return this.http.get(`${this.serviceUrl}/me`);
  }


 isLoggedIn(): boolean {

  const token = localStorage.getItem('auth_token');

  return token !== null && token !== undefined && token !== '';

}

  getUserData() {
    const user = localStorage.getItem('user_data');
    return user ? JSON.parse(user) : null;
}

// Dans ton AuthService
getToken(): string | null {
  return localStorage.getItem('auth_token');
}

logout(): void {
  localStorage.removeItem('auth_token');
  localStorage.removeItem('user_data');
}
  
}
