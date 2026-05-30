// import {
//   Component,
//   OnInit
// } from '@angular/core';

// import { CommonModule } from '@angular/common';

// import { MatIconModule } from '@angular/material/icon';
// import { MatButtonModule } from '@angular/material/button';

// import { MatDialog } from '@angular/material/dialog';

// import Swal from 'sweetalert2';

// import { EmploiDuTempsService } from 'src/app/services/emploi-du-temps.service';

// import { EmploiDuTempsFormComponent } from '../emploi-du-temps-form/emploi-du-temps-form.component';

// import {
//   VexPageLayoutComponent
// } from '@vex/components/vex-page-layout/vex-page-layout.component';

// import {
//   VexPageLayoutHeaderDirective
// } from '@vex/components/vex-page-layout/vex-page-layout-header.directive';

// import {
//   VexPageLayoutContentDirective
// } from '@vex/components/vex-page-layout/vex-page-layout-content.directive';

// import {
//   VexBreadcrumbsComponent
// } from '@vex/components/vex-breadcrumbs/vex-breadcrumbs.component';

// @Component({
//   selector: 'vex-emploi-du-temps-calendar',
//   standalone: true,

//   imports: [
//     CommonModule,
//     MatIconModule,
//     MatButtonModule,

//     VexPageLayoutComponent,
//     VexPageLayoutHeaderDirective,
//     VexPageLayoutContentDirective,
//     VexBreadcrumbsComponent
//   ],

//   templateUrl: './emploi-du-temps-calendar.component.html',
//   styleUrl: './emploi-du-temps-calendar.component.scss'
// })
// export class EmploiDuTempsCalendarComponent
//   implements OnInit {

//   emplois: any[] = [];

//   jours = [
//     'LUNDI',
//     'MARDI',
//     'MERCREDI',
//     'JEUDI',
//     'VENDREDI',
//     'SAMEDI'
//   ];

//   horaires = [
//     {
//       debut: '08:00',
//       fin: '10:00'
//     },
//     {
//       debut: '10:00',
//       fin: '12:00'
//     },
//     {
//       debut: '12:00',
//       fin: '14:00'
//     },
//     {
//       debut: '14:00',
//       fin: '16:00'
//     },
//     {
//       debut: '16:00',
//       fin: '18:00'
//     }
//   ];

//   constructor(
//     private service: EmploiDuTempsService,
//     private dialog: MatDialog
//   ) {}

//   ngOnInit(): void {

//     this.refresh();
//   }

//   refresh(): void {

//     this.service.getAll()
//       .subscribe({

//         next: (res:any) => {

//           this.emplois = res;
//         },

//         error: () => {

//           Swal.fire(
//             'Erreur',
//             'Impossible de charger les emplois',
//             'error'
//           );
//         }
//       });
//   }

//   getCours(
//     jour: string,
//     debut: string,
//     fin: string
//   ) {

//     return this.emplois.find(e => {

//       return (
//         e.jour === jour &&
//         e.heureDebut === debut &&
//         e.heureFin === fin
//       );
//     });
//   }

//   ajouter(): void {

//     this.dialog.open(
//       EmploiDuTempsFormComponent,
//       {
//         width: '750px'
//       }
//     ).afterClosed()
//       .subscribe(result => {

//         if (result) {

//           this.refresh();
//         }
//       });
//   }

//   modifier(cours: any): void {

//     this.dialog.open(
//       EmploiDuTempsFormComponent,
//       {
//         width: '750px',
//         data: cours
//       }
//     ).afterClosed()
//       .subscribe(result => {

//         if (result) {

//           this.refresh();
//         }
//       });
//   }

//   supprimer(id: number): void {

//     Swal.fire({

//       title: 'Supprimer ?',

//       text: 'Cette action est irréversible',

//       icon: 'warning',

//       showCancelButton: true,

//       confirmButtonText: 'Supprimer',

//       cancelButtonText: 'Annuler'

//     }).then(result => {

//       if (result.isConfirmed) {

//         this.service.delete(id)
//           .subscribe({

//             next: () => {

//               Swal.fire(
//                 'Succès',
//                 'Cours supprimé',
//                 'success'
//               );

//               this.refresh();
//             },

//             error: () => {

//               Swal.fire(
//                 'Erreur',
//                 'Suppression impossible',
//                 'error'
//               );
//             }
//           });
//       }
//     });
//   }

//   exporterPdf(classeId: number): void {

//     this.service.exportPdf(classeId)
//       .subscribe((blob:any) => {

//         const url =
//           window.URL.createObjectURL(blob);

//         window.open(url);
//       });
//   }
// }
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

import Swal from 'sweetalert2';

