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
  screens = ['no','visible','','','','','','','','','','','','','','',''];

  lastMonthBill = '';
  lastMonthEnergyUsage = '';

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  goToScreen(currentScreen: number, screenNumber: number): void {
    console.log('going to screen: ', screenNumber);
    console.log('from screen: ', currentScreen);
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
    const serviceBody = {
      'lastMonthBill': this.lastMonthBill,
      lastMonthEnergyUsage: 456
    };
    console.log('test:', serviceBody);
    return this.httpClient.post(serviceURL, serviceBody).toPromise()
  }

  calculateAndContinue() {
    this.goToScreen(3, 4);
    this.consultAvailability().then((result) => {
      console.log('respuesta: ', JSON.parse(result));
      this.goToScreen(3, 4);
    }).catch((error) => {
      console.log('error: ', error);
      this.goToScreen(3, 4);
    });
  }

  goToLanding() {
    this.router.navigate(['']);
  }
}
