import { VexRoutes } from '@vex/interfaces/vex-route.interface';

const routes: VexRoutes = [
  {
    path: 'utilisateurs',
    children: [
      {
        path: 'parents',
        loadComponent: () =>
          import('../pages/utilisateurs/parents/parent-list/parent-list.component')
            .then(m => m.ParentListComponent)
      },
      {
        path: 'enseignants',
        loadComponent: () =>
          import('../pages/utilisateurs/enseignants/enseignant-list/enseignant-list.component')
            .then(m => m.EnseignantListComponent)
      }
    ]
  }
];

export default routes;