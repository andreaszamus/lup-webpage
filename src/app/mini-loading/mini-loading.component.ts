import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-mini-loading',
  templateUrl: './mini-loading.component.html',
  styleUrls: ['./mini-loading.component.sass']
})
export class MiniLoadingComponent implements OnInit {

  @Output() onContinue = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  continue(): void {
    this.onContinue.emit();
  }

}
