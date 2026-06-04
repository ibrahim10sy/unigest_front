import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

import {
  CalendarView,
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarModule,
  CalendarCommonModule,
  CalendarMonthModule,
  CalendarWeekModule,
  CalendarDayModule,
  CalendarEventTitleFormatter,
  CalendarDateFormatter,
  CalendarUtils,
  CalendarA11y,
  DateAdapter
} from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

import Swal from 'sweetalert2';

import { EmploiDuTempsService } from 'src/app/services/emploi-du-temps.service';
import { ClasseService } from 'src/app/services/classe.service';
import { EmploiDuTempsFormComponent } from '../emploi-du-temps-form/emploi-du-temps-form.component';

import { VexPageLayoutComponent } from '@vex/components/vex-page-layout/vex-page-layout.component';
import { VexPageLayoutContentDirective } from '@vex/components/vex-page-layout/vex-page-layout-content.directive';
import { VexPageLayoutHeaderDirective } from '@vex/components/vex-page-layout/vex-page-layout-header.directive';
import { VexBreadcrumbsComponent } from '@vex/components/vex-breadcrumbs/vex-breadcrumbs.component';
import { VexScrollbarComponent } from '@vex/components/vex-scrollbar/vex-scrollbar.component';

@Component({
  selector: 'vex-emploi-du-temps-calendar',
  standalone: true,
  templateUrl: './emploi-du-temps-calendar.component.html',
  styleUrls: ['./emploi-du-temps-calendar.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useFactory: adapterFactory
    },
    CalendarEventTitleFormatter,
    CalendarDateFormatter,
    CalendarUtils,
    CalendarA11y
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSnackBarModule,

    CalendarCommonModule,
    CalendarMonthModule,
    CalendarWeekModule,
    CalendarDayModule,
    CalendarModule,

    VexPageLayoutComponent,
    VexPageLayoutContentDirective,
    VexPageLayoutHeaderDirective,
    VexBreadcrumbsComponent,
    VexScrollbarComponent
  ]
})
export class EmploiDuTempsCalendarComponent implements OnInit {

  // ── Angular Calendar ──────────────────────────────────────
  view: CalendarView = CalendarView.Week;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  refresh: Subject<any> = new Subject();
  events: CalendarEvent[] = [];
  activeDayIsOpen = false;

  // ── Données métier ────────────────────────────────────────
  classes: any[] = [];
  classeId!: number;

  constructor(
    private service: EmploiDuTempsService,
    private classeService: ClasseService,
    private dialog: MatDialog,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadClasses();
  }

  // ── Chargement ────────────────────────────────────────────

  loadClasses() {
    this.classeService.getAllClasses().subscribe((res: any) => {
      this.classes = res;
      if (this.classes.length > 0) {
        this.classeId = this.classes[0].id;
        this.loadEmplois();
      }
    });
  }

  loadEmplois() {
    if (!this.classeId) return;

    this.service.getByClasse(this.classeId).subscribe((res: any[]) => {
      this.events = this.mapEmploisToEvents(res);
      this.refresh.next(null);
    });
  }

  onClasseChange() {
    this.loadEmplois();
  }

  // ── Mapping emploi → CalendarEvent ───────────────────────

  private mapEmploisToEvents(emplois: any[]): CalendarEvent[] {
    // Jour de référence : lundi de la semaine affichée
    const joursMap: Record<string, number> = {
      LUNDI: 1, MARDI: 2, MERCREDI: 3,
      JEUDI: 4, VENDREDI: 5, SAMEDI: 6
    };

    return emplois.map(e => {
      const jourOffset = joursMap[e.jour] ?? 1;

      // Trouver le lundi de la semaine courante
      const lundi = this.getMondayOf(this.viewDate);
      const date = new Date(lundi);
      date.setDate(lundi.getDate() + (jourOffset - 1));

      const [hDebut, mDebut] = (e.heureDebut ?? '08:00').split(':').map(Number);
      const [hFin,   mFin  ] = (e.heureFin  ?? '10:00').split(':').map(Number);

      const start = new Date(date);
      start.setHours(hDebut, mDebut, 0, 0);

      const end = new Date(date);
      end.setHours(hFin, mFin, 0, 0);

      return {
        id:    e.id,
        title: `${e.matiere?.nom ?? ''} — ${e.enseignant?.nom ?? ''} ${e.enseignant?.prenom ?? ''}`,
        start,
        end,
        color: {
          primary:   e.couleur ?? '#4f46e5',
          secondary: e.couleur ?? '#e0e7ff'
        },
        meta: e   // garde les données brutes pour modifier/supprimer
      } as CalendarEvent;
    });
  }

  private getMondayOf(date: Date): Date {
    const d = new Date(date);
    const day = d.getDay(); // 0=dim, 1=lun …
    const diff = day === 0 ? -6 : 1 - day;
    d.setDate(d.getDate() + diff);
    return d;
  }

  // ── Interactions calendrier ───────────────────────────────

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    this.activeDayIsOpen = !(
      (this.isSameDay(this.viewDate, date) && this.activeDayIsOpen) ||
      events.length === 0
    );
    this.viewDate = date;
  }

  eventTimesChanged({ event, newStart, newEnd }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map(e =>
      e === event ? { ...event, start: newStart, end: newEnd! } : e
    );
  }

  handleEvent(action: string, event: CalendarEvent): void {
    // Clic sur un cours → ouvrir le formulaire de modification
    this.modifier(event.meta);
  }

  private isSameDay(a: Date, b: Date): boolean {
    return a.toDateString() === b.toDateString();
  }

  // ── CRUD ──────────────────────────────────────────────────

  ajouter() {
    this.dialog.open(EmploiDuTempsFormComponent, {
      width: '700px',
      data: { classe: this.classeId }
    }).afterClosed().subscribe((val: any) => {
      if (val) this.loadEmplois();
    });
  }

  modifier(row: any) {
    this.dialog.open(EmploiDuTempsFormComponent, {
      width: '700px',
      data: row
    }).afterClosed().subscribe((val: any) => {
      if (val) this.loadEmplois();
    });
  }

  supprimer(id: number) {
    Swal.fire({
      title: 'Supprimer ce cours ?',
      icon: 'warning',
      showCancelButton: true
    }).then(r => {
      if (r.isConfirmed) {
        this.service.delete(id).subscribe(() => {
          Swal.fire('Supprimé', '', 'success');
          this.loadEmplois();
        });
      }
    });
  }

  exporterPdf() {
    this.service.exportPdf(this.classeId).subscribe((blob: any) => {
      const url = window.URL.createObjectURL(blob);
      window.open(url);
    });
  }
}