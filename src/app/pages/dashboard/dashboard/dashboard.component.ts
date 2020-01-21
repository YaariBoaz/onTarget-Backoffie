import { DashboardChartsService } from './dashboard-charts.service';
import { Component, OnInit, NgZone, AfterViewInit, OnDestroy } from '@angular/core';
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


  private chart2: am4charts.XYChart;
  gridApi: any;
  gridColumnApi: any;
  rowSelection: any;

  suggestions = {
    fireDrills: [{
      name: 'Swagle',
      bullets: 8,
      exposeTime: '7 sec',
      cancelTime: '15 sec'
    }, {
      name: 'Swagle',
      bullets: 8,
      exposeTime: '7 sec',
      cancelTime: '15 sec'
    }]
  }

  readiness = [
    { name: 'Evi Cohen', rank: '1st Sgt', ready: 95 },
    { name: 'Omer Yaari', rank: '1st Sgt', ready: 78 },
    { name: 'Alon Katvan', rank: '1st Sgt', ready: 73 },
    { name: 'Boaz Yaari', rank: '1st Sgt', ready: 91 },
    { name: 'Shani Cohen', rank: '1st Sgt', ready: 99 },

  ]



  constructor(private zone: NgZone, private dashboardChartsService: DashboardChartsService) {
    this.rowSelection = 'single';
  }


  columnDefs = [
    { headerName: 'Make', field: 'make' },
    { headerName: 'Model', field: 'model' },
    { headerName: 'Price', field: 'price' }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
  ];




  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      this.dashboardChartsService.initCharts();
    });
  }



  ngOnDestroy() {
    // this.zone.runOutsideAngular(() => {
    //   if (this.chart) {
    //     this.chart.dispose();
    //   }
    // });
  }

  ngOnInit(): void {
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    this.gridApi.sizeColumnsToFit();
  }

}



