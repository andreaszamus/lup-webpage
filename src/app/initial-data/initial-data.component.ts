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
  screens = ['no','','','','','','','','visible','','','','','','','',''];

  lastMonthBill = '';
  lastMonthEnergyUsage = '';

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



  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
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

  consultAvailability(): Promise<any> {
    const serviceURL = 'https://q3n07s9r8f.execute-api.sa-east-1.amazonaws.com/dev/ppa-auto';
    // const serviceURL = 'https://run.mocky.io/v3/2c8c1e75-4101-44ea-a4a8-5d6d627cd1f1';
    const serviceBody = {
      'lastMonthBill': parseInt(this.lastMonthBill),
      lastMonthEnergyUsage: parseInt(this.lastMonthEnergyUsage)
    };
    return this.httpClient.post(serviceURL, serviceBody).toPromise()
  }

  calculateAndContinue() {
    this.consultAvailability().then((result) => {
      console.log('respuesta: ', result);
      if(result.data.irr > 0.17) {
        console.log('success');
        this.setResultText(this.successResponse);
      } else {
        console.log('too bad');
        this.setResultText(this.errorResponse);
      }
      this.goToScreen(3, 8);
    }).catch((error) => {
      console.log('error: ', error);
      // this.goToScreen(3, 4);
    });
  }

  goToLanding() {
    this.router.navigate(['']);
  }

  isAllowedToContinue(): boolean {
    return !!this.lastMonthBill && !!this.lastMonthEnergyUsage;
  }

  setResultText(resultTexts: any): void {
    this.resultText = resultTexts;
  }
}
