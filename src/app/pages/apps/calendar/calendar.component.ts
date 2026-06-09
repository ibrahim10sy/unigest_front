import {
  Component,
  ViewEncapsulation,
  OnInit,
  LOCALE_ID
} from '@angular/core';
import { Subject, forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  CalendarA11y,
  CalendarCommonModule,
  CalendarDateFormatter,
  CalendarDayModule,
  CalendarEvent,
  CalendarEventTimesChangedEvent,
  CalendarEventTitleFormatter,
  CalendarModule,
  CalendarMonthModule,
  CalendarUtils,
  CalendarView,
  CalendarWeekModule,
  DateAdapter
} from 'angular-calendar';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CalendarEditComponent } from './calendar-edit/calendar-edit.component';
import { NgSwitch, NgSwitchCase, CommonModule } from '@angular/common';
import { VexScrollbarComponent } from '@vex/components/vex-scrollbar/vex-scrollbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { EmploiDuTempsService } from 'src/app/services/emploi-du-temps.service';
import { ClasseService } from 'src/app/services/classe.service';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CustomEventTitleFormatter } from 'src/app/services/CustomEventTitleFormatter.service';

@Component({
  selector: 'vex-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
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
    VexScrollbarComponent,
    NgSwitch,
    NgSwitchCase,
    MatProgressSpinnerModule
  ],
  providers: [
    { provide: DateAdapter, useFactory: adapterFactory },
    { provide: LOCALE_ID, useValue: 'fr' },
    { provide: CalendarEventTitleFormatter, useClass: CustomEventTitleFormatter },
    CalendarDateFormatter,
    CalendarUtils,
    CalendarA11y
  ]
})
export class CalendarComponent implements OnInit {
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  refresh: Subject<any> = new Subject();
  events: CalendarEvent[] = [];
  activeDayIsOpen = false;

  classes: any[] = [];
  classeId!: number;
  loading = false;

  constructor(
    private dialog: MatDialog,
    private snackbar: MatSnackBar,
    private emploiService: EmploiDuTempsService,
    private classeService: ClasseService
  ) {}

  ngOnInit(): void {
    this.loadClasses();
  }

  loadClasses(): void {
    this.classeService.getAllClasses().subscribe((res: any[]) => {
      this.classes = res;
      if (this.classes.length > 0) {
        this.classeId = this.classes[0].id;
        this.loadEmplois();
      }
    });
  }

  loadEmplois(): void {
    if (!this.classeId) return;
    this.loading = true;

    // ── Charge en parallèle :
    //    1. les cours de la classe
    //    2. tous les emplois (pour récupérer pauses/récréations sans classe)
    // Si votre API expose un endpoint dédié aux pauses, remplacez getAll() par celui-ci.
    forkJoin({
      parClasse: this.emploiService.getByClasse(this.classeId).pipe(catchError(() => of([]))),
      tous:      this.emploiService.getAll().pipe(catchError(() => of([])))
    }).subscribe({
      next: ({ parClasse, tous }) => {
        // Garde les cours de la classe + toutes les pauses/récréations (classe null ou non)
        const pausesEtRecreations = (tous as any[]).filter(
          e => e.type === 'PAUSE' || e.type === 'RECREATION'
        );

        // Fusionne sans doublons (par id)
        const ids = new Set((parClasse as any[]).map((e: any) => e.id));
        const merged = [
          ...(parClasse as any[]),
          ...pausesEtRecreations.filter((e: any) => !ids.has(e.id))
        ];

        this.events = this.mapEmploisToEvents(merged);
        this.refresh.next(null);
        this.loading = false;
      },
      error: () => {
        this.snackbar.open('Erreur lors du chargement', 'Fermer', { duration: 3000 });
        this.loading = false;
      }
    });
  }

  onClasseChange(): void {
    this.activeDayIsOpen = false;
    this.loadEmplois();
  }

  onViewDateChange(): void {
    this.loadEmplois();
  }

  // ── Helpers type ─────────────────────────────────────────

  isRecreation(emploi: any): boolean {
    return emploi?.type === 'RECREATION' || emploi?.type === 'PAUSE';
  }

