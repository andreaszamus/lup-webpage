import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initial-data',
  templateUrl: './initial-data.component.html',
  styleUrls: ['./initial-data.component.sass']
})
export class InitialDataComponent implements OnInit {

  screen1Class = '';
  screen2Class = '';
  screen3Class = '';
  screen4Class = '';
  screen5Class = '';
  screen6Class = '';

  constructor() { }

  ngOnInit(): void {
  }

  goToNextScreen(screenNumber: number): void {
    const goClass = 'slide-out-left';
    if (screenNumber == 2) {
      this.screen1Class = goClass;
    } else if (screenNumber == 3) {
      this.screen2Class = goClass;
    } else if (screenNumber == 4) {
      this.screen3Class = goClass;
    } else if (screenNumber == 5) {
      this.screen4Class = goClass;
    } else if (screenNumber == 6) {
      this.screen5Class = goClass;
    }
  }

  goBackToScreen(screenNumber: number): void {
    const backClass = 'slide-in-left';
    if (screenNumber == 3) {
        this.screen3Class = backClass;
    } else if (screenNumber == 4) {
      this.screen4Class = backClass;
    }
  }

}
