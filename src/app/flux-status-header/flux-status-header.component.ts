import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-flux-status-header',
  templateUrl: './flux-status-header.component.html',
  styleUrls: ['./flux-status-header.component.sass']
})
export class FluxStatusHeaderComponent implements OnInit {

  @Input() fluxTitle = '';
  @Input() fluxStep = 0;

  constructor() { }

  ngOnInit(): void {

  }

}
