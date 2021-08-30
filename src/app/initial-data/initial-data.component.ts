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

  constructor() { }

  ngOnInit(): void {
  }

  goToNextScreen(screenNumber: number): void {
    if (screenNumber == 2) {
      this.screen1Class = 'slide-out-left';
    } else if (screenNumber == 3) {
      this.screen2Class = 'slide-out-left';
    } else if (screenNumber == 4) {
      this.screen3Class = 'slide-out-left';
    }
  }

  goBackToScreen(screenNumber: number): void {
    if (screenNumber == 3) {
        this.screen3Class = 'slide-in-left';
    }
  }

}
