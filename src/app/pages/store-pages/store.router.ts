import { VexRoutes } from '@vex/interfaces/vex-route.interface';
import { StoreComponent } from './store/store.component';

const routes: VexRoutes = [
  {
    path: 'stores',
    component: StoreComponent,
    children: [
      {
        path: 'store',
        loadComponent: () => import('./store/store.component').then(m => m.StoreComponent)
      },
      {
        path: 'commande',
        loadComponent: () => import('./commande/commande.component').then(m => m.CommandeComponent)
      },
      {
        path: '',
        redirectTo: 'store',
        pathMatch: 'full'
      }
    ]
  }
];

export default routes;
