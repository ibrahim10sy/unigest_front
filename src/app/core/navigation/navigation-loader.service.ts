import { Injectable } from '@angular/core';
import { NavigationItem } from './navigation-item.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationLoaderService {
  private readonly _items: BehaviorSubject<NavigationItem[]> =
    new BehaviorSubject<NavigationItem[]>([]);

  get items$(): Observable<NavigationItem[]> {
    return this._items.asObservable();
  }

  constructor(private readonly authService: AuthService) {
    this.loadNavigation();
  }

  loadNavigation(): void {
    if (this.authService.isEnseignant()) {
      this._items.next(this.buildEnseignantNav());
    } else if (this.authService.isComptable()) {
      this._items.next(this.buildComptableNav());
    } else {
      this._items.next(this.buildAdminNav());
    }
  }

  private buildEnseignantNav(): NavigationItem[] {
    return [
      {
        type: 'subheading',
        label: 'Mon espace',
        children: [
          {
            type: 'link',
            label: 'Mes Affectations',
            route: '/enseignant/mes-affectations',
            icon: 'mat:assignment',
            routerLinkActiveOptions: { exact: true }
          },
          {
            type: 'link',
            label: 'Emploi du Temps',
            route: '/enseignant/emploi-du-temps',
            icon: 'mat:calendar_today'
          },
          {
            type: 'link',
            label: 'Classes',
            route: '/enseignant/classes',
            icon: 'mat:class'
          }
        ]
      }
    ];
  }

  private buildComptableNav(): NavigationItem[] {
    return [
      {
        type: 'subheading',
        label: 'Finance',
        children: [
          {
            type: 'link',
            label: 'Paiements',
            route: '/finance/paiements',
            icon: 'mat:payments',
            routerLinkActiveOptions: { exact: true }
          },
          {
            type: 'link',
            label: 'Dépenses',
            route: '/finance/depenses',
            icon: 'mat:account_balance_wallet'
          },
          {
            type: 'link',
            label: 'Catégorie Dépense',
            route: '/finance/categorie-depense',
            icon: 'mat:category'
          }
        ]
      }
    ];
  }

  private buildAdminNav(): NavigationItem[] {
    return [
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
          {
            type: 'link',
            label: 'Année Scolaire',
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
            label: 'Classes / Matières',
            route: '/scolarite/classes',
            icon: 'mat:class'
          },
          {
            type: 'link',
            label: 'Inscriptions',
            route: '/scolarite/inscriptions',
            icon: 'mat:assignment_ind'
          }
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
            label: 'Absences & Retard',
            route: '/pedagogie/appels',
            icon: 'mat:how_to_reg'
          },
          {
            type: 'link',
            label: 'Notes',
            route: '/pedagogie/notes',
            icon: 'mat:grading'
          },
          {
            type: 'link',
            label: 'Emploi du temps',
            route: '/pedagogie/emploi-du-temps-calendar',
            icon: 'mat:calendar_today'
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
          },
          {
            type: 'link',
            label: 'Catégorie Dépense',
            route: '/finance/categorie-depense',
            icon: 'mat:category'
          },
          {
            type: 'link',
            label: 'Dépenses',
            route: '/finance/depenses',
            icon: 'mat:account_balance_wallet'
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
            label: 'Parents',
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
    ];
  }
}
