import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EnergyInterface} from "../models/energy.interface";

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
  city = '';

  constructor( ) { }

  ngOnInit(): void {
  }

  isAllowedToContinue(): boolean {
    return !!this.lastMonthBill && !!this.lastMonthEnergyUsage && !!this.city;
  }

  continue(): void {
    const energy: EnergyInterface = {
      lastMonthBill: this.lastMonthBill,
      lastMonthEnergyUsage: this.lastMonthEnergyUsage,
      city: this.city
    }
    this.onContinueOK.emit(JSON.stringify(energy));
  }

}
