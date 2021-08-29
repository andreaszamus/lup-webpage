import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-flux-choice',
  templateUrl: './flux-choice.component.html',
  styleUrls: ['./flux-choice.component.sass']
})
export class FluxChoiceComponent implements OnInit {

  @Output() onGoBack = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  goBack(): void {
    this.onGoBack.emit();
  }

}
