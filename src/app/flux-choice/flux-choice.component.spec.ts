import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxChoiceComponent } from './flux-choice.component';

describe('FluxChoiceComponent', () => {
  let component: FluxChoiceComponent;
  let fixture: ComponentFixture<FluxChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluxChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
