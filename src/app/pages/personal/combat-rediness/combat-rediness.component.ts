import {Component, NgZone, OnInit} from '@angular/core';
import {Reccomendations} from "../personal.component";
import {PersonalDashboardChartsService} from "../personal-dashboard-charts.service";
import {DrilType} from "../../../shared/components/train-card/drill-card.component";
import {NgxUiLoaderService} from "ngx-ui-loader";

@Component({
  selector: 'app-combat-rediness',
  templateUrl: './combat-rediness.component.html',
  styleUrls: ['./combat-rediness.component.scss']
})
export class CombatRedinessComponent implements OnInit {


  reccomendations = {
    fireDrills: [
      {
        group: 'fireDrills',
        drillType: DrilType.Zero,
        keyValue: [{
          key: "Time",
          value: "On"
        }, {
          key: "Bullets for drill",
          value: "10"
        },
          {
            key: "Expose time",
            value: "7",
          },
          {
            key: "Cancek time",
            value: "15 sec"
          }
        ]
      }
    ],
    rangeSessions: [
      {
        group: 'rangeSessions',
        drillType: DrilType.Hostage,
        imgUrl: '../../../../assets/icons/Zero.png',
        keyValue: [
          {
            key: "Name",
            value: 'Zero Sight'
          },
          {
            key: "Range",
            value: "40m"
          }, {
            key: "Bullets for drill",
            value: "3"
          }
        ]
      }
    ],

    name: 'Run',
    type: 'Run',
    distance: '10km',
    time: '50m',
    avgPace: '5m/km',

    physicalTraining: [
      {
        group: 'physicalTraining',
        drillType: DrilType.Hostage,
        imgUrl: '../../../../assets/icons/run.png',
        keyValue: [{
          key: "Name",
          value: "Run"
        }, {
          key: "Type",
          value: "Run"
        },
          {
            key: "Distance",
            value: "10km",
          },
          {
            key: "Time",
            value: "50min"
          },
          {
            key: "AVG Pace",
            value: "5m/km"
          },
        ]
      }
    ]
  }

  constructor(private zone: NgZone, private personalDashboardChart: PersonalDashboardChartsService, private ngxLoader: NgxUiLoaderService) {
  }

  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      setTimeout(() => {
        this.personalDashboardChart.initCharts();
      }, 1000)
    });
  }

}
