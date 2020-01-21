import { Injectable } from '@angular/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4core from '@amcharts/amcharts4/core';

export enum ChartsNames {
  shootingSkillsChart = 'shootingSkillsChart',
  fireSkillsChart = 'fireSkillsChart',
  physicalRateChartMetaData = 'physicalRateChartMetaData'
}


@Injectable({
  providedIn: 'root'
})
export class DashboardChartsService {


  private chartShootingSkills: am4charts.XYChart;
  private chartFireDrillAchievement: am4charts.XYChart;
  private chartPhysicalRate: am4charts.XYChart;


  categories: ChartMetaData = {
    shootingChartMetaData: {
      chart: this.chartShootingSkills,
      name: ChartsNames.shootingSkillsChart,
      categories: ['RealTime', 'Simulation'],
      mainColor: '#009DA0'
    },

    fireChartMetaData: {
      chart: this.chartFireDrillAchievement,
      name: ChartsNames.fireSkillsChart,
      categories: ['RealTime', 'Simulation'],
      mainColor: '#d67e5e'
    },
    physicalRateChartMetaData: {
      chart: this.chartPhysicalRate,
      name: ChartsNames.physicalRateChartMetaData,
      categories: ['RealTime', 'Simulation'],
      mainColor: '#d15467'
    }
  };



  constructor() {

  }

  initCharts() {
    Object.keys(this.categories).forEach(chartName => {
      this.createChart(this.categories[chartName]);
    });
  }

  createChart(chartMetaData: ChartMetaDataItem) {
    chartMetaData.chart = am4core.create(chartMetaData.name, am4charts.XYChart);
    const chart = chartMetaData.chart;
    chart.data = [{
      category: chartMetaData.categories[0],
      value: 30,
      valueOffset: 70
    }, {
      category: chartMetaData.categories[1],
      simulationValue: 55,
      simulationOffset: 45
    }];


    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'category';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.grid.template.stroke = am4core.color('#ffffff');
    categoryAxis.renderer.grid.template.strokeOpacity = 1;
    categoryAxis.renderer.grid.template.strokeWidth = 2;
    categoryAxis.renderer.labels.template.fill = am4core.color('#fff');
    categoryAxis.renderer.line.strokeOpacity = 1;
    categoryAxis.renderer.line.strokeWidth = 2;
    categoryAxis.renderer.line.stroke = am4core.color("#fff");



    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.strokeOpacity = 0;
    valueAxis.calculateTotals = true;
    valueAxis.renderer.labels.template.fill = am4core.color('#fff');
    valueAxis.max = 100;
    valueAxis.renderer.line.strokeOpacity = 1;
    valueAxis.renderer.line.strokeWidth = 2;
    valueAxis.renderer.line.stroke = am4core.color('#fff');


    // Second value axis
    const valueAxis2 = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis2.renderer.opposite = true;
    valueAxis2.renderer.grid.template.strokeOpacity = 0;
    valueAxis2.calculateTotals = true;
    valueAxis2.renderer.labels.template.fill = am4core.color('#fff');
    valueAxis2.max = 100;
    valueAxis2.renderer.line.strokeOpacity = 1;
    valueAxis2.renderer.line.strokeWidth = 2;
    valueAxis2.renderer.line.stroke = am4core.color('#fff');






    this.createSeries(chart, 'value', false, chartMetaData.mainColor);
    this.createSeries(chart, 'valueOffset', true, chartMetaData.mainColor);
    this.createSeries(chart, 'simulationValue', false, chartMetaData.mainColor);
    this.createSeries(chart, 'simulationOffset', true, chartMetaData.mainColor);

  }

  createSeries(chart, valueY, withOpacity, mainColor) {
    const series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = valueY;
    series.stacked = true;
    series.dataFields.categoryX = 'category';
    series.columns.template.fill = am4core.color(mainColor);
    series.columns.template.strokeWidth = 0;
    series.columns.template.strokeOpacity = 0;
    series.columns.template.strokeOpacity = 0;
    series.columns.template.width = am4core.percent(70);

    if (withOpacity) {
      series.columns.template.fillOpacity = 0.6;
    }
    const bullet = series.bullets.push(new am4charts.LabelBullet());
    bullet.interactionsEnabled = false;
    bullet.label.text = '{valueY.totalPercent.formatNumber(\'#.00\')}%';
    bullet.label.fill = am4core.color('#ffffff');
    bullet.locationY = 0.5;
  }

}




export interface ChartMetaData {
  shootingChartMetaData: ChartMetaDataItem;
  fireChartMetaData: ChartMetaDataItem;
  physicalRateChartMetaData: ChartMetaDataItem;
}
export interface ChartMetaDataItem {
  chart: am4charts.XYChart;
  name: string;
  categories: string[];
  mainColor: string;
}