  private getTitreEmploi(e: any): string {
    switch (e.type) {
      case 'PAUSE':
        return `Pause${e.description ? ' – ' + e.description : ''}`;
      case 'RECREATION':
        return `Récréation${e.description ? ' – ' + e.description : ''}`;
      default:
        const matiere    = e.matiere?.nom ?? '';
        const enseignant = e.enseignant
          ? `${e.enseignant.nom} ${e.enseignant.prenom}`.trim()
          : '';
        return [matiere, enseignant].filter(Boolean).join(' — ');
    }
  }

  private getCouleurEmploi(e: any): { primary: string; secondary: string } {
    if (e.type === 'RECREATION') {
      return { primary: '#10b981', secondary: 'rgba(16,185,129,0.15)' }; // vert
    }
    if (e.type === 'PAUSE') {
      return { primary: '#f59e0b', secondary: 'rgba(245,158,11,0.15)' }; // amber
    }
    const primary = e.couleur ?? '#4f46e5';
    return { primary, secondary: this.lightenColor(primary) };
  }

  // ── Mapping emploi → CalendarEvent ───────────────────────

  private readonly JOURS_OFFSET: Record<string, number> = {
    LUNDI: 0, MARDI: 1, MERCREDI: 2,
    JEUDI: 3, VENDREDI: 4, SAMEDI: 5, DIMANCHE: 6
  };

  private mapEmploisToEvents(emplois: any[]): CalendarEvent[] {
    const lundi = this.getMondayOf(this.viewDate);
    const events: CalendarEvent[] = [];

    for (const e of emplois) {
      // Normalise jours : supporte tableau "jours" et chaîne "jour"
      const jours: string[] = Array.isArray(e.jours) && e.jours.length
        ? e.jours
        : e.jour
          ? [e.jour]
          : [];

      if (jours.length === 0) continue; // entrée sans jour → ignorée

      const [hDebut, mDebut] = (e.heureDebut ?? '08:00').split(':').map(Number);
      const [hFin,   mFin  ] = (e.heureFin   ?? '10:00').split(':').map(Number);

      for (const jour of jours) {
        const offset = this.JOURS_OFFSET[jour] ?? 0;
        const date   = new Date(lundi);
        date.setDate(lundi.getDate() + offset);

        const start = new Date(date);
        start.setHours(hDebut, mDebut, 0, 0);
        const end = new Date(date);
        end.setHours(hFin, mFin, 0, 0);

        events.push({
          id:       `${e.id}-${jour}`,
          title:    this.getTitreEmploi(e),
          start,
          end,
          color:    this.getCouleurEmploi(e),
          draggable:  false,
          resizable:  { beforeStart: false, afterEnd: false },
          meta:     { ...e, _jour: jour }
        } as CalendarEvent);
      }
    }

    return events;
  }

  private getMondayOf(date: Date): Date {
    const d   = new Date(date);
    const day = d.getDay();
    d.setDate(d.getDate() + (day === 0 ? -6 : 1 - day));
    d.setHours(0, 0, 0, 0);
    return d;
  }

  private lightenColor(hex: string): string {
    try {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return `rgba(${r},${g},${b},0.15)`;
    } catch {
      return '#e0e7ff';
    }
  }

  // ── Interactions ─────────────────────────────────────────

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    const same = date.toDateString() === this.viewDate.toDateString();
    this.activeDayIsOpen = !((same && this.activeDayIsOpen) || events.length === 0);
    this.viewDate = date;
  }

  eventTimesChanged(_: CalendarEventTimesChangedEvent): void {}

  handleEvent(action: string, event: CalendarEvent): void {
    if (this.isRecreation(event.meta)) {
      this.snackbar.open(
        `${event.title}  ·  ${event.meta.heureDebut} – ${event.meta.heureFin}`,
        'OK',
        { duration: 3000 }
      );
      return;
    }

    this.dialog
      .open(CalendarEditComponent, { data: event.meta ?? event })
      .afterClosed()
      .subscribe((result: any) => {
        if (result) {
          this.snackbar.open('Cours mis à jour : ' + event.title, 'OK', { duration: 2000 });
          this.loadEmplois();
        }
      });
  }

  setView(view: CalendarView): void {
    this.view = view;
    this.refresh.next(null);
  }

  closeOpenMonthViewDay(): void {
    this.activeDayIsOpen = false;
  }
}