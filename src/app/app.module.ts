import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { InitialStepsModalComponent } from './initial-steps-modal/initial-steps-modal.component';
import {ReactiveFormsModule} from "@angular/forms";
import { WelcomeModalComponent } from './welcome-modal/welcome-modal.component';
import { InitialDataComponent } from './initial-data/initial-data.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    InitialStepsModalComponent,
    WelcomeModalComponent,
    InitialDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
