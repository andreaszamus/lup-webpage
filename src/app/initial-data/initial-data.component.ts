import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LupRequestModel} from "../models/lup-request.model";
import {LupService} from "../lup.service";
import {EnergyInterface} from "../models/energy.interface";
import {FluxOneInterface} from "../models/flux-one.interface";

@Component({
  selector: 'app-initial-data',
  templateUrl: './initial-data.component.html',
  styleUrls: ['./initial-data.component.sass']
})
export class InitialDataComponent implements OnInit {

  resetScreens = ['no','','','','','','','','','','','','','','','',''];
  screens = ['no','','','','','','','','','visible','','','',''];

  resultText = {
    isSuccess: false,
    header: '',
    title: '',
    subtitle: ''
  };

  successResponse = {
    isSuccess: true,
    header: '<p><span class=\'color-lup--violet-dark\'>¡Felicidades!</p>',
    title: '<p><span class=\'color-lup--violet-dark\'>Haz comenzado por el camino para disfrutar de la energía limpia, renovable y gratuita del <span class=\'color-lup--yellow\'>sol</span></p>',
    subtitle: 'Tu proyecto tiene un preaprobado, su factibilidad debe ser analizada por nuestro equipo de profesionales'
  };

  errorResponse = {
    isSuccess: false,
    header: '<p><span class=\'color-lup--violet-light\'>¡Apenas estamos comenzando!</p>',
    title: 'Desafortunadamente, nuestro sistema <br> aún no ha detectado factibilidad para <br> tu proyecto solar',
    subtitle: 'Sin embargo, no te desanimes, envíanos tus datos <br> para que un asesor pueda revisar tu proyecto'
  };

  finalScreenText = {
    title: ''
  }

  finalScreenSuccess = {
    title: 'Tienes un proyecto en camino'
  }

  finalScreenNotSuccess = {
    title: 'Tu proyecto será evaluado'
  }

  lupRequest: LupRequestModel;

  constructor(
    private router: Router,
    private lupService: LupService
  ) {
    this.lupRequest = new LupRequestModel(0, 0);
  }

  ngOnInit(): void {
    this.resultText = {
      isSuccess: false,
      header: '',
      title: '',
      subtitle: ''
    };
    this.finalScreenText = this.finalScreenNotSuccess
    this.resultText = this.successResponse;
  }

  goToScreen(currentScreen: number, screenNumber: number): void {
    this.screens = this.resetScreens;
    if (currentScreen < screenNumber) {
      this.screens[currentScreen] = 'visible slide-out-left on-top-of-god';
      this.screens[screenNumber] = 'visible';
    } else {
      this.screens[currentScreen] = 'visible';
      this.screens[screenNumber] = 'visible slide-in-left on-top-of-god';
    }
  }

  goToLanding() {
    this.router.navigate(['']);
  }

  calculateAndContinueFluxOne(event: any) {
    console.log('flux one event: ', event);
    const fluxOneData = JSON.parse(event) as FluxOneInterface;
    this.lupRequest.monthlyProducedEnergy = parseInt(fluxOneData.monthlyProducedEnergy);
    this.lupRequest.developerName = fluxOneData.developerName;
    this.lupRequest.projectTotalCost = parseInt(fluxOneData.projectTotalCost);
    console.log('lupParams:', this.lupRequest);
    this.lupService.consultAvailability(this.lupRequest).then((result) => {
      console.log('consultAvailability response: ', result);
      if(result.data.irr > 0.17) {
        console.log('success');
        this.finalScreenText = this.finalScreenSuccess
        this.resultText = this.successResponse;
      } else {
        this.finalScreenText = this.finalScreenNotSuccess;
        this.resultText = this.errorResponse;
      }
      this.goToScreen(5, 7);
    }).catch((error: any) => {
      console.log('error: ', error);
    });
  }

  saveEnergyData(event: any) {
    console.log('energy event: ', event);
    const lupRequest = JSON.parse(event) as EnergyInterface;
    this.lupRequest.lastMonthEnergyUsage = parseInt(lupRequest.lastMonthEnergyUsage);
    this.lupRequest.lastMonthBill = parseInt(lupRequest.lastMonthBill);
    this.lupRequest.city = lupRequest.city;
    this.goToScreen(3, 4);
  }
}
