import { VexRoutes } from '@vex/interfaces/vex-route.interface';

const routes: VexRoutes = [
  {
    path: 'pedagogie',
    children: [
      {
        path: 'seances',
        loadComponent: () =>
          import('../pages/pedagogie/seances/seance-list/seance-list.component')
            .then(m => m.SeanceListComponent)
      },
      {
        path: 'appels/:seanceId',
        loadComponent: () =>
          import('../pages/pedagogie/appels/appel-seance/appel-seance.component')
            .then(m => m.AppelSeanceComponent)
      },
      {
        path: 'notes',
        loadComponent: () =>
          import('../pages/pedagogie/notes/note-list/note-list.component')
            .then(m => m.NoteListComponent)
      }
    ]
  }
];

export default routes;