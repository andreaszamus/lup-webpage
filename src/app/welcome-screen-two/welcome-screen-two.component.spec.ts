import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeScreenTwoComponent } from './welcome-screen-two.component';

describe('WelcomeScreenTwoComponent', () => {
  let component: WelcomeScreenTwoComponent;
  let fixture: ComponentFixture<WelcomeScreenTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeScreenTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeScreenTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
