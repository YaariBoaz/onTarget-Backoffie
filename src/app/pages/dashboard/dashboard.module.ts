import {DashboardChartsService} from './dashboard/dashboard-charts.service';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModule} from '../../shared/material.module';
import {AgGridModule} from 'ag-grid-angular';
import {ChartDialogComponent} from './dashboard/chart-dialog/chart-dialog.component';
import { NgxSmartModalModule } from 'ngx-smart-modal';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];


@NgModule({
  declarations: [ ChartDialogComponent],
  imports: [
    CommonModule,
    NgxSmartModalModule.forRoot(),
    MaterialModule,
    RouterModule.forChild(routes),
    AgGridModule.withComponents([]),
  ],
  providers: [DashboardChartsService],
  entryComponents: [ChartDialogComponent]
})
export class DashboardModule {
}
