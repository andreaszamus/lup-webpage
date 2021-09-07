import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {LupService} from "../lup.service";
import {LupRequestModel} from "../models/lup-request.model";
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

  constructor(
    private lupService: LupService
  ) { }

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
