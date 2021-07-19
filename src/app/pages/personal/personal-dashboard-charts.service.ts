import {Injectable} from '@angular/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4core from "@amcharts/amcharts4/core";
import {LabelBullet} from "@amcharts/amcharts4/charts";
import {BehaviorSubject} from "rxjs";

export enum ChartsNames {
  shootingSkillsChart = 'shootingSkillsChart',
  fireSkillsChart = 'fireSkillsChart',
  physicalRateChartMetaData = 'physicalRateChartMetaData',
  personalTrainingMetaData = 'personalTrainingMetaData'
}

@Injectable({
  providedIn: 'root'
})
export class PersonalDashboardChartsService {

  notifySecondTab$ = new BehaviorSubject(null);
  private chartShootingSkills: am4charts.XYChart;
  private chartFireDrillAchievement: am4charts.XYChart;
  private chartPhysicalRate: am4charts.XYChart;
  private personalTrainingChart: am4charts.XYChart;


  categories: ChartMetaData = {
    shootingChartMetaData: {
      chart: this.chartShootingSkills,
      name: ChartsNames.shootingSkillsChart,
      categories: ['FIRE DRILL', 'SHOOTING RANGE'],
      mainColor: '#009DA0',
      simulationColor: '#d67e5e'
    },

    fireChartMetaData: {
      chart: this.chartFireDrillAchievement,
      name: ChartsNames.fireSkillsChart,
      categories: ['RealTime', 'Simulation'],
      mainColor: '#009DA0',
      simulationColor: '#d67e5e'

    },
    physicalRateChartMetaData: {
      chart: this.chartPhysicalRate,
      name: ChartsNames.physicalRateChartMetaData,
      categories: ['COMBAT FITNESS', 'STRESS', 'SLEEP', 'DISTANCE[KM]'],
      mainColor: '#d15467',
      simulationColor: '#d67e5e'
    },
    personalTrainingMetaData: {
      chart: this.personalTrainingChart,
      name: ChartsNames.personalTrainingMetaData,
      categories: ['COMBAT FITNESS', 'STRESS', 'Running'],
      mainColor: '#009DA0',
      simulationColor: '#d67e5e'
    }
  };
  shooting = 60;
  shootingBla = 40;


  constructor() {

  }


  updateShooting() {
    this.shooting += 1;
    this.shootingBla -= 1
  }

  initCharts() {
    this.createChart(this.categories['shootingChartMetaData']);
    this.createPhysicalRateChart(this.categories['physicalRateChartMetaData']);
    this.createPeronslTrainingChart(this.categories['personalTrainingMetaData']);
  }

  createChart(chartMetaData: ChartMetaDataItem) {
    chartMetaData.chart = am4core.create(chartMetaData.name, am4charts.XYChart);
    const chart = chartMetaData.chart;
    chart.data = [{
      category: chartMetaData.categories[0],
      value: this.shooting,
      valueOffset: this.shootingBla
    }, {
      category: chartMetaData.categories[1],
      simulationValue: 35,
      simulationOffset: 65
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
    valueAxis.renderer.labels.template.fontSize = 8;
    valueAxis.max = 100;
    valueAxis.fill = am4core.color("#845EC2");
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
    this.createSeries(chart, 'simulationValue', false, chartMetaData.simulationColor);
    this.createSeries(chart, 'simulationOffset', true, chartMetaData.simulationColor);

  }

  createPhysicalRateChart(chartMetaData: ChartMetaDataItem) {

    chartMetaData.chart = am4core.create(chartMetaData.name, am4charts.XYChart);
    const chart = chartMetaData.chart;
    chart.data = [{
      category: chartMetaData.categories[0],
      combatFitnesvalue: 9.1,
      combatFitnesvalueOffset: 0.9
    }, {
      category: chartMetaData.categories[1],
      stressValue: 3.4,
      stressOffset: 6.6
    }, {
      category: chartMetaData.categories[2],
      sleepValue: 6.2,
      sleepOffset: 0.8
    }, {
      category: chartMetaData.categories[3],
      sleepValue: 13.5,
      sleepOffset: 1.5
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
    valueAxis.renderer.labels.template.fontSize = 8;
    valueAxis.max = 15;
    valueAxis.fill = am4core.color("#845EC2");
    valueAxis.renderer.line.strokeOpacity = 1;
    valueAxis.renderer.line.strokeWidth = 2;
    valueAxis.renderer.line.stroke = am4core.color('#fff');
    valueAxis.renderer.labels.template.disabled = true;

    this.createSeries(chart, 'combatFitnesvalue', false, chartMetaData.mainColor, true);
    this.createSeries(chart, 'combatFitnesvalueOffset', true, chartMetaData.mainColor, true);
    this.createSeries(chart, 'stressValue', false, chartMetaData.mainColor, true);
    this.createSeries(chart, 'stressOffset', true, chartMetaData.mainColor, true);
    this.createSeries(chart, 'sleepValue', false, chartMetaData.mainColor, true);
    this.createSeries(chart, 'sleepOffset', true, chartMetaData.mainColor, true);
    this.createSeries(chart, 'distanceValue', false, chartMetaData.mainColor, true);
    this.createSeries(chart, 'distanceOffset', true, chartMetaData.mainColor, true);

  }

  createSeries(chart, valueY, withOpacity, mainColor, isWide?) {
    const series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueY = valueY;
    series.stacked = true;
    series.dataFields.categoryX = 'category';
    series.columns.template.fill = am4core.color(mainColor);
    series.columns.template.strokeWidth = 0;
    series.columns.template.strokeOpacity = 0;
    series.columns.template.strokeOpacity = 0;
    if (isWide) {
      series.columns.template.width = am4core.percent(40);
    } else {

      series.columns.template.width = am4core.percent(20);
    }

    if (withOpacity) {
      series.columns.template.fillOpacity = 0.6;
    }
    const bullet: LabelBullet = series.bullets.push(new am4charts.LabelBullet());
    bullet.interactionsEnabled = false;
    bullet.label.text = '{valueY}';
    bullet.label.fill = am4core.color('#ffffff');
    bullet.locationY = 0.5;
    bullet.label.fontSize = 15;
  }


  createPeronslTrainingChart(chartMetaData: ChartMetaDataItem) {
    chartMetaData.chart = am4core.create(chartMetaData.name, am4charts.XYChart);
    chartMetaData.chart.padding(0, 40, 0, 40);

    var categoryAxis = chartMetaData.chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "network";
    categoryAxis.renderer.inversed = true;
    categoryAxis.renderer.labels.template.fill = am4core.color("#fff");

    var valueAxis = chartMetaData.chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.renderer.labels.template.fill = am4core.color("#fff");

    valueAxis.renderer.labels.template.adapter.add("text", function (text) {
      return text + "%";
    })

    var series = chartMetaData.chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryY = "network";
    series.dataFields.valueX = "MAU";
    series.tooltipText = "{valueX.value}"
    series.columns.template.strokeOpacity = 0;
    series.columns.template.propertyFields.fill = "barColor";


    chartMetaData.chart.data = [
      {
        "network": "Shooting",
        "MAU": 90,
        "barColor": "#d67e5e",

      },
      {

        "network": "Fire Drill",
        "MAU": 80,
        "barColor": "#009DA0",
      },
      {
        "network": "Physical Training",
        "MAU": 70,
        "barColor": "#d15467",

      },
    ]
  }

  notifySecondTab(wasClicked) {
    this.notifySecondTab$.next(wasClicked);
  }
}


export interface ChartMetaData {
  shootingChartMetaData: ChartMetaDataItem;
  fireChartMetaData: ChartMetaDataItem;
  physicalRateChartMetaData: ChartMetaDataItem;
  personalTrainingMetaData: ChartMetaDataItem;
}

export interface ChartMetaDataItem {
  chart: am4charts.XYChart;
  name: string;
  categories: string[];
  mainColor: string;
  simulationColor: string;
}


