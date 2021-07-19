import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-chart-dialog',
  templateUrl: './chart-dialog.component.html',
  styleUrls: ['./chart-dialog.component.scss']
})
export class ChartDialogComponent implements OnInit {
  readiness = [
    {name: 'Evi Cohen', rank: '1st Sgt', ready: 95, imgUrl: '../../../../assets/icons/Evi_Cohen.png'},
    {name: 'Omer Yaari', rank: '1st Sgt', ready: 78, imgUrl: '../../../../assets/icons/Omer_yaari.png'},
    {name: 'Alon Katvan', rank: '1st Sgt', ready: 80, imgUrl: '../../../../assets/icons/Alon_katvan.png'},
    {name: 'Boaz Yaari', rank: '1st Sgt', ready: 91, imgUrl: '../../../../assets/icons/Boaz_yaari.png'},
    {name: 'Shani Cohen', rank: '1st Sgt', ready: 99, imgUrl: '../../../../assets/icons/Shani_cohen.png'},

  ]

  constructor() {
  }

  ngOnInit() {
  }

  goToPersonalDetails() {

  }
}
