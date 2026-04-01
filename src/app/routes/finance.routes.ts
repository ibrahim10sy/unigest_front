import { VexRoutes } from '@vex/interfaces/vex-route.interface';
import { AuthGuard } from '../guards/auth.guard';

const routes: VexRoutes = [
  {
    path: 'finance',
    children: [
      {
        path: 'paiements',
         canActivate: [AuthGuard],
        loadComponent: () =>
          import('../pages/finance/paiements/paiement-list/paiement-list.component')
            .then(m => m.PaiementListComponent)
      }
    ]
  }
];

export default routes;