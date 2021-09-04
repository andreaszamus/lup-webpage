import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.sass']
})
export class ContactFormComponent implements OnInit {

  @Output() onGoBack = new EventEmitter<string>();
  @Output() onContinue = new EventEmitter<string>();

  @ViewChild('input1') input1: ElementRef | undefined;

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
  }
}
