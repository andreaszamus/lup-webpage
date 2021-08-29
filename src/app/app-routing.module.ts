import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LandingComponent} from "./landing/landing.component";
import {InitialDataComponent} from "./initial-data/initial-data.component";

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'datos-iniciales', component: InitialDataComponent },
  { path: '**', component: LandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
