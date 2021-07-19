import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PersonalComponent} from "./pages/personal/personal.component";
import {DashboardComponent} from "./pages/dashboard/dashboard/dashboard.component";


const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'personalInfo',
    component: PersonalComponent
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
