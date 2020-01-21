import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './shared/material.module';
import { CombatReadinessComponent } from './components/combat-readiness/combat-readiness.component';
import { ReccomendationsComponent } from './components/combat-readiness/reccomendations/reccomendations.component';

@NgModule({
  declarations: [
    AppComponent,
    CombatReadinessComponent,
    ReccomendationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
