import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {
  ApexOptions,
  VexChartComponent
} from '@vex/components/vex-chart/vex-chart.component';
import { defaultChartOptions } from '@vex/utils/default-chart-options';
import { createDateArray } from '@vex/utils/create-date-array';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DashboardStatsDTO } from 'src/app/models/DashboardStatsDTO';
import { DashboardService } from 'src/app/services/DashboardService.service';
import { VexBreadcrumbsComponent } from '@vex/components/vex-breadcrumbs/vex-breadcrumbs.component';
import { WidgetAssistantComponent } from '../widget-assistant/widget-assistant.component';
import { WidgetQuickLineChartComponent } from '../widget-quick-line-chart/widget-quick-line-chart.component';
import { WidgetQuickValueCenterComponent } from '../widget-quick-value-center/widget-quick-value-center.component';
import { WidgetLargeChartComponent } from '../widget-large-chart/widget-large-chart.component';
import { VexSecondaryToolbarComponent } from '@vex/components/vex-secondary-toolbar/vex-secondary-toolbar.component';
import { WidgetTableComponent } from '../widget-table/widget-table.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'vex-widget-large-goal-chart',
  templateUrl: './widget-large-goal-chart.component.html',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, VexChartComponent,   VexSecondaryToolbarComponent,
      VexBreadcrumbsComponent,
      MatButtonModule,
      MatIconModule,
      CommonModule,
      WidgetAssistantComponent,
      WidgetQuickLineChartComponent,
      WidgetLargeGoalChartComponent,
      WidgetQuickValueCenterComponent,
      WidgetLargeChartComponent,
      WidgetTableComponent]
})
export class WidgetLargeGoalChartComponent implements OnChanges {

  @Input() total: string = '0';
  @Input() series: number[] = [];
  @Input() labels: string[] = [];
  @Input() currentYearLabel: string = '';

  options!: ApexOptions;

  chartSeries: any[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.chartSeries = [
      {
        name: 'Inscriptions',
        data: this.series
      }
    ];

    this.options = {
      chart: {
        type: 'line',
        height: 300,
        toolbar: {
          show: false
        }
      },
      stroke: {
        curve: 'smooth'
      },
      dataLabels: {
        enabled: false
      },
      xaxis: {
        categories: this.labels
      },
      yaxis: {
        min: 0
      }
    };
  }
}