import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-flux-choice-one',
  templateUrl: './flux-choice-one.component.html',
  styleUrls: ['./flux-choice-one.component.sass']
})
export class FluxChoiceOneComponent implements OnInit {

  @Output() onGoBack = new EventEmitter<string>();
  @Output() onContinue = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.onGoBack.emit();
  }

  continue(): void {
    this.onContinue.emit();
  }

}
