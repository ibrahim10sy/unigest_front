import { VexRoutes } from '@vex/interfaces/vex-route.interface';

const routes: VexRoutes = [
  {
    path: 'finance',
    children: [
      {
        path: 'paiements',
        loadComponent: () =>
          import('../pages/finance/paiements/paiement-list/paiement-list.component')
            .then(m => m.PaiementListComponent)
      }
    ]
  }
];

export default routes;