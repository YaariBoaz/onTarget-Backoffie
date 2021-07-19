import {Injectable} from '@angular/core';
import * as am4charts from "@amcharts/amcharts4/charts";
import * as am4core from "@amcharts/amcharts4/core";
import {LabelBullet} from "@amcharts/amcharts4/charts";
import {ColorSet} from "@amcharts/amcharts4/core";
import {ChartsNames} from "../personal-dashboard-charts.service";

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  chartHitRatioShootingRange;

  constructor() {

  }

  initCharts() {
    this.createHitRatioShootingRange();
    this.createSteps();
    this.createSleep();
    this.createhitRatioFireDrill();
    this.createStress();
  }

  createHitRatioShootingRange() {
    var chart = am4core.create("chartHitRatioShootingRange", am4charts.PieChart);

    var colorSet = new am4core.ColorSet();
    colorSet.list = [am4core.color("#1a7883"),
      am4core.color("#b9b9b9"),].map((color) => {
      // @ts-ignore
      return new am4core.color(color);
    });

    chart.colors.list = [];
// Add data
    chart.data = [{
      "country": "Hit",
      "litres": 70,
      "color": "#ff0021"
    }, {
      "country": "Miss",
      "litres": 30
    }];

// Add and configure Series
    const pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.innerRadius = am4core.percent(90);
    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.disabled = true;
    pieSeries.colors = colorSet;
    let label = pieSeries.createChild(am4core.Label);
    label.text = "70%";
    label.horizontalCenter = "middle";
    label.verticalCenter = "middle";
    label.fontSize = 30;
    label.fill = am4core.color("#b9b9b9");
    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;
    chart.legend.disabled = true;

  }

  createSteps() {

    const chartMetaData = {
      name: ChartsNames.physicalRateChartMetaData,
      categories: ['DAILY', 'AVERAGE'],
      mainColor: '#d67e5e',
      secondColor: '#d3d3d3'
    }

    const chart = am4core.create("stepsChart", am4charts.XYChart);
    chart.data = [{
      category: chartMetaData.categories[0],
      dailySteps: 10,
      dailyStepsOffset: 2.1
    }, {
      category: chartMetaData.categories[1],
      avgteps: 14,
     }];


    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'category';
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.grid.template.stroke = am4core.color('#ffffff');
    categoryAxis.renderer.grid.template.strokeOpacity = 1;
    categoryAxis.renderer.grid.template.strokeWidth = 2;
    categoryAxis.renderer.labels.template.fill = am4core.color('#fff');
    categoryAxis.renderer.line.strokeOpacity = 1;
    categoryAxis.renderer.line.strokeWidth = 1;
    categoryAxis.renderer.line.stroke = am4core.color("#fff");


    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.grid.template.strokeOpacity = 0;
    valueAxis.calculateTotals = true;
    valueAxis.renderer.labels.template.fill = am4core.color('#fff');
    valueAxis.renderer.labels.template.fontSize = 8;
    valueAxis.max = 14;
    valueAxis.fill = am4core.color("#845EC2");
    valueAxis.renderer.line.strokeOpacity = 1;
    valueAxis.renderer.line.strokeWidth = 1;
    valueAxis.renderer.line.stroke = am4core.color('#fff');


    this.createSeries(chart, 'dailySteps', false, chartMetaData.mainColor);
    this.createSeries(chart, 'dailyStepsOffset', true, chartMetaData.secondColor);
    this.createSeries(chart, 'avgteps', false, chartMetaData.mainColor);
    this.createSeries(chart, 'avgtepsOffset', true, chartMetaData.secondColor);
  }


  createSleep() {

    var chart = am4core.create("chartSleep", am4charts.PieChart);

    var colorSet = new am4core.ColorSet();
    colorSet.list = [am4core.color("#ED5669"), am4core.color("#A94F63"),
      am4core.color("#D9D9D9"),].map((color) => {
      // @ts-ignore
      return new am4core.color(color);
    });

    chart.colors.list = [];
// Add data
    chart.data = [{
      "country": "Deep",
      "litres": 501.9,
      "color": "#ff0021"
    }, {
      "country": "Light",
      "litres": 301.9
    },
      {
        "country": "REM",
        "litres": 301.9
      }];

// Add and configure Series
    const pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.innerRadius = am4core.percent(90);
    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.disabled = true;
    pieSeries.colors = colorSet;
    let label = pieSeries.createChild(am4core.Label);
    label.text = "6h 23m";
    label.horizontalCenter = "middle";
    label.verticalCenter = "middle";
    label.fontSize = 30;
    label.fill = am4core.color("#b9b9b9");
    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;
    pieSeries.legendSettings.labelText = "[{color}]{name} [{color}][/]";
    chart.legend.labels.template.fill = am4core.color("#f00");
    chart.legend.valueLabels.template.fill = am4core.color("#fff");


  }

  createhitRatioFireDrill() {
    var chart = am4core.create("chartHitRatioFireDrill", am4charts.PieChart);

    var colorSet = new am4core.ColorSet();
    colorSet.list = [am4core.color("#A96654"),
      am4core.color("#DFB79B"),].map((color) => {
      // @ts-ignore
      return new am4core.color(color);
    });

    chart.colors.list = [];
// Add data
    chart.data = [{
      "country": "Hit",
      "litres": 48,
      "color": "#ff0021"
    }, {
      "country": "Miss",
      "litres": 52
    }];

// Add and configure Series
    const pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.innerRadius = am4core.percent(90);
    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.disabled = true;
    pieSeries.colors = colorSet;
    let label = pieSeries.createChild(am4core.Label);
    label.text = "48%";
    label.horizontalCenter = "middle";
    label.verticalCenter = "middle";
    label.fontSize = 40;
    label.fill = am4core.color("#b9b9b9");
    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;
    chart.legend.disabled = true;

  }

  createRunning() {

  }

  createStress() {
    var chart = am4core.create("chartStress", am4charts.PieChart);

    var colorSet = new am4core.ColorSet();
    chart.colors.list = [];
    colorSet.list = [
      am4core.color("#ED7D31"),
      am4core.color("#FFC000"),
      am4core.color("#70AD47"),
      am4core.color("#9E480E")
    ].map((color) => {
      // @ts-ignore
      return new am4core.color(color);
    });
// Add data
    chart.data = [{
      "country": "Rest",
      "litres": 501.9,
    }, {
      "country": "Low Stress",
      "litres": 301.9
    },
      {
        "country": "Medium Stress",
        "litres": 301.9
      }, {
        "country": "High Stress",
        "litres": 301.9
      }];

// Add and configure Series
    const pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";
    pieSeries.innerRadius = am4core.percent(90);
    pieSeries.ticks.template.disabled = true;
    pieSeries.labels.template.disabled = true;
    pieSeries.colors = colorSet;
    let label = pieSeries.createChild(am4core.Label);
    label.text = "26";
    label.horizontalCenter = "middle";
    label.verticalCenter = "middle";
    label.fontSize = 40;
    label.fill = am4core.color("#b9b9b9");
    chart.legend = new am4charts.Legend();
    chart.legend.position = "right";
    pieSeries.labels.template.disabled = true;
    pieSeries.ticks.template.disabled = true;
    pieSeries.legendSettings.labelText = "[{color}]{name} [{color}][/]";
    chart.legend.valueLabels.template.fill = am4core.color("#fff");


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
    series.columns.template.width = am4core.percent(30);

    if (withOpacity) {
      series.columns.template.fillOpacity = 0.6;
    }
    const bullet: LabelBullet = series.bullets.push(new am4charts.LabelBullet());
    bullet.interactionsEnabled = false;
    bullet.label.text = '{valueY}';
    bullet.label.fill = am4core.color('#ffffff');
    bullet.locationY = 0.5;
    bullet.label.fontSize = 10;
  }


}
