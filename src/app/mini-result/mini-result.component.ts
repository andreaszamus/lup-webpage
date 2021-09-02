import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-mini-result',
  templateUrl: './mini-result.component.html',
  styleUrls: ['./mini-result.component.sass']
})
export class MiniResultComponent implements OnInit {

  @Output() onContinue = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  continue(): void {
    this.onContinue.emit();
  }

}
