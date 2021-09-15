import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.sass']
})
export class LoadingScreenComponent implements OnInit {

  @Output() onContinue = new EventEmitter<string>();
  @Input() isLoading = false;

  constructor() { }

  ngOnInit(): void {
  }

  continue(): void {
    this.onContinue.emit();
  }

}
