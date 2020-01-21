import { DashboardChartsService } from './dashboard/dashboard-charts.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../../shared/material.module';
import { AgGridModule } from 'ag-grid-angular';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    AgGridModule.withComponents([]),
  ],
  providers: [DashboardChartsService]
})
export class DashboardModule {
}
