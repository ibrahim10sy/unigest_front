import { Injectable } from '@angular/core';
import { VexLayoutService } from '@vex/services/vex-layout.service';
import { NavigationItem } from './navigation-item.interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NavigationLoaderService {
  private readonly _items: BehaviorSubject<NavigationItem[]> =
    new BehaviorSubject<NavigationItem[]>([]);

  get items$(): Observable<NavigationItem[]> {
    return this._items.asObservable();
  }

  constructor(private readonly layoutService: VexLayoutService) {
    this.loadNavigation();
  }

  loadNavigation(): void {
    this._items.next([
      // ============================
      // 📊 DASHBOARD
      // ============================
       {
      type: 'subheading',
      label: 'Tableau de bord',
      children: [
        {
          type: 'link',
          label: 'Tableau de bord',
          route: '/dashboards/analytics',
          icon: 'mat:insights',
          routerLinkActiveOptions: { exact: true }
        }
      ]
    },

      // ============================
      // 📚 SCOLARITÉ
      // ============================
      {
        type: 'subheading',
        label: 'Scolarité',
        children: [
          
          {
            type: 'link',
            label: 'Étudiants',
            route: '/scolarite/etudiants',
            icon: 'mat:groups'
          },
          // {
          //   type: 'link',
          //   label: 'tables',
          //   route: '/scolarite/aio-table',
          //   icon: 'mat:groups'
          // },
             {
            type: 'link',
            label: 'Anne Scolaire',
            route: '/scolarite/annee-scolaire',
            icon: 'mat:date_range'
          },
          {
            type: 'link',
            label: 'Niveau',
            route: '/scolarite/niveau',
            icon: 'mat:layers'
          },
          {
            type: 'link',
            label: 'Filières',
            route: '/scolarite/filieres',
            icon: 'mat:school'
          },
          {
            type: 'link',
            label: 'Classes/Matières',
            route: '/scolarite/classes',
            icon: 'mat:class'
          },
       
          {
            type: 'link',
            label: 'Inscriptions',
            route: '/scolarite/inscriptions',
            icon: 'mat:assignment_ind'
          },
        ]
      },

      // ============================
      // 🎓 PÉDAGOGIE
      // ============================
      {
        type: 'subheading',
        label: 'Pédagogie',
        children: [
          {
            type: 'link',
            label: 'Matières',
            route: '/pedagogie/matieres',
            icon: 'mat:menu_book'
          },
          {
            type: 'link',
            label: 'Affectations',
            route: '/pedagogie/affectations',
            icon: 'mat:assignment'
          },
          {
            type: 'link',
            label: 'Séances',
            route: '/pedagogie/seances',
            icon: 'mat:schedule'
          },
          {
            type: 'link',
            label: 'Notes',
            route: '/pedagogie/notes',
            icon: 'mat:grading'
          },
          {
            type: 'link',
            label: 'Bulletins',
            route: '/pedagogie/bulletins',
            icon: 'mat:description'
          }
        ]
      },

      // ============================
      // 💰 FINANCE
      // ============================
      {
        type: 'subheading',
        label: 'Finance',
        children: [
          {
            type: 'link',
            label: 'Paiements',
            route: '/finance/paiements',
            icon: 'mat:payments'
          }
        ]
      },

      // ============================
      // 👤 UTILISATEURS
      // ============================
      {
        type: 'subheading',
        label: 'Utilisateurs',
        children: [
          {
            type: 'link',
            label: 'Parent',
            route: '/scolarite/parent',
            icon: 'mat:family_restroom'
          },
         
          {
            type: 'link',
            label: 'Enseignants',
            route: '/utilisateurs/enseignants',
            icon: 'mat:person'
          }
        ]
      }
    ]);
  }
}