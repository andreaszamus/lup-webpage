import {Component, EventEmitter, OnInit, Output} from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.onGoBack.emit();
  }

  continue(): void {
    this.onContinue.emit();
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
