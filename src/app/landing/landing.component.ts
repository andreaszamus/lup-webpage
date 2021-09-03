import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.sass']
})
export class LandingComponent implements OnInit, AfterViewInit {

  @ViewChild('openWelcomeModal') openWelcomeModal: ElementRef | undefined;
  @ViewChild('closeWelcomeModal') closeWelcomeModal: ElementRef | undefined;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    // this opens da modal on start
    this.openWelcomeModal?.nativeElement.click();
  }

  closeModal(): void {
    this.closeWelcomeModal?.nativeElement.click();
  }

  goToInitalData(): void {
    this.router.navigate(['datos-iniciales']);
  }
}
