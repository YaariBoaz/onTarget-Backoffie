import {Component, NgZone, OnInit} from '@angular/core';
import {PersonalDashboardChartsService} from "./personal-dashboard-charts.service";
import {DrillCard} from "../../shared/components/train-card/drill-card.component";
import {$e} from "codelyzer/angular/styles/chars";

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {
  panelOpenState: boolean;
  wasTab2Clicked = false;


  constructor(private zone: NgZone, private personalDashboardChart: PersonalDashboardChartsService) {
  }

  ngOnInit() {

  }

  selectedIndexChange($event: number) {
    if ($event === 1) {
      if (!this.wasTab2Clicked) {
        this.wasTab2Clicked = true;
        this.personalDashboardChart.notifySecondTab({firstLoad: true});
      } else {
        this.personalDashboardChart.notifySecondTab({firstLoad: false});
      }

    }
  }
}

export interface Reccomendations {
  fireDrills: DrillCard[];
  rangeSessions: DrillCard[];
  physicalTraining: DrillCard[]
}
