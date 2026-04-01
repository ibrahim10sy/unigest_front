import { VexRoutes } from '@vex/interfaces/vex-route.interface';
import { AuthGuard } from '../guards/auth.guard';

const routes: VexRoutes = [
  {
    path: 'pedagogie',
    children: [
      {
        path: 'seances',
         canActivate: [AuthGuard],
        loadComponent: () =>
          import('../pages/pedagogie/seances/seance-list/seance-list.component')
            .then(m => m.SeanceListComponent)
      },
      {
        path: 'appels/:seanceId',
         canActivate: [AuthGuard],
        loadComponent: () =>
          import('../pages/pedagogie/appels/appel-seance/appel-seance.component')
            .then(m => m.AppelSeanceComponent)
      },
      {
        path: 'notes',
        canActivate: [AuthGuard],
        loadComponent: () =>
          import('../pages/pedagogie/notes/note-list/note-list.component')
            .then(m => m.NoteListComponent)
      }
    ]
  }
];

export default routes;