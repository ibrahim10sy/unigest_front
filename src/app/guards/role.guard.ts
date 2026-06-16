import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const RoleGuard = (allowedRoles: string[]): CanActivateFn => {
  return () => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (!authService.isLoggedIn()) {
      return router.createUrlTree(['/login']);
    }

    const role = authService.getRole();
    if (role && allowedRoles.includes(role)) {
      return true;
    }

    // Redirige vers la page d'accueil du rôle actuel
    if (authService.isEnseignant()) {
      return router.createUrlTree(['/enseignant/mes-affectations']);
    }
    if (authService.isComptable()) {
      return router.createUrlTree(['/finance/paiements']);
    }
    return router.createUrlTree(['/dashboards/analytics']);
  };
};
