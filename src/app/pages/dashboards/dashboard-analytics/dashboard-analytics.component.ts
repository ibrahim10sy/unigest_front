import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableColumn } from '@vex/interfaces/table-column.interface';
import { WidgetLargeChartComponent } from '../components/widgets/widget-large-chart/widget-large-chart.component';
import { WidgetLargeGoalChartComponent } from '../components/widgets/widget-large-goal-chart/widget-large-goal-chart.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DashboardService } from 'src/app/services/DashboardService.service';
import { DashboardStatsDTO } from 'src/app/models/DashboardStatsDTO';
import { SeanceDTO } from 'src/app/models/SeanceDTO';
import { SeanceService } from 'src/app/services/seance.service';

@Component({
  selector: 'vex-dashboard-analytics',
  templateUrl: './dashboard-analytics.component.html',
  styleUrls: ['./dashboard-analytics.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatButtonModule,
    MatIconModule,
    WidgetLargeGoalChartComponent,
    WidgetLargeChartComponent
  ]
})
export class DashboardComponent implements OnInit {

  today: string = new Date().toLocaleDateString('fr-FR', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  });

  tableColumns: TableColumn<SeanceDTO>[] = [];
  tableData: SeanceDTO[] = [];
  stats?: DashboardStatsDTO;

  yearLabels: string[] = [];
  salesSeries: number[] = [];
  userSessionsSeries: any[] = [];
  currentYearLabel = '';

  constructor(
    private dashboardService: DashboardService,
    private seanceService: SeanceService
  ) {}

  ngOnInit(): void {
    this.loadDashboard();
    this.loadSeances();
  }

  loadSeances() {
    this.seanceService.getSeancesDuJour().subscribe({
      next: (res: any) => {
        this.tableData = res;
      }
    });
  }

  loadDashboard() {
    this.dashboardService.getStats().subscribe({
      next: (res) => {
        this.stats = res;

        this.salesSeries = res.evolutionInscriptions.map(
          (item: any) => item.nombreInscriptions
        );

        this.userSessionsSeries = [
          {
            name: 'Inscriptions',
            data: res.evolutionInscriptions.map(
              (item: any) => item.nombreInscriptions
            )
          }
        ];

        this.yearLabels = res.evolutionInscriptions.map(
          (item: any) => item.annee
        );

        const current = res.evolutionInscriptions[res.evolutionInscriptions.length - 1];
        this.currentYearLabel = current?.annee || '';
      }
    });
  }
}
