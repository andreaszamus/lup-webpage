import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-result-screen',
  templateUrl: './result-screen.component.html',
  styleUrls: ['./result-screen.component.sass']
})
export class ResultScreenComponent implements OnInit {

  @Output() onContinue = new EventEmitter<string>();
  @Output() onBack = new EventEmitter<string>();

  @Input() header = '';
  @Input() title = '';
  @Input() subtitle = '';

  constructor() { }

  ngOnInit(): void {
  }

  back(): void {
    this.onBack.emit();
  }

  continue(): void {
    this.onContinue.emit();
  }

}
