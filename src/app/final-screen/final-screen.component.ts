import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-final-screen',
  templateUrl: './final-screen.component.html',
  styleUrls: ['./final-screen.component.sass']
})
export class FinalScreenComponent implements OnInit {

  @Input() title = '';
  @Output() onGoBack = new EventEmitter<string>();
  @Output() onStart = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  back(): void {
    this.onGoBack.emit();
  }

  start(): void {
    this.onStart.emit();
  }

  resendEmail(): void {
    console.log('resending email...');
  }

}
