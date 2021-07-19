import {DashboardChartsService} from './dashboard-charts.service';
import {Component, OnInit, NgZone, AfterViewInit, OnDestroy, ChangeDetectorRef} from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import {ActivatedRoute, NavigationStart, Router} from "@angular/router";
import {ChartDialogComponent} from "./chart-dialog/chart-dialog.component";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {NgxSmartModalService} from "ngx-smart-modal";

am4core.useTheme(am4themes_animated);


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

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
        hiPulse: '170 max',
        restingPuls: '120sec',
        imgUrl: '../../../../assets/icons/beat.png'

      },
      {
        name: 'Sprint',
        type: 'Run',
        distance: '700X3',
        hiPulse: '180 max',
        restingPuls: '120sec',
        imgUrl: '../../../../assets/icons/run.png'

      }
    ]
  }


  readiness = [
    {name: 'Evi Cohen', rank: '1st Sgt', ready: 95, imgUrl: '../../../../assets/images/soldiers/avatar.png'},
    {name: 'Snir Cohen', rank: '1st Sgt', ready: 78, imgUrl: '../../../../assets/images/soldiers/avatar.png'},
    {name: 'Alon Katvan', rank: '1st Sgt', ready: 80, imgUrl: '../../../../assets/images/soldiers/avatar.png'},
    {name: 'Jack Brown', rank: '1st Sgt', ready: 91, imgUrl: '../../../../assets/images/soldiers/avatar.png'},
    {name: 'Brian Lee', rank: '1st Sgt', ready: 99, imgUrl: '../../../../assets/images/soldiers/avatar.png'},
  ]
  readiness_popup = []

  private dialogTitle: any;
  private dialogData = [];
  private isInit = true;


  constructor(
    private router: Router,
    private zone: NgZone,
    private ref: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute,
    private dashboardChartsService: DashboardChartsService,
    public ngxSmartModalService: NgxSmartModalService) {
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
  isChartClicked = false;

  fireDrillData = [
    {name: 'Evi Cohen', rank: '1st Sgt', ready: 95, imgUrl: '../../../../assets/images/evi.jpg'},
    {name: 'Omer Yaari', rank: '1st Sgt', ready: 78, imgUrl: '../../../../assets/images/snir.jpg'},
    {name: 'Alon Katvan', rank: '1st Sgt', ready: 80, imgUrl: '../../../../assets/images/alon.jpg'},
    {name: 'Jack Brown', rank: '1st Sgt', ready: 91, imgUrl: '../../../../assets/images/sol1.jpg'},
    {name: 'Brian Lee', rank: '1st Sgt', ready: 99, imgUrl: '../../../../assets/images/sol2.jpg'},

  ];
  combats = [
    {value: '0', viewValue: 'Shooting Range'},
    {value: '1', viewValue: 'Fire Drills'},
    {value: '2', viewValue: 'Physical Training'}
  ];


  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      this.dashboardChartsService.initCharts();
    });

    this.dashboardChartsService.$chartWasClicked.subscribe(data => {
      if (data) {
        if (data.target.properties.readerTitle.indexOf('FIRE DRILL') > -1) {
          this.openDialog(0, 'FIRE DRILL');
          console.log('Clicked: ' + 'FIRE DRILL');
        } else if (data.target.properties.readerTitle.indexOf('SHOOTING RANGE') > -1) {
          this.openDialog(1, 'SHOOTING RANGE');
          console.log('Clicked: ' + 'SHOOTING RANGE');
        } else if (data.target.properties.readerTitle.indexOf('COMBAT FITNESS') > -1) {
          this.openDialog(2, 'COMBAT FITNESS');
          console.log('Clicked: ' + 'COMBAT FITNESS');
        } else if (data.target.properties.readerTitle.indexOf('STRESS') > -1) {
          console.log('Clicked: ' + 'STRESS');
          this.openDialog(3, 'STRESS');
        } else if (data.target.properties.readerTitle.indexOf('SLEEP') > -1) {
          console.log('Clicked: ' + 'SLEEP');
          this.openDialog(4, 'SLEEP');
        } else if (data.target.properties.readerTitle.indexOf('DISTANCE') > -1) {
          console.log('Clicked: ' + 'DISTANCE');
          this.openDialog(5, 'DISTANCE');
        }
      }
    })
  }

  openDialog(num, title) {
    switch (num) {
      case 0:
        this.dialogTitle = title;
        this.dialogData = this.fireDrillData;
        this.readiness_popup = MOCK_DATA_POPUP['fire'];
        break;
      case 1:
        this.dialogTitle = title;
        this.dialogData = this.fireDrillData;
        this.readiness_popup = MOCK_DATA_POPUP['shooting'];
        break;
      case 2:
        this.dialogTitle = title;
        this.dialogData = this.fireDrillData;
        this.readiness_popup = MOCK_DATA_POPUP['combat'];
        break;
      case 3:
        this.dialogTitle = title;
        this.dialogData = this.fireDrillData;
        this.readiness_popup = MOCK_DATA_POPUP['combat'];
        break;
      case 4:
        this.dialogTitle = title;
        this.dialogData = this.fireDrillData;
        this.readiness_popup = MOCK_DATA_POPUP['sleep'];
        break;
      case 5:
        this.dialogTitle = title;
        this.dialogData = this.fireDrillData;
        this.readiness_popup = MOCK_DATA_POPUP['distance'];
        break;
    }
    if (!this.isInit) {
      this.isChartClicked = true;
    }
    if (this.isInit) {
      this.isInit = false;
    }
    this.ref.detectChanges();
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
    this.zone.run(() => {
      this.router.navigate(['/personalInfo']);
    })
  }

  closeDialog() {
    this.isChartClicked = false;
    this.ref.detectChanges();
  }

  onSelectedChange($event: Event) {
    this.readiness = MOCK_DATA[($event.target as any).value];
  }
}

const MOCK_DATA = {
  combat: [
    {
    "name": "Evi Cohen",
    "rank": "1st Sgt",
    "ready": 95,
    "imgUrl":'../../../../assets/images/soldiers/avatar.png'
  }, {
    "name": "Snir Cohen",
    "rank": "1st Sgt",
    "ready": 78,
    "imgUrl":'../../../../assets/images/soldiers/avatar.png'
  }, {
    "name": "Alon Katvan",
    "rank": "1st Sgt",
    "ready": 80,
    "imgUrl":'../../../../assets/images/soldiers/avatar.png'
  }, {
    "name": "Jack Brown",
    "rank": "1st Sgt",
    "ready": 91,
    "imgUrl":'../../../../assets/images/soldiers/avatar.png'
  }, {
    "name": "Brian Lee",
    "rank": "1st Sgt",
    "ready": 99,
    "imgUrl":'../../../../assets/images/soldiers/avatar.png'
  }
  ],
  shooting: [
    {
      "name": "Evi Cohen",
      "rank": "1st Sgt",
      "ready": 100,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    },
    {
      "name": "Snir Cohen",
      "rank": "1st Sgt",
      "ready": 75,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    }, {
      "name": "Alon Katvan",
      "rank": "1st Sgt",
      "ready": 90,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    }, {
      "name": "Jack Brown",
      "rank": "1st Sgt",
      "ready": 95,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    }, {
      "name": "Brian Lee",
      "rank": "1st Sgt",
      "ready": 98,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    }
  ],
  drill: [
    {
      "name": "Evi Cohen",
      "rank": "1st Sgt",
      "ready": 95,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    }, {
      "name": "Snir Cohen",
      "rank": "1st Sgt",
      "ready": 80,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    }, {
      "name": "Alon Katvan",
      "rank": "1st Sgt",
      "ready": 80,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    }, {
      "name": "Jack Brown",
      "rank": "1st Sgt",
      "ready": 90,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    }, {
      "name": "Brian Lee",
      "rank": "1st Sgt",
      "ready": 100,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    }
  ],
  physical: [
    {
      "name": "Evi Cohen",
      "rank": "1st Sgt",
      "ready": 90,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    }, {
      "name": "Snir Cohen",
      "rank": "1st Sgt",
      "ready": 80,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    }, {
      "name": "Alon Katvan",
      "rank": "1st Sgt",
      "ready": 70,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    }, {
      "name": "Jack Brown",
      "rank": "1st Sgt",
      "ready": 90,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    }, {
      "name": "Brian Lee",
      "rank": "1st Sgt",
      "ready": 99,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    }
  ]
}