import { EmploiDuTempsService } from 'src/app/services/emploi-du-temps.service';
import { ClasseService } from 'src/app/services/classe.service';

import { EmploiDuTempsFormComponent } from '../emploi-du-temps-form/emploi-du-temps-form.component';

import { VexPageLayoutComponent } from '@vex/components/vex-page-layout/vex-page-layout.component';
import { VexPageLayoutContentDirective } from '@vex/components/vex-page-layout/vex-page-layout-content.directive';
import { VexPageLayoutHeaderDirective } from '@vex/components/vex-page-layout/vex-page-layout-header.directive';
import { VexBreadcrumbsComponent } from '@vex/components/vex-breadcrumbs/vex-breadcrumbs.component';

@Component({
  selector: 'vex-emploi-du-temps-calendar',
  standalone: true,
  templateUrl: './emploi-du-temps-calendar.component.html',
  styleUrls: ['./emploi-du-temps-calendar.component.scss'],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,

    VexPageLayoutComponent,
    VexPageLayoutContentDirective,
    VexPageLayoutHeaderDirective,
    VexBreadcrumbsComponent
  ]
})

export class EmploiDuTempsCalendarComponent
  implements OnInit {

  emplois: any[] = [];

  classes: any[] = [];

  classeId!: number;

  jours = [
    'LUNDI',
    'MARDI',
    'MERCREDI',
    'JEUDI',
    'VENDREDI',
    'SAMEDI'
  ];

  horaires = [
    { debut: '08:00', fin: '10:00' },
    { debut: '10:00', fin: '12:00' },
    { debut: '12:00', fin: '14:00' },
    { debut: '14:00', fin: '16:00' },
    { debut: '16:00', fin: '18:00' }
  ];

   isPause(h: any): boolean {

  return this.emplois.some(e =>
    e.type === 'RECREATION' &&
    e.heureDebut === h.debut &&
    e.heureFin === h.fin
  );

}

  constructor(
    private service: EmploiDuTempsService,
    private classeService: ClasseService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {

    this.loadClasses();
  }

  loadClasses() {

    this.classeService.getAllClasses()
      .subscribe((res:any) => {

        this.classes = res;

        if (this.classes.length > 0) {

          this.classeId = this.classes[0].id;

          this.loadEmplois();
        }
      });
  }

  loadEmplois() {

  if (!this.classeId) return;

  this.service
    .getByClasse(this.classeId)
    .subscribe((res:any) => {

      console.log("EMPLOIS =>", res);

      this.emplois = res;

      this.generateHoraires();
    });
}

generateHoraires() {

  const map = new Map();

  this.emplois.forEach((e:any) => {

    const debut =
      e.heureDebut?.substring(0, 5);

    const fin =
      e.heureFin?.substring(0, 5);

    const key = `${debut}-${fin}`;

    if (!map.has(key)) {

      map.set(key, {
        debut,
        fin
      });
    }
  });

  this.horaires = Array
    .from(map.values())
    .sort((a:any, b:any) =>
      a.debut.localeCompare(b.debut)
    );

  console.log(
    "HORAIRES =>",
    this.horaires
  );
}

  onClasseChange() {

    this.loadEmplois();
  }

  getCours(
  jour: string,
  debut: string,
  fin: string
) {

  return this.emplois.find((e:any) => {

    const heureDebut =
      e.heureDebut?.substring(0, 5);

    const heureFin =
      e.heureFin?.substring(0, 5);

    return (
      e.jour === jour &&
      heureDebut === debut &&
      heureFin === fin
    );
  });
}

  ajouter() {

    this.dialog.open(
      EmploiDuTempsFormComponent,
      {
        width: '700px',
        data: {
          classe: this.classeId
        }
      }
    ).afterClosed()
      .subscribe((val:any) => {

        if (val) {

          this.loadEmplois();
        }
      });
  }

  modifier(row:any) {

    this.dialog.open(
      EmploiDuTempsFormComponent,
      {
        width: '700px',
        data: row
      }
    ).afterClosed()
      .subscribe((val:any) => {

        if (val) {

          this.loadEmplois();
        }
      });
  }

  supprimer(id:number) {

    Swal.fire({
      title: 'Supprimer ce cours ?',
      icon: 'warning',
      showCancelButton: true
    }).then(r => {

      if (r.isConfirmed) {

        this.service.delete(id)
          .subscribe(() => {

            Swal.fire(
              'Supprimé',
              '',
              'success'
            );

            this.loadEmplois();
          });
      }
    });
  }

  exporterPdf() {

    this.service.exportPdf(this.classeId)
      .subscribe((blob:any) => {

        const url =
          window.URL.createObjectURL(blob);

        window.open(url);
      });
  }
}