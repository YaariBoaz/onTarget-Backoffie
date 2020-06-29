import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-train-card',
  templateUrl: './drill-card.component.html',
  styleUrls: ['./drill-card.component.scss']
})
export class DrillCardComponent implements OnInit {

  @Input() drill: DrillCard;

  constructor() {
  }

  ngOnInit() {
  }

  getClassByType(drillType: string) {
    if (drillType === 'fireDrills') {
      return 'orange'
    } else if (drillType === 'rangeSessions') {
      return 'turq';
    } else {
      return 'red'
    }
  }

  getDrillNameText(drill: DrillCard) {
    return DrilType[drill.drillType];
  }
}


export interface DrillCard {
  name?:string
  type?:string;
  group: string;
  drillType: DrilType;
  keyValue: Array<{ key: string, value: string }>
}

export enum DrilType {
  Zero,
  Hostage
}
