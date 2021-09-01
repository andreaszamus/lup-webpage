import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-welcome-modal',
  templateUrl: './welcome-modal.component.html',
  styleUrls: ['./welcome-modal.component.sass']
})
export class WelcomeModalComponent implements OnInit {

  @Output() onClosedModal = new EventEmitter<string>();

  animationClassFirstScreen = '';
  animationClassSecondScreen = '';
  showFirstScreen = true;


  constructor() { }

  ngOnInit(): void {

  }

  onClickFirstScreen(): void {
    this.animationClassFirstScreen = 'fade-out';
    setTimeout(() => {
      this.showFirstScreen = false;
    }, 1500);
  }

  onClickSecondScreen(): void {
    this.animationClassSecondScreen = 'slide-out-top';
    setTimeout(() => {
      this.onClosedModal.emit();
    }, 500);
  }
}
