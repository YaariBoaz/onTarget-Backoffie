import {Component, NgZone, OnInit} from '@angular/core';
import {StatisticsService} from "./statistics.service";
import {PersonalDashboardChartsService} from "../personal-dashboard-charts.service";
import {NgxUiLoaderService} from "ngx-ui-loader";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  constructor(private zone: NgZone,
              private statisticsService: StatisticsService,
              private personalDashboardChart: PersonalDashboardChartsService,
              private ngxService: NgxUiLoaderService) {
  }

  ngOnInit() {

    this.personalDashboardChart.notifySecondTab$.subscribe((data) => {

      if (data) {
        if (data.firstLoad) {
          this.ngxService.start();
          setTimeout(() => {
            this.ngxService.stop();

          }, 2000)
          this.zone.runOutsideAngular(() => {
            setTimeout(() => {
              this.statisticsService.initCharts();
            }, 1000)
          });
        }
      }
    })

  }

}
