import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

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
import { AuthService } from 'src/app/services/auth.service';

import { VexPageLayoutComponent } from '@vex/components/vex-page-layout/vex-page-layout.component';
import { VexPageLayoutContentDirective } from '@vex/components/vex-page-layout/vex-page-layout-content.directive';
import { VexPageLayoutHeaderDirective } from '@vex/components/vex-page-layout/vex-page-layout-header.directive';
import { VexBreadcrumbsComponent } from '@vex/components/vex-breadcrumbs/vex-breadcrumbs.component';
import { VexScrollbarComponent } from '@vex/components/vex-scrollbar/vex-scrollbar.component';

/** Couleurs par type de créneau */
const TYPE_COLORS: Record<string, { primary: string; secondary: string }> = {
  COURS:      { primary: '#4f46e5', secondary: '#e0e7ff' }, // indigo
  PAUSE:      { primary: '#f59e0b', secondary: '#fef3c7' }, // amber
  RECREATION: { primary: '#10b981', secondary: '#d1fae5' }, // emerald
  DEFAULT:    { primary: '#6b7280', secondary: '#f3f4f6' }, // gray
};

@Component({
  selector: 'vex-emploi-du-temps-calendar',
  standalone: true,
  templateUrl: './emploi-du-temps-calendar.component.html',
  styleUrls: ['./emploi-du-temps-calendar.component.scss'],
  providers: [
    { provide: DateAdapter, useFactory: adapterFactory },
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
  isAdmin = false;

  constructor(
    private service: EmploiDuTempsService,
    private classeService: ClasseService,
    private dialog: MatDialog,
    private authService: AuthService
  ) {
    this.isAdmin = this.authService.isAdmin();
  }

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

  /**
   * Correspondance jour textuel → offset depuis lundi (0-based).
   * LUNDI = 0, MARDI = 1 … SAMEDI = 5
   */
  private readonly JOURS_OFFSET: Record<string, number> = {
    LUNDI: 0, MARDI: 1, MERCREDI: 2,
    JEUDI: 3, VENDREDI: 4, SAMEDI: 5
  };

  private mapEmploisToEvents(emplois: any[]): CalendarEvent[] {
    const lundi = this.getMondayOf(this.viewDate);
    const calendarEvents: CalendarEvent[] = [];

    for (const e of emplois) {
      // Normalise : supporte "jours" (tableau) et "jour" (chaîne) pour rétro-compatibilité
      const jours: string[] = Array.isArray(e.jours)
        ? e.jours
        : e.jour
          ? [e.jour]
          : [];

      const type: string = (e.type ?? 'DEFAULT').toUpperCase();
      const color = e.couleur
        ? { primary: e.couleur, secondary: e.couleur + '33' }
        : (TYPE_COLORS[type] ?? TYPE_COLORS['DEFAULT']);

      const [hDebut, mDebut] = (e.heureDebut ?? '08:00').split(':').map(Number);
      const [hFin,   mFin  ] = (e.heureFin  ?? '10:00').split(':').map(Number);

      // Construit le titre selon le type
      const title = this.buildTitle(e, type);

      // Un événement par jour de la liste
      for (const jour of jours) {
        const offset = this.JOURS_OFFSET[jour] ?? 0;

        const date = new Date(lundi);
        date.setDate(lundi.getDate() + offset);

        const start = new Date(date);
        start.setHours(hDebut, mDebut, 0, 0);

        const end = new Date(date);
        end.setHours(hFin, mFin, 0, 0);

        calendarEvents.push({
          id:    `${e.id}-${jour}`,
          title,
          start,
          end,
          color,
          resizable: { beforeStart: false, afterEnd: false },
          draggable:  false,
          meta: { ...e, _jourCourant: jour, _type: type }
        } as CalendarEvent);
      }
    }

    return calendarEvents;
  }

  /** Construit le libellé affiché dans la bulle du calendrier */
  private buildTitle(e: any, type: string): string {
    switch (type) {
      case 'COURS': {
        const matiere    = e.matiere?.nom ?? '';
        const enseignant = e.enseignant
          ? `${e.enseignant.nom} ${e.enseignant.prenom}`
          : '';
        return [matiere, enseignant].filter(Boolean).join(' — ');
      }
      case 'PAUSE':
        return `Pause${e.description ? ' – ' + e.description : ''}`;
      case 'RECREATION':
        return `Récréation${e.description ? ' – ' + e.description : ''}`;
      default:
        return e.description ?? type;
    }
  }

  private getMondayOf(date: Date): Date {
    const d = new Date(date);
    const day = d.getDay(); // 0=dim
    const diff = day === 0 ? -6 : 1 - day;
    d.setDate(d.getDate() + diff);
    d.setHours(0, 0, 0, 0);
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
    // Drag & drop désactivé côté data, on met juste à jour localement si besoin
    this.events = this.events.map(e =>
      e === event ? { ...event, start: newStart, end: newEnd! } : e
    );
  }

  handleEvent(_action: string, event: CalendarEvent): void {
    if (!this.isAdmin) return;
    const meta = event.meta;
    if (meta?._type === 'COURS') {
      this.modifier(meta);
    }
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
      title: 'Supprimer ce créneau ?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Supprimer',
      cancelButtonText: 'Annuler'
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