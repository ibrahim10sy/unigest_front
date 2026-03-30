import { LayoutComponent } from './layouts/layout/layout.component';
import { VexRoutes } from '@vex/interfaces/vex-route.interface';

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
      {
        path: 'dashboards/analytics',
        loadComponent: () =>
          import(
            './pages/dashboards/dashboard-analytics/dashboard-analytics.component'
          ).then((m) => m.DashboardAnalyticsComponent)
      },

 {
        path: 'scolarite',
        children: [
          {
            path: 'etudiants',
            loadComponent: () =>
              import('./pages/scolarite/etudiants/etudiant-list/etudiant-list.component')
                .then(m => m.EtudiantListComponent)
          },
          {
            path: 'etudiants/new',
            loadComponent: () =>
              import('./pages/scolarite/etudiants/etudiant-form/etudiant-form.component')
                .then(m => m.EtudiantFormComponent)
          },

          {
            path: 'classes',
            loadComponent: () =>
              import('./pages/scolarite/classes/classe-list/classe-list.component')
                .then(m => m.ClasseListComponent)
          },
          {
            path: 'classes/new',
            loadComponent: () =>
              import('./pages/scolarite/classes/classe-form/classe-form.component')
                .then(m => m.ClasseFormComponent)
          },

          {
            path: 'inscriptions',
            loadComponent: () =>
              import('./pages/scolarite/inscriptions/inscription-list/inscription-list.component')
                .then(m => m.InscriptionListComponent)
          },
          {
            path: 'inscriptions/new',
            loadComponent: () =>
              import('./pages/scolarite/inscriptions/inscription-form/inscription-form.component')
                .then(m => m.InscriptionFormComponent)
          },

          {
            path: 'filieres',
            loadComponent: () =>
              import('./pages/scolarite/filieres/filiere-list/filiere-list.component')
                .then(m => m.FiliereListComponent)
          }
        ]
      },

      // ============================
      // 🎓 PEDAGOGIE
      // ============================
      {
        path: 'pedagogie',
        children: [
          {
            path: 'matieres',
            loadComponent: () =>
              import('./pages/pedagogie/matieres/matiere-list/matiere-list.component')
                .then(m => m.MatiereListComponent)
          },

          {
            path: 'affectations',
            loadComponent: () =>
              import('./pages/pedagogie/affectations/affectation-list/affectation-list.component')
                .then(m => m.AffectationListComponent)
          },

          {
            path: 'seances',
            loadComponent: () =>
              import('./pages/pedagogie/seances/seance-list/seance-list.component')
                .then(m => m.SeanceListComponent)
          },

          // 🔥 APPEL (clé du système)
          {
            path: 'appels/:seanceId',
            loadComponent: () =>
              import('./pages/pedagogie/appels/appel-seance/appel-seance.component')
                .then(m => m.AppelSeanceComponent)
          },

          {
            path: 'notes',
            loadComponent: () =>
              import('./pages/pedagogie/notes/note-list/note-list.component')
                .then(m => m.NoteListComponent)
          },

          {
            path: 'bulletins',
            loadComponent: () =>
              import('./pages/pedagogie/bulletins/bulletin-list/bulletin-list.component')
                .then(m => m.BulletinListComponent)
          }
        ]
      },

      // ============================
      // 💰 FINANCE
      // ============================
      {
        path: 'finance',
        children: [
          {
            path: 'paiements',
            loadComponent: () =>
              import('./pages/finance/paiements/paiement-list/paiement-list.component')
                .then(m => m.PaiementListComponent)
          }
        ]
      },

      // ============================
      // 👤 UTILISATEURS
      // ============================
      {
        path: 'utilisateurs',
        children: [
          {
            path: 'parents',
            loadComponent: () =>
              import('./pages/utilisateurs/parents/parent-list/parent-list.component')
                .then(m => m.ParentListComponent)
          },
          {
            path: 'parents/new',
            loadComponent: () =>
              import('./pages/utilisateurs/parents/parent-form/parent-form.component')
                .then(m => m.ParentFormComponent)
          },

          {
            path: 'enseignants',
            loadComponent: () =>
              import('./pages/utilisateurs/enseignants/enseignant-list/enseignant-list.component')
                .then(m => m.EnseignantListComponent)
          },
          {
            path: 'enseignants/new',
            loadComponent: () =>
              import('./pages/utilisateurs/enseignants/enseignant-form/enseignant-form.component')
                .then(m => m.EnseignantFormComponent)
          }
        ]
      },

      // 404
      {
        path: '**',
        loadComponent: () =>
          import('./pages/pages/errors/error-404/error-404.component')
            .then(m => m.Error404Component)
      }
    ]
  }
];