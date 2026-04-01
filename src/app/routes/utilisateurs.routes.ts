import { VexRoutes } from '@vex/interfaces/vex-route.interface';
import { AuthGuard } from '../guards/auth.guard';

const routes: VexRoutes = [
  {
    path: 'utilisateurs',
    children: [
      {
        path: 'parents',
         canActivate: [AuthGuard],
        loadComponent: () =>
          import('../pages/utilisateurs/parents/parent-list/parent-list.component')
            .then(m => m.ParentListComponent)
      },
      {
        path: 'enseignants',
         canActivate: [AuthGuard],
        loadComponent: () =>
          import('../pages/utilisateurs/enseignants/enseignant-list/enseignant-list.component')
            .then(m => m.EnseignantListComponent)
      }
    ]
  }
];

export default routes;