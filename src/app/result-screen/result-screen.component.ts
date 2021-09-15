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
  @Input() isSuccess: boolean = false;
  @Input() time = '';
  @Input() discount: number = 0;
  @Input() energyRateWithDiscount = '';
  textAlignmentClass = '';



  constructor() { }

  ngOnInit(): void {
    if (this.isSuccess) {
      this.textAlignmentClass = 'col-10 offset-1 col-lg-5 text-left'
    } else {
      this.textAlignmentClass = 'text-center col-12'
    }
  }

  back(): void {
    this.onBack.emit();
  }

  continue(): void {
    this.onContinue.emit();
  }

}
