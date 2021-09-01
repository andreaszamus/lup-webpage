import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-initial-data',
  templateUrl: './initial-data.component.html',
  styleUrls: ['./initial-data.component.sass']
})
export class InitialDataComponent implements OnInit {

  screens = ['no','visible','','','','','','','','','', ''];

  lastMonthBill = '';
  lastMonthEnergyUsage = '';

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  }

  goToScreen(currentScreen: number, screenNumber: number): void {
    console.log('screens: ', this.screens);
    if (currentScreen < screenNumber) {
      this.screens = ['no','','','','','','','','','','', ''];
      this.screens[currentScreen] = 'visible slide-out-left';
      this.screens[screenNumber] = 'visible';
    } else {
      this.screens = ['no','','','','','','','','','','', ''];
      this.screens[currentScreen] = 'visible';
      this.screens[screenNumber] = 'visible slide-in-left';
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
    /*this.consultAvailability().then((result) => {
      console.log('respuesta: ', JSON.parse(result));
      //
    });*/
  }
}
