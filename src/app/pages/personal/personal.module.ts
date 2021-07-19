import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PersonalComponent} from "./personal.component";
import {RouterModule, Routes} from "@angular/router";
import {MaterialModule} from "../../shared/material.module";
import {RateOfFireSkillsChartComponent} from './rate-of-fire-skills-chart/rate-of-fire-skills-chart.component';
import {AppModule} from "../../app.module";
import {DrillCardComponent} from "../../shared/components/train-card/drill-card.component";
import {StatisticsComponent} from './statistics/statistics.component';
import {CombatRedinessComponent} from './combat-rediness/combat-rediness.component';
import {TrainingsComponent} from './trainings/trainings.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from "@angular/platform-browser/animations";
import {NgxUiLoaderModule} from "ngx-ui-loader";


const routes: Routes = [
  {path: '', component: PersonalComponent},
];

@NgModule({
  declarations: [RateOfFireSkillsChartComponent, DrillCardComponent, StatisticsComponent, CombatRedinessComponent, TrainingsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(routes),
    NgxUiLoaderModule
  ],
  exports: [RateOfFireSkillsChartComponent, DrillCardComponent, StatisticsComponent, CombatRedinessComponent, TrainingsComponent],
  entryComponents: [RateOfFireSkillsChartComponent, DrillCardComponent, StatisticsComponent, CombatRedinessComponent, TrainingsComponent],
})
export class PersonalModule {
}
