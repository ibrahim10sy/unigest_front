import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { LayoutComponent } from './layouts/layout/layout.component';
import { VexRoutes } from '@vex/interfaces/vex-route.interface';
import { DetailsComponent } from './pages/pedagogie/affectations/details/details.component';
import { ClasseMatiereListComponent } from './pages/scolarite/classematiere/classe-matiere-list/classe-matiere-list.component';
import { DetailEtudiantComponent } from './pages/scolarite/etudiants/detail-etudiant/detail-etudiant.component';

export const appRoutes: VexRoutes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  // AUTH
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/pages/auth/login/login.component').then(
        (m) => m.LoginComponent
      )
  },

  {
    path: '',
    component: LayoutComponent,
    children: [

      // ============================
      // 📊 DASHBOARD (admin only)
      // ============================
      {
        path: 'dashboards/analytics',
        canActivate: [RoleGuard(['ADMIN'])],
        loadComponent: () =>
          import('./pages/dashboards/dashboard-analytics/dashboard-analytics.component')
            .then((m) => m.DashboardComponent)
      },

      // ============================
      // 📚 SCOLARITÉ (admin only)
      // ============================
      {
        path: 'scolarite',
        canActivate: [RoleGuard(['ADMIN'])],
        children: [
          {
            path: 'etudiants',
            children: [
              {
                path: '',
                loadComponent: () =>
                  import('./pages/scolarite/etudiants/etudiant-list/etudiant-list.component')
                    .then((m) => m.EtudiantListComponent)
              },
              {
                path: 'details',
                component: DetailEtudiantComponent
              }
            ]
          },
          {
            path: 'etudiants/new',
            loadComponent: () =>
              import('./pages/scolarite/etudiants/etudiant-form/etudiant-form.component')
                .then((m) => m.EtudiantFormComponent)
          },
          {
            path: 'classes',
            children: [
              {
                path: '',
                loadComponent: () =>
                  import('./pages/scolarite/classes/classe-list/classe-list.component')
                    .then((m) => m.ClasseListComponent)
              },
              {
                path: 'details',
                component: ClasseMatiereListComponent
              }
            ]
          },
          {
            path: 'classes/new',
            loadComponent: () =>
              import('./pages/scolarite/classes/classe-form/classe-form.component')
                .then((m) => m.ClasseFormComponent)
          },
          {
            path: 'inscriptions',
            loadComponent: () =>
              import('./pages/scolarite/inscriptions/inscription-list/inscription-list.component')
                .then((m) => m.InscriptionListComponent)
          },
          {
            path: 'inscriptions/new',
            loadComponent: () =>
              import('./pages/scolarite/inscriptions/inscription-form/inscription-form.component')
                .then((m) => m.InscriptionFormComponent)
          },
          {
            path: 'filieres',
            loadComponent: () =>
              import('./pages/scolarite/filieres/filiere-list/filiere-list.component')
                .then((m) => m.FiliereListComponent)
          },
          {
            path: 'niveau',
            loadComponent: () =>
              import('./pages/scolarite/niveau/niveau-list/niveau-list.component')
                .then((m) => m.NiveauListComponent)
          },
          {
            path: 'parent',
            loadComponent: () =>
              import('./pages/scolarite/parent/parent-list/parent-list.component')
                .then((m) => m.ParentListComponent)
          },
          {
            path: 'annee-scolaire',
            loadComponent: () =>
              import('./pages/scolarite/annee-scolaire/annee-scolaire-liste/annee-scolaire-liste.component')
                .then((m) => m.AnneeScolaireListeComponent)
          }
        ]
      },

      // ============================
      // 🎓 PÉDAGOGIE
      // ============================
      {
        path: 'pedagogie',
        canActivate: [AuthGuard],
        children: [
          {
            path: 'matieres',
            canActivate: [RoleGuard(['ADMIN'])],
            loadComponent: () =>
              import('./pages/pedagogie/matieres/matiere-list/matiere-list.component')
                .then((m) => m.MatiereListComponent)
          },
          {
            path: 'affectations',
            children: [
              {
                path: '',
                canActivate: [RoleGuard(['ADMIN'])],
                loadComponent: () =>
                  import('./pages/pedagogie/affectations/affectation-list/affectation-list.component')
                    .then((m) => m.AffectationListComponent)
              },
              {
                path: 'details',
                component: DetailsComponent
              }
            ]
          },
          {
            path: 'seances',
            canActivate: [RoleGuard(['ADMIN'])],
            loadComponent: () =>
              import('./pages/pedagogie/seances/seance-list/seance-list.component')
                .then((m) => m.SeanceListComponent)
          },
          {
            path: 'appels',
            canActivate: [RoleGuard(['ADMIN'])],
            loadComponent: () =>
              import('./pages/pedagogie/appels/appel-seance/appel-seance.component')
                .then((m) => m.AppelSeanceComponent)
          },
          {
            path: 'notes',
            canActivate: [RoleGuard(['ADMIN'])],
            loadComponent: () =>
              import('./pages/pedagogie/notes/note-list/note-list.component')
                .then((m) => m.NoteListComponent)
          },
          {
            path: 'emploi-du-temps',
            canActivate: [RoleGuard(['ADMIN'])],
            loadComponent: () =>
              import('./pages/pedagogie/emploi-du-temps/emploi-du-temps-list/emploi-du-temps-list.component')
                .then((m) => m.EmploiDuTempsListeComponent)
          },
          {
            path: 'emploi-du-temps-calendar',
            canActivate: [RoleGuard(['ADMIN'])],
            loadComponent: () =>
              import('./pages/pedagogie/emploi-du-temps/emploi-du-temps-calendar/emploi-du-temps-calendar.component')
                .then((m) => m.EmploiDuTempsCalendarComponent)
          },
          {
            path: 'calendar',
            canActivate: [RoleGuard(['ADMIN'])],
            loadComponent: () =>
              import('./pages/apps/calendar/calendar.component')
                .then((m) => m.CalendarComponent)
          },
          {
            path: 'bulletins',
            canActivate: [RoleGuard(['ADMIN'])],
            loadComponent: () =>
              import('./pages/pedagogie/bulletins/bulletin-list/bulletin-list.component')
                .then((m) => m.BulletinListComponent)
          }
        ]
      },

      // ============================
      // 💰 FINANCE (admin + comptable)
      // ============================
      {
        path: 'finance',
        canActivate: [RoleGuard(['ADMIN', 'COMPTABLE'])],
        children: [
          {
            path: 'paiements',
            loadComponent: () =>
              import('./pages/finance/paiements/paiement-list/paiement-list.component')
                .then((m) => m.PaiementListComponent)
          },
          {
            path: 'categorie-depense',
            loadComponent: () =>
              import('./pages/scolarite/categorie-depense/categorie-depense-list/categorie-depense-list.component')
                .then((m) => m.CategorieListComponent)
          },
          {
            path: 'depenses',
            loadComponent: () =>
              import('./pages/finance/depense-list/depense-list.component')
                .then((m) => m.DepenseListComponent)
          },
          {
            path: 'categorie',
            loadComponent: () =>
              import('./pages/finance/categorie-list/categorie-list.component')
                .then((m) => m.CategorieListComponent)
          }
        ]
      },

      // ============================
      // 👤 UTILISATEURS (admin only)
      // ============================
      {
        path: 'utilisateurs',
        canActivate: [RoleGuard(['ADMIN'])],
        children: [
          {
            path: 'parents',
            loadComponent: () =>
              import('./pages/utilisateurs/parents/parent-list/parent-list.component')
                .then((m) => m.ParentListComponent)
          },
          {
            path: 'parents/new',
            loadComponent: () =>
              import('./pages/utilisateurs/parents/parent-form/parent-form.component')
                .then((m) => m.ParentFormComponent)
          },
          {
            path: 'enseignants',
            loadComponent: () =>
              import('./pages/utilisateurs/enseignants/enseignant-list/enseignant-list.component')
                .then((m) => m.EnseignantListComponent)
          },
          {
            path: 'enseignants/new',
            loadComponent: () =>
              import('./pages/utilisateurs/enseignants/enseignant-form/enseignant-form.component')
                .then((m) => m.EnseignantFormComponent)
          }
        ]
      },

      // ============================
      // 👨‍🏫 ESPACE ENSEIGNANT
      // ============================
      {
        path: 'enseignant',
        canActivate: [RoleGuard(['ENSEIGNANT'])],
        children: [
          {
            path: 'mes-affectations',
            loadComponent: () =>
              import('./pages/enseignant/mes-affectations/mes-affectations.component')
                .then((m) => m.MesAffectationsComponent)
          },
          {
            path: 'emploi-du-temps',
            loadComponent: () =>
              import('./pages/pedagogie/emploi-du-temps/emploi-du-temps-calendar/emploi-du-temps-calendar.component')
                .then((m) => m.EmploiDuTempsCalendarComponent)
          },
          {
            path: 'classes',
            loadComponent: () =>
              import('./pages/scolarite/classes/classe-list/classe-list.component')
                .then((m) => m.ClasseListComponent)
          },
          {
            path: 'affectations/details',
            component: DetailsComponent
          }
        ]
      },

      // 404
      {
        path: '**',
        loadComponent: () =>
          import('./pages/pages/errors/error-404/error-404.component')
            .then((m) => m.Error404Component)
      }
    ]
  }
];