const MOCK_DATA_POPUP = {
  sleep: [
    {
      "type": "sleep",
      "name": "Evi Cohen",
      "rank": "1st Sgt",
      "ready": 6.2,
      "max": 7,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    }, {
      "type": "sleep",
      "name": "Snir Cohen",
      "rank": "1st Sgt",
      "ready": 7.0,
      "max": 7,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    }, {
      "type": "sleep",
      "name": "Alon Katvan",
      "rank": "1st Sgt",
      "ready": 6.8,
      "max": 7,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    }, {
      "type": "sleep",
      "name": "Jack Brown",
      "rank": "1st Sgt",
      "ready": 6.2,
      "max": 7,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    },
    {
      "type": "sleep",
      "name": "Brian Lee",
      "rank": "1st Sgt",
      "ready": 6.8,
      "max": 7,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    }],
  combat: [
    {
      "type": "combat",
      "name": "Evi Cohen",
      "rank": "1st Sgt",
      "ready": 7.5,
      "offset": "2.5",
      "max": 10,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    }, {
      "type": "combat",
      "name": "Snir Cohen",
      "rank": "1st Sgt",
      "ready": 9.1,
      "max": 10,
      "offset": "0.9",
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    }, {
      "type": "combat",
      "name": "Alon Katvan",
      "max": 10,
      "rank": "1st Sgt",
      "ready": 8.4,
      "offset": "1.6",
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    }, {
      "type": "combat",
      "name": "Jack Brown",
      "rank": "1st Sgt",
      "ready": 8.9,
      "max": 10,
      "offset": "1.1",
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    },
    {
      "type": "combat",
      "name": "Brian Lee",
      "rank": "1st Sgt",
      "ready": 8.9,
      "max": 10,
      "offset": "1.1",
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    }
  ],
  distance: [
    {
      "type": "distance",
      "name": "Evi Cohen",
      "rank": "1st Sgt",
      "ready": 12.3,
      "offset": 1.7,
      "max": 14,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    },
    {
      "type": "distance",
      "name": "Snir Cohen",
      "rank": "1st Sgt",
      "ready": 13.4,
      "max": 14,
      "offset": 0.6,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    },
    {
      "type": "distance",
      "name": "Alon Katvan",
      "rank": "1st Sgt",
      "ready": 14.2,
      "offset": 0,
      "max": 14,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    },
    {
      "type": "distance",
      "name": "Jack Brown",
      "rank": "1st Sgt",
      "ready": 12.2,
      "offset": 2.8,
      "max": 14,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    },
    {
      "type": "distance",
      "name": "Jack Brown",
      "rank": "1st Sgt",
      "ready": 11,
      "offset": 3,
      "max": 14,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    }],
  stress: [
    {
      "type": "stress",
      "name": "Evi Cohen",
      "rank": "1st Sgt",
      "ready": 6.4,
      "offset": 3.6,
      "max": 10,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    },
    {
      "type": "stress",
      "name": "Snir Cohen",
      "rank": "1st Sgt",
      "ready": 3.4,
      "offset": 6.6,
      "max": 10,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    },
    {
      "type": "stress",
      "name": "Alon Katvan",
      "rank": "1st Sgt",
      "ready": 5.7,
      "offset": 10,
      "max": 10,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    },
    {
      "type": "stress",
      "name": "Jack Brown",
      "rank": "1st Sgt",
      "ready": 5.4,
      "offset": 4.5,
      "max": 10,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    },
    {
      "type": "stress",
      "name": "Brian Lee",
      "rank": "1st Sgt",
      "ready": 5.9,
      "offset": 4.1,
      "max": 10,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    }
  ],
  fire: [
    {
      "type": "fire",
      "name": "Evi Cohen Yaari",
      "rank": "1st Sgt",
      "ready": 80,
      "offset": 20,
      "max": 100,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    },
    {
      "name": "Snir Cohen ",
      "type": "fire",
      "rank": "1st Sgt",
      "ready": 80,
      "offset": 20,
      "max": 100,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    },
    {
      "name": "Evi Cohen",
      "rank": "1st Sgt",
      "type": "fire",
      "ready": 95,
      "offset": "5",
      "max": 100,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    },
    {
      "name": "Jack Brown",
      "rank": "1st Sgt",
      "ready": 90,
      "offset": 10,
      "type": "fire",
      "max": 100,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    },
    {
      "name": "Brian Lee",
      "rank": "1st Sgt",
      "ready": 100,
      "type": "fire",
      "offset": "0",
      "max": 100,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    }
  ],
  shooting: [
    {
      "type": "shooting",
      "name": "Evi Cohen",
      "rank": "1st Sgt",
      "ready": 75,
      "offset": 25,
      "max": 100,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    },
    {
      "type": "shooting",
      "name": "Snir Cohen",
      "rank": "1st Sgt",
      "ready": 90,
      "offset": 10,
      "max": 100,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    },
    {
      "type": "shooting",
      "name": "Alon Katvan",
      "rank": "1st Sgt",
      "ready": 10,
      "offset": 0,
      "max": 100,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    },
    {
      "type": "shooting",
      "name": "Jack Brown",
      "rank": "1st Sgt",
      "ready": 95,
      "offset": 5, "max": 100,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    },
    {
      "type": "shooting",
      "name": "Brian Lee",
      "rank": "1st Sgt",
      "ready": 98,
      "offset": 2,
      "max": 100,
      "imgUrl":'../../../../assets/images/soldiers/avatar.png'
    }
  ]
}
