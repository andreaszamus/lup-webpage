import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { InitialStepsModalComponent } from './initial-steps-modal/initial-steps-modal.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { WelcomeModalComponent } from './welcome-modal/welcome-modal.component';
import { InitialDataComponent } from './initial-data/initial-data.component';
import { FluxStatusHeaderComponent } from './flux-status-header/flux-status-header.component';
import { FluxChoiceComponent } from './flux-choice/flux-choice.component';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { ResultScreenComponent } from './result-screen/result-screen.component';
import { WelcomeScreenOneComponent } from './welcome-screen-one/welcome-screen-one.component';
import { WelcomeScreenTwoComponent } from './welcome-screen-two/welcome-screen-two.component';
import { FluxChoiceOneComponent } from './flux-choice-one/flux-choice-one.component';
import { FluxChoiceTwoComponent } from './flux-choice-two/flux-choice-two.component';
import { HttpClientModule } from "@angular/common/http";
import { ContactFormComponent } from './contact-form/contact-form.component';
import { MiniLoadingComponent } from './mini-loading/mini-loading.component';
import { MiniResultComponent } from './mini-result/mini-result.component';
import { FinalScreenComponent } from './final-screen/final-screen.component';
import { DigitOnlyModule } from "@uiowa/digit-only";

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    InitialStepsModalComponent,
    WelcomeModalComponent,
    InitialDataComponent,
    FluxStatusHeaderComponent,
    FluxChoiceComponent,
    LoadingScreenComponent,
    ResultScreenComponent,
    WelcomeScreenOneComponent,
    WelcomeScreenTwoComponent,
    FluxChoiceOneComponent,
    FluxChoiceTwoComponent,
    ContactFormComponent,
    MiniLoadingComponent,
    MiniResultComponent,
    FinalScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    DigitOnlyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
