import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FluxTwoInterface} from "../models/flux-two.interface";

@Component({
  selector: 'app-flux-choice-two',
  templateUrl: './flux-choice-two.component.html',
  styleUrls: ['./flux-choice-two.component.sass']
})
export class FluxChoiceTwoComponent implements OnInit {

  @Output() onGoBack = new EventEmitter<string>();
  @Output() onContinue = new EventEmitter<string>();

  isLoading = false;
  isResultReady = false;
  area = '';

  constructor() { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.onGoBack.emit();
  }

  continue(): void {
    const area: FluxTwoInterface = {
      area: this.area
    };
    this.onContinue.emit(JSON.stringify(area));
  }

  showMiniLoading() {
    this.isLoading = true;
  }

  finishedLoading() {
    this.isLoading = false;
    setTimeout(() => {
      this.isResultReady = true;
    }, 250);

  }
}
