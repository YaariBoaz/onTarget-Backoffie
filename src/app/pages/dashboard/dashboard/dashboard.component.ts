import {DashboardChartsService} from './dashboard-charts.service';
import {Component, OnInit, NgZone, AfterViewInit, OnDestroy} from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import {Router} from "@angular/router";

am4core.useTheme(am4themes_animated);


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit, AfterViewInit, OnDestroy {


  gridApi: any;
  gridColumnApi: any;
  rowSelection: any;


  suggestions = {
    range: [
      {
        name: 'Zero Sight',
        range: '40m',
        bullets: '3',
        imgUrl: '../../../../assets/icons/Zero.png'
      },
      {
        name: 'Rapid Fire',
        range: '40m',
        bullets: '10',
        minimumScore: '48',
        imgUrl: '../../../../assets/icons/Rapped Fire.png'
      },
      {
        name: 'Hostage',
        range: '100m',
        bullets: '5',
        minimumScore: '36',
        imgUrl: '../../../../assets/icons/Hostage.png'
      }
    ],
    fireDrills: [{
      name: 'Urban',
      time: 'On',
      bullets: 10,
      exposeTime: '7 sec',
      cancelTime: '15 sec',
      imgUrl: '../../../../assets/icons/urban.png'
    }, {
      name: 'Swivel',
      bullets: 12,
      range: '600m',
      splitBullets: 2,
      exposeTime: '7 sec',
      imgUrl: '../../../../assets/icons/Swivel.png'

    }],
    physicalTraining: [
      {
        name: 'Run',
        type: 'Run',
        distance: '10km',
        time: '50m',
        avgPace: '5m/km',
        imgUrl: '../../../../assets/icons/run.png'

      },
      {
        name: 'Hi Beat',
        type: 'Crossfit',
        hiPulse:'170 max',
        restingPuls: '120sec',
        imgUrl: '../../../../assets/icons/beat.png'

      },
      {
        name: 'Sprint',
        type: 'Run',
        distance: '700X3',
        hiPulse:'180 max',
        restingPuls: '120sec',
        imgUrl: '../../../../assets/icons/run.png'

      }
    ]
  }

  readiness = [
    {name: 'Evi Cohen', rank: '1st Sgt', ready: 95, imgUrl: '../../../../assets/icons/Evi_Cohen.png'},
    {name: 'Omer Yaari', rank: '1st Sgt', ready: 78, imgUrl: '../../../../assets/icons/Omer_yaari.png'},
    {name: 'Alon Katvan', rank: '1st Sgt', ready: 80, imgUrl: '../../../../assets/icons/Alon_katvan.png'},
    {name: 'Boaz Yaari', rank: '1st Sgt', ready: 91, imgUrl: '../../../../assets/icons/Boaz_yaari.png'},
    {name: 'Shani Cohen', rank: '1st Sgt', ready: 99, imgUrl: '../../../../assets/icons/Shani_cohen.png'},

  ]


  constructor(private router: Router, private zone: NgZone, private dashboardChartsService: DashboardChartsService) {
    this.rowSelection = 'single';
  }


  columnDefs = [
    {headerName: 'Make', field: 'make'},
    {headerName: 'Model', field: 'model'},
    {headerName: 'Price', field: 'price'}
  ];

  rowData = [
    {make: 'Toyota', model: 'Celica', price: 35000},
    {make: 'Ford', model: 'Mondeo', price: 32000},
    {make: 'Porsche', model: 'Boxter', price: 72000}
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

  goToPersonalDetails() {
    this.router.navigateByUrl('personalInfo');

  }
}



