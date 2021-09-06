import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-initial-data',
  templateUrl: './initial-data.component.html',
  styleUrls: ['./initial-data.component.sass']
})
export class InitialDataComponent implements OnInit {

  resetScreens = ['no','','','','','','','','','','','','','','','',''];
  screens = ['no','','','','','','','','','','','','','visible'];

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
    title: 'Desafortunadamente, nuestro sistema ha detectado que tu proyecto solar aún no tiene una factibilidad segura',
    subtitle: 'Sin embargo, no te desanimes, te contactaremos para encontrar como asesorarte en la financiación del mismo'
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

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.resultText = {
      isSuccess: false,
      header: '',
      title: '',
      subtitle: ''
    };
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

  setResultTextOK(): void {
    this.finalScreenText = this.finalScreenSuccess
    this.resultText = this.successResponse;
    this.goToScreen(3, 4);
  }

  setResultTextNotOK(): void {
    this.finalScreenText = this.finalScreenNotSuccess;
    this.resultText = this.errorResponse;
    this.goToScreen(3, 8);
  }
}
