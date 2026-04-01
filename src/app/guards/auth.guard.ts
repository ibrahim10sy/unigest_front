// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };


import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

// export class AuthGuard {
//   static canActivate: CanActivateFn = (route, state) => {
//     const authService = inject(AuthService);
//     const router = inject(Router);

//     if (authService.isLoggedIn()) {
//       return true;
//     } else {
//       router.navigate(['/login']);
//       return false;
//     }
//   };
// }



export const AuthGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isLoggedIn()) {
    return true;
  }

  return router.createUrlTree(['/login']);

};