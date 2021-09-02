import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.sass']
})
export class ContactFormComponent implements OnInit {

  @Output() onGoBack = new EventEmitter<string>();
  @Output() onContinue = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  back(): void {
    this.onGoBack.emit();
  }

  continue(): void {
    this.onContinue.emit();
  }
}
