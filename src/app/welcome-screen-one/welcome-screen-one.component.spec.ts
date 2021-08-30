import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeScreenOneComponent } from './welcome-screen-one.component';

describe('WelcomeScreenOneComponent', () => {
  let component: WelcomeScreenOneComponent;
  let fixture: ComponentFixture<WelcomeScreenOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeScreenOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeScreenOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
