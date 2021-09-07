import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FluxOneInterface} from "../models/flux-one.interface";

@Component({
  selector: 'app-flux-choice-one',
  templateUrl: './flux-choice-one.component.html',
  styleUrls: ['./flux-choice-one.component.sass']
})
export class FluxChoiceOneComponent implements OnInit {

  @Output() onGoBack = new EventEmitter<string>();
  @Output() onContinue = new EventEmitter<string>();

  developerName = '';
  monthlyProducedEnergy = '';
  projectTotalCost = '';

  constructor() { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.onGoBack.emit();
  }

  continue(): void {
    const fluxOne: FluxOneInterface = {
      developerName: this.developerName,
      monthlyProducedEnergy: this.monthlyProducedEnergy,
      projectTotalCost: this.projectTotalCost
    }
    this.onContinue.emit(JSON.stringify(fluxOne));
  }

  isValidData(): boolean {
    return !!this.developerName && !!this.monthlyProducedEnergy && !!this.projectTotalCost;
  }

}
