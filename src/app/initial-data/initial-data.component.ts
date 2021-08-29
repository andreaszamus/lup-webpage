import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-initial-data',
  templateUrl: './initial-data.component.html',
  styleUrls: ['./initial-data.component.sass']
})
export class InitialDataComponent implements OnInit {

  firstScreenClass = ''
  secondScreenClass = ''

  constructor() { }

  ngOnInit(): void {
  }

  closeFirstScreen(): void {
    this.firstScreenClass = 'slide-out-left';
  }

  closeSecondScreen(): void {
    this.secondScreenClass = 'slide-out-left';
  }

}
