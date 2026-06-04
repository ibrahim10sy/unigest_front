import {
  Component,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
  OnInit,
  LOCALE_ID
} from '@angular/core';
import { Subject } from 'rxjs';
import {
  CalendarA11y,
  CalendarCommonModule,
  CalendarDateFormatter,
  CalendarDayModule,
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarEventTitleFormatter,
  CalendarModule,
  CalendarMonthModule,
  CalendarUtils,
  CalendarView,
  CalendarWeekModule,
  DateAdapter
} from 'angular-calendar';
import { addDays, addHours, endOfDay, startOfDay } from 'date-fns';
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
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { CustomEventTitleFormatter } from 'src/app/services/CustomEventTitleFormatter.service';
             // ← adapter le chemin

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
  // providers: [
  //   { provide: DateAdapter, useFactory: adapterFactory },
  //   CalendarEventTitleFormatter,
  //   CalendarDateFormatter,
  //   CalendarUtils,
  //   CalendarA11y
  // ]
})
export class CalendarComponent implements OnInit {

  // ── Angular Calendar ──────────────────────────────────────
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  refresh: Subject<any> = new Subject();
  events: CalendarEvent[] = [];
  activeDayIsOpen = false;

  // ── Données métier ────────────────────────────────────────
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

  // ── Chargement ────────────────────────────────────────────

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

    this.emploiService.getByClasse(this.classeId).subscribe({
      next: (res: any[]) => {
        this.events = this.mapEmploisToEvents(res);
        this.refresh.next(null);
        this.loading = false;
      },
      error: () => {
        this.snackbar.open('Erreur lors du chargement des emplois du temps', 'Fermer', { duration: 3000 });
        this.loading = false;
      }
    });
  }

  onClasseChange(): void {
    this.activeDayIsOpen = false;
    this.loadEmplois();
  }

  // Appelé par les boutons prev/next du calendrier
  onViewDateChange(): void {
    this.loadEmplois();
  }

  // ── Mapping emploi → CalendarEvent ───────────────────────

  private mapEmploisToEvents(emplois: any[]): CalendarEvent[] {
    const joursMap: Record<string, number> = {
      LUNDI: 1, MARDI: 2, MERCREDI: 3,
      JEUDI: 4, VENDREDI: 5, SAMEDI: 6, DIMANCHE: 7
    };

    const lundi = this.getMondayOf(this.viewDate);
    const events: CalendarEvent[] = [];

    for (const e of emplois) {
      // Un emploi peut couvrir plusieurs jours (jours: JourSemaine[])
      const jours: string[] = Array.isArray(e.jours) ? e.jours : [e.jour];

      for (const jour of jours) {
        const jourOffset = joursMap[jour] ?? 1;
        const date = new Date(lundi);
        date.setDate(lundi.getDate() + (jourOffset - 1));

        const [hDebut, mDebut] = (e.heureDebut ?? '08:00').split(':').map(Number);
        const [hFin,   mFin  ] = (e.heureFin  ?? '10:00').split(':').map(Number);

        const start = new Date(date);
        start.setHours(hDebut, mDebut, 0, 0);

        const end = new Date(date);
        end.setHours(hFin, mFin, 0, 0);

        events.push({
          id: `${e.id}-${jour}`,
          title: `${e.matiere?.nom ?? ''} — ${e.enseignant?.nom ?? ''} ${e.enseignant?.prenom ?? ''}`,
          start,
          end,
          color: {
            primary:   e.couleur ?? '#4f46e5',
            secondary: this.lightenColor(e.couleur ?? '#4f46e5')
          },
          draggable: false,
          resizable: { beforeStart: false, afterEnd: false },
          meta: e
        } as CalendarEvent);
      }
    }

    return events;
  }

  private getMondayOf(date: Date): Date {
    const d = new Date(date);
    const day = d.getDay();
    const diff = day === 0 ? -6 : 1 - day;
    d.setDate(d.getDate() + diff);
    return d;
  }

  /** Génère une couleur secondaire (fond clair) depuis la couleur primaire */
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

  // ── Interactions calendrier ───────────────────────────────

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    const same = date.toDateString() === this.viewDate.toDateString();
    this.activeDayIsOpen = !((same && this.activeDayIsOpen) || events.length === 0);
    this.viewDate = date;
  }

  eventTimesChanged({ event, newStart, newEnd }: CalendarEventTimesChangedEvent): void {
    // Lecture seule ici — pas de drag & drop pour les emplois du temps
  }

  handleEvent(action: string, event: CalendarEvent): void {
    // Ouvre le détail / modification via CalendarEditComponent existant
    const dialogRef = this.dialog.open(CalendarEditComponent, {
      data: event.meta ?? event
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        this.snackbar.open('Cours mis à jour : ' + event.title, 'OK', { duration: 2000 });
        this.loadEmplois(); // recharge depuis l'API
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