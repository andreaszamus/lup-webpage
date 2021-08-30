import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-welcome-screen-two',
  templateUrl: './welcome-screen-two.component.html',
  styleUrls: ['./welcome-screen-two.component.sass']
})
export class WelcomeScreenTwoComponent implements OnInit {

  @Output() onContinue = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  continue(): void {
    this.onContinue.emit();
  }

}
