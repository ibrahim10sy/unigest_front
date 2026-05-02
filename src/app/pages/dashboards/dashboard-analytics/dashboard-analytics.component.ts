import { Component, Input, OnInit } from '@angular/core';
import { defaultChartOptions } from '@vex/utils/default-chart-options';
import {
  Order,
  tableSalesData
} from '../../../../static-data/table-sales-data';
import { TableColumn } from '@vex/interfaces/table-column.interface';
import { WidgetTableComponent } from '../components/widgets/widget-table/widget-table.component';
import { WidgetLargeChartComponent } from '../components/widgets/widget-large-chart/widget-large-chart.component';
import { WidgetQuickValueCenterComponent } from '../components/widgets/widget-quick-value-center/widget-quick-value-center.component';
import { WidgetLargeGoalChartComponent } from '../components/widgets/widget-large-goal-chart/widget-large-goal-chart.component';
import { WidgetQuickLineChartComponent } from '../components/widgets/widget-quick-line-chart/widget-quick-line-chart.component';
import { WidgetAssistantComponent } from '../components/widgets/widget-assistant/widget-assistant.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { VexBreadcrumbsComponent } from '@vex/components/vex-breadcrumbs/vex-breadcrumbs.component';
import { VexSecondaryToolbarComponent } from '@vex/components/vex-secondary-toolbar/vex-secondary-toolbar.component';
import { DashboardService } from 'src/app/services/DashboardService.service';
import { DashboardStatsDTO } from 'src/app/models/DashboardStatsDTO';
import { ApexOptions } from '@vex/components/vex-chart/vex-chart.component';
import { SeanceDTO } from 'src/app/models/SeanceDTO';
import { Seance } from 'src/app/models/Seance';
import { SeanceService } from 'src/app/services/seance.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'vex-dashboard-analytics',
  templateUrl: './dashboard-analytics.component.html',
  styleUrls: ['./dashboard-analytics.component.scss'],
  standalone: true,
  imports: [
    VexSecondaryToolbarComponent,
    VexBreadcrumbsComponent,
    MatButtonModule,
    MatIconModule,
    WidgetAssistantComponent,
    WidgetQuickLineChartComponent,
    WidgetLargeGoalChartComponent,
    WidgetQuickValueCenterComponent,
    WidgetLargeChartComponent,
    WidgetTableComponent
  ]
})
export class DashboardComponent implements OnInit {

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
    next: (res:any) => {
      this.tableData = res;

      this.tableColumns = [
        { label: 'Professeur', property: 'professeur', type: 'text' },
        { label: 'Matière', property: 'matiere', type: 'text' },
        { label: 'Classe', property: 'classe', type: 'text' },
        { label: 'Filière', property: 'filiere', type: 'text' },
        { label: 'Début', property: 'heureDebut', type: 'text' },
        { label: 'Fin', property: 'heureFin', type: 'text' },
        {
          label: 'Statut',
          property: 'statut',
          type: 'badge'
        }
      ];
    }
  });
}
  loadDashboard() {
    this.dashboardService.getStats().subscribe({
      next: (res) => {
        console.log('Dashboard stats:', res);

        this.stats = res;

        // graphique principal
        this.salesSeries = res.evolutionInscriptions.map(
          item => item.nombreInscriptions
        );

        // graphique secondaire
        this.userSessionsSeries = [
          {
            name: 'Inscriptions',
            data: res.evolutionInscriptions.map(
              item => item.nombreInscriptions
            )
          }
        ];

        // labels années
        this.yearLabels = res.evolutionInscriptions.map(
          item => item.annee
        );

        // année courante
        const current =
          res.evolutionInscriptions[
            res.evolutionInscriptions.length - 1
          ];

        this.currentYearLabel = current?.annee || '';
      }
    });
  }
}