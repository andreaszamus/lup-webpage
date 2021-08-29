import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})
export class LandingComponent implements OnInit, AfterViewInit {

  @ViewChild('openWelcomeModal') openWelcomeModal: ElementRef | undefined;
  @ViewChild('closeWelcomeModal') closeWelcomeModal: ElementRef | undefined;

  profileForm = new FormGroup({
    name: new FormControl(),
    cellphone: new FormControl(),
    email: new FormControl([Validators.required, Validators.minLength(10)]),
    country: new FormControl({
      value: 'Colombia', disabled: false
    }),
    address: new FormControl()
  });

  constructor() { }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.profileForm.value);
  }

  ngAfterViewInit(): void {
    // this opens da modal on start
    // this.openWelcomeModal?.nativeElement.click();
  }

  closeModal(): void {
    this.closeWelcomeModal?.nativeElement.click();
  }
}
