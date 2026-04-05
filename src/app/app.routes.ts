import { AuthGuard } from './guards/auth.guard';
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
        canActivate: [AuthGuard], // Ajoute le guard ici
        path: 'dashboards/analytics',
        loadComponent: () =>
          import(
            './pages/dashboards/dashboard-analytics/dashboard-analytics.component'
          ).then((m) => m.DashboardAnalyticsComponent)
      },

 {
        path: 'scolarite',
        canActivate: [AuthGuard], // Ajoute le guard ici
        children: [
          {
            path: 'etudiants',
            loadComponent: () =>
              import('./pages/scolarite/etudiants/etudiant-list/etudiant-list.component')
                .then(m => m.EtudiantListComponent)
          },
           {
            path: 'aio-table',
            loadComponent: () =>
              import('./pages/apps/aio-table/aio-table.component').then(
                (m) => m.AioTableComponent
              ),
            data: {
              toolbarShadowEnabled: false
            }
          },
          {canActivate: [AuthGuard], // Ajoute le guard ici
            path: 'etudiants/new',
            loadComponent: () =>
              import('./pages/scolarite/etudiants/etudiant-form/etudiant-form.component')
                .then(m => m.EtudiantFormComponent)
          },

          {
            canActivate: [AuthGuard], // Ajoute le guard ici
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
            canActivate: [AuthGuard], // Ajoute le guard ici
            path: 'inscriptions',
            loadComponent: () =>
              import('./pages/scolarite/inscriptions/inscription-list/inscription-list.component')
                .then(m => m.InscriptionListComponent)
          },
          {
            canActivate: [AuthGuard], // Ajoute le guard ici
            path: 'inscriptions/new',
            loadComponent: () =>
              import('./pages/scolarite/inscriptions/inscription-form/inscription-form.component')
                .then(m => m.InscriptionFormComponent)
          },

          {
            canActivate: [AuthGuard], // Ajoute le guard ici
            path: 'filieres',
            loadComponent: () =>
              import('./pages/scolarite/filieres/filiere-list/filiere-list.component')
                .then(m => m.FiliereListComponent)
          },
          {
            canActivate: [AuthGuard], // Ajoute le guard ici
            path: 'niveau',
            loadComponent: () =>
              import('./pages/scolarite/niveau/niveau-list/niveau-list.component')
                .then(m => m.NiveauListComponent)
          },
          {
            canActivate: [AuthGuard], // Ajoute le guard ici
            path: 'annee-scolaire',
            loadComponent: () =>
              import('./pages/scolarite/annee-scolaire/annee-scolaire-liste/annee-scolaire-liste.component')
                .then(m => m.AnneeScolaireListeComponent)
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
            canActivate: [AuthGuard], // Ajoute le guard ici
            path: 'matieres',
            loadComponent: () =>
              import('./pages/pedagogie/matieres/matiere-list/matiere-list.component')
                .then(m => m.MatiereListComponent)
          },

          {
            canActivate: [AuthGuard], // Ajoute le guard ici
            path: 'affectations',
            loadComponent: () =>
              import('./pages/pedagogie/affectations/affectation-list/affectation-list.component')
                .then(m => m.AffectationListComponent)
          },

          {
            canActivate: [AuthGuard], // Ajoute le guard ici
            path: 'seances',
            loadComponent: () =>
              import('./pages/pedagogie/seances/seance-list/seance-list.component')
                .then(m => m.SeanceListComponent)
          },

          // 🔥 APPEL (clé du système)
          {
            canActivate: [AuthGuard], // Ajoute le guard ici
            path: 'appels/:seanceId',
            loadComponent: () =>
              import('./pages/pedagogie/appels/appel-seance/appel-seance.component')
                .then(m => m.AppelSeanceComponent)
          },

          {
            canActivate: [AuthGuard], // Ajoute le guard ici
            path: 'notes',
            loadComponent: () =>
              import('./pages/pedagogie/notes/note-list/note-list.component')
                .then(m => m.NoteListComponent)
          },

          {
            canActivate: [AuthGuard], // Ajoute le guard ici
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
            canActivate: [AuthGuard], // Ajoute le guard ici
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
        canActivate: [AuthGuard], // Ajoute le guard ici
        path: 'utilisateurs',
        children: [
          {
            path: 'parents',
            loadComponent: () =>
              import('./pages/utilisateurs/parents/parent-list/parent-list.component')
                .then(m => m.ParentListComponent)
          },
          {
            canActivate: [AuthGuard], // Ajoute le guard ici
            path: 'parents/new',
            loadComponent: () =>
              import('./pages/utilisateurs/parents/parent-form/parent-form.component')
                .then(m => m.ParentFormComponent)
          },

          {
            canActivate: [AuthGuard], // Ajoute le guard ici
            path: 'enseignants',
            loadComponent: () =>
              import('./pages/utilisateurs/enseignants/enseignant-list/enseignant-list.component')
                .then(m => m.EnseignantListComponent)
          },
          {
            canActivate: [AuthGuard], // Ajoute le guard ici
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