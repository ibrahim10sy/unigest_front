import { VexRoutes } from '@vex/interfaces/vex-route.interface';
import { AuthGuard } from '../guards/auth.guard';

const routes: VexRoutes = [
  {
    path: 'scolarite',
    children: [
      {
        path: 'etudiants',
        canActivate: [AuthGuard],
        loadComponent: () =>
          import('../pages/scolarite/etudiants/etudiant-list/etudiant-list.component')
            .then(m => m.EtudiantListComponent)
      },
      {
        path: 'classes',
         canActivate: [AuthGuard],
        loadComponent: () =>
          import('../pages/scolarite/classes/classe-list/classe-list.component')
            .then(m => m.ClasseListComponent)
      },
      {
        path: 'inscriptions',
         canActivate: [AuthGuard],
        loadComponent: () =>
          import('../pages/scolarite/inscriptions/inscription-list/inscription-list.component')
            .then(m => m.InscriptionListComponent)
      }
    ]
  }
];

export default routes;