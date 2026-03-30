import { DateTime } from 'luxon';

export interface Order {
  name: string;
  price: string;
  status: 'ready' | 'pending' | 'warn';
  timestamp: string;
}

export const tableSalesData: Order[] = [
  {
    name: 'Licence Genie Logiciel',
    price: 'Sy Ibrahim',
    status: 'pending',
    timestamp: DateTime.local().minus({ minutes: 2 }).toRelative()!
  },
  {
    name: 'Licence IG',
    price: 'Moussa Maiga',
    status: 'ready',
    timestamp: DateTime.local().minus({ minutes: 6 }).toRelative()!
  },
  {
    name: 'Communication',
    price: 'Awa Coulibaly',
    status: 'ready',
    timestamp: DateTime.local().minus({ minutes: 14 }).toRelative()!
  },
  {
    name: 'Developpement personnel',
    price: 'Mariam Dolo',
    status: 'ready',
    timestamp: DateTime.local().minus({ minutes: 17 }).toRelative()!
  }
];
