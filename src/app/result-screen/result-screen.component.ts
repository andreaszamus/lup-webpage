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
  @Input() amount = '';
  @Input() savings = '';
  textAlignmentClass = '';



  constructor() { }

  ngOnInit(): void {
    // test only
    const successResponse = {
      isSuccess: true,
      header: '<p><span class=\'color-lup--violet-dark\'>¡Felicidades!</p>',
      title: '<p><span class=\'color-lup--violet-dark\'>Haz comenzado por el camino para disfrutar de la energía limpia, renovable y gratuita del <span class=\'color-lup--yellow\'>sol</span></p>',
      subtitle: 'Tu proyecto tiene un preaprobado, su factibilidad debe ser analizada por nuestro equipo de profesionales',
      amount: '540',
      savings: '17'
    };
    this.header = successResponse.header;
    this.title = successResponse.title;
    this.subtitle = successResponse.subtitle;
    this.amount = successResponse.amount;
    this.isSuccess = successResponse.isSuccess;
    this.savings = successResponse.savings;
    //
    if (this.isSuccess) {
      this.textAlignmentClass = 'offset-md-1 col-md-5 text-left'
    } else {
      this.textAlignmentClass = 'text-center'
    }
  }

  back(): void {
    this.onBack.emit();
  }

  continue(): void {
    this.onContinue.emit();
  }

}
