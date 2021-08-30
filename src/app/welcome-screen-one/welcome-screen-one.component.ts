import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-welcome-screen-one',
  templateUrl: './welcome-screen-one.component.html',
  styleUrls: ['./welcome-screen-one.component.sass']
})
export class WelcomeScreenOneComponent implements OnInit {

  @Output() onContinue = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  continue(): void {
    console.log('tset');
    this.onContinue.emit();
  }

}
