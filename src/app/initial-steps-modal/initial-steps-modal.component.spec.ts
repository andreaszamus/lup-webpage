import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialStepsModalComponent } from './initial-steps-modal.component';

describe('InitialStepsModalComponent', () => {
  let component: InitialStepsModalComponent;
  let fixture: ComponentFixture<InitialStepsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitialStepsModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialStepsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
