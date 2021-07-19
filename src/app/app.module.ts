import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxUiLoaderModule} from "ngx-ui-loader";

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './shared/material.module';
import {HttpClientModule} from "@angular/common/http";
import {DashboardComponent} from "./pages/dashboard/dashboard/dashboard.component";
import {PersonalComponent} from "./pages/personal/personal.component";
import {PersonalModule} from "./pages/personal/personal.module";
import {DashboardModule} from "./pages/dashboard/dashboard.module";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PersonalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgxUiLoaderModule,
    HttpClientModule,
    PersonalModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [BrowserAnimationsModule],
  entryComponents: []
})
export class AppModule {
}


