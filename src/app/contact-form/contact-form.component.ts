import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.sass']
})
export class ContactFormComponent implements OnInit {

  @Input() uploadBill: boolean = true;
  @Input() uploadProjectPrice: boolean = false;

  @Output() onGoBack = new EventEmitter<string>();
  @Output() onContinue = new EventEmitter<string>();

  name = '';
  cellphone = '';
  email = '';
  country = '';
  address = '';

  dataTreatment: boolean = false;

  @ViewChild('input1') input1: ElementRef | undefined;
  @ViewChild('input2') input2: ElementRef | undefined;

  constructor() { }

  ngOnInit(): void {
  }

  back(): void {
    this.onGoBack.emit();
  }

  continue(): void {
    this.onContinue.emit();
  }

  captureFile(captureFileNumber: number) {
    if (captureFileNumber == 1) {
      this.input1?.nativeElement.click();
    }
    if (captureFileNumber == 2) {
      this.input2?.nativeElement.click();
    }
  }

  isValidData(): boolean {
    let isValidEmail = false;
    const pattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if (this.email) {
      isValidEmail = pattern.test(this.email);
    }
    return !!this.name && !!this.cellphone && !!this.email && this.dataTreatment && isValidEmail;
  }
}
