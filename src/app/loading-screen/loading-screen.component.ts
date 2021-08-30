import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.sass']
})
export class LoadingScreenComponent implements OnInit {

  @Output() onContinue = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  continue(): void {
    this.onContinue.emit();
  }

}
