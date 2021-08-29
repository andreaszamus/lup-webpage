import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initial-data',
  templateUrl: './initial-data.component.html',
  styleUrls: ['./initial-data.component.sass']
})
export class InitialDataComponent implements OnInit {

  firstScreenClass = '';
  secondScreenClass = '';
  thirdScreenClass = '';

  constructor() { }

  ngOnInit(): void {
  }

  goToNextScreen(screenNumber: number): void {
    if (screenNumber == 2) {
      this.firstScreenClass = 'slide-out-left';
    } else if (screenNumber == 3) {
      this.secondScreenClass = 'slide-out-left';
    } else if (screenNumber == 4) {
      this.thirdScreenClass = 'slide-out-left';
    }
  }

  goBackToScreen(screenNumber: number): void {
    if (screenNumber == 3) {
        this.thirdScreenClass = 'slide-in-left';
    }
  }

}
