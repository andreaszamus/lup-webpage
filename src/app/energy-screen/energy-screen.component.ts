import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-energy-screen',
  templateUrl: './energy-screen.component.html',
  styleUrls: ['./energy-screen.component.sass']
})
export class EnergyScreenComponent implements OnInit {

  @Output() onContinueOK = new EventEmitter<string>();
  @Output() onContinueNotOk = new EventEmitter<string>();

  lastMonthBill = '';
  lastMonthEnergyUsage = '';

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  }

  isAllowedToContinue(): boolean {
    return !!this.lastMonthBill && !!this.lastMonthEnergyUsage;
  }

  consultAvailability(): Promise<any> {
    const serviceURL = 'https://q3n07s9r8f.execute-api.sa-east-1.amazonaws.com/dev/ppa-auto';
    // const serviceURL = 'https://run.mocky.io/v3/2c8c1e75-4101-44ea-a4a8-5d6d627cd1f1';
    const serviceBody = {
      lastMonthBill: parseInt(this.lastMonthBill),
      lastMonthEnergyUsage: parseInt(this.lastMonthEnergyUsage)
    };
    return this.httpClient.post(serviceURL, serviceBody).toPromise()
  }

  calculateAndContinue() {
    this.consultAvailability().then((result) => {
      console.log('respuesta: ', result);
      if(result.data.irr > 0.17) {
        console.log('success');
        this.onContinueOK.emit();
      } else {
        console.log('too bad');
        this.onContinueNotOk.emit();
      }
    }).catch((error) => {
      console.log('error: ', error);
    });
  }

}
