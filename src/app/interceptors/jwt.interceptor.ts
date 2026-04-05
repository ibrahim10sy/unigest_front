// // import { HttpInterceptorFn } from '@angular/common/http';

// // export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
// //   return next(req);
// // };



// import { Injectable } from '@angular/core';
// import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { AuthService } from '../services/auth.service';

// @Injectable()
// export class JwtInterceptor implements HttpInterceptor {
//   constructor(private authService: AuthService) {}

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     const token = this.authService.getToken();
    
//     // Si on a un token, on clone la requête et on ajoute le header
//     if (token) {
//       request = request.clone({
//         setHeaders: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//     }

//     // return next.handle(request);
    
//   }
// }

import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { catchError, throwError } from 'rxjs';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  // 1. On ajoute le token si disponible
  let authReq = req;
  if (token) {
    authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }

  // 2. On gère la réponse et l'éventuelle expiration (Erreur 401)
  return next(authReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        // Le token est expiré ou invalide -> Déconnexion forcée
        console.warn("Token expiré ou invalide. Déconnexion...");
        authService.logout(); 
      }
      return throwError(() => error);
    })
  );
};