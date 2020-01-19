import {Component, OnInit, NgZone, AfterViewInit, OnDestroy} from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {

  private chart: am4charts.XYChart;
  private chart1: am4charts.XYChart;
  private chart2: am4charts.XYChart;

  constructor(private zone: NgZone) {
  }


  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      const chart = am4core.create('chartdiv', am4charts.XYChart);
      const chart1 = am4core.create('chartdiv1', am4charts.XYChart);
      const chart2 = am4core.create('chartdiv2', am4charts.XYChart);

      chart.paddingRight = 20;
      chart1.paddingRight = 20;
      chart2.paddingRight = 20;

      const data = [];
      let visits = 10;
      for (let i = 1; i < 366; i++) {
        visits += Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
        data.push({date: new Date(2018, 0, i), name: 'name' + i, value: visits});
      }

      chart.data = data;
      chart1.data = data;
      chart2.data = data;

      const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      const dateAxis1 = chart1.xAxes.push(new am4charts.DateAxis());
      const dateAxis2 = chart2.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.location = 0;
      dateAxis1.renderer.grid.template.location = 0;
      dateAxis2.renderer.grid.template.location = 0;

      const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      const valueAxis1 = chart1.yAxes.push(new am4charts.ValueAxis());
      const valueAxis2 = chart2.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.minWidth = 35;


      const series = chart.series.push(new am4charts.LineSeries());
      const series1 = chart1.series.push(new am4charts.LineSeries());
      const series2 = chart2.series.push(new am4charts.LineSeries());

      series.dataFields.dateX = 'date';
      series1.dataFields.dateX = 'date';
      series2.dataFields.dateX = 'date';

      series.dataFields.valueY = 'value';
      series1.dataFields.valueY = 'value';
      series2.dataFields.valueY = 'value';

      series.tooltipText = '{valueY.value}';
      series1.tooltipText = '{valueY.value}';
      series2.tooltipText = '{valueY.value}';


      chart.cursor = new am4charts.XYCursor();
      chart1.cursor = new am4charts.XYCursor();
      chart2.cursor = new am4charts.XYCursor();

      this.chart = chart;
      this.chart1 = chart1;
      this.chart2 = chart2;
    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }

  ngOnInit(): void {
  }

}
