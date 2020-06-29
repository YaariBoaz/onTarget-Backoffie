import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ApiService} from "../../../shared/api.service";
import {PersonalDashboardChartsService} from "../personal-dashboard-charts.service";

// @ts-ignore
@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('1ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})


export class TrainingsComponent implements OnInit {
  ELEMENT_DATA: PeriodicElement[] = [
    {
      session: 1,
      date: new Date(),
      numberOfBullets: 6,
    }
  ];
  list_data: TrainingData[];

  panelOpenState: boolean;
  hover: boolean;
  hoverSimulation: boolean;
  hoverPt: boolean;
  hoverFire: boolean;
  selected = 1;


  constructor(private api: ApiService, private personalDashboardChartsService: PersonalDashboardChartsService) {
  }

  ngOnInit() {
    this.api.getUserTrainnies().subscribe(data => {
      if (this.list_data.length < data.length) {
      this.personalDashboardChartsService.updateShooting();
      }
      this.list_data = data;
    });

    setInterval(() => {
      this.api.getUserTrainnies().subscribe(data => {
        this.list_data = data;
      });
    }, 5000)
  }

  getTotalCost() {
  }

  getHeader(column: string) {
    if (column === 'session') {
      return 'Session';
    } else if (column === 'numberOfBullets') {
      return '# Of Bullets';
    } else {
      return 'Date';
    }
  }
}

export class TableExpandableRowsExample {

}

export interface PeriodicElement {
  session: number;
  date: Date;
  numberOfBullets: number;
}

export interface TrainingData {
  date: Date,
  shots: Train[]
  range: string;
  drillName: string;
}

export interface Train {
  time: string;
  split: string;
  disFromCenter: string;
  score: string;
}


