import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxChoiceOneComponent } from './flux-choice-one.component';

describe('FluxChoiceOneComponent', () => {
  let component: FluxChoiceOneComponent;
  let fixture: ComponentFixture<FluxChoiceOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluxChoiceOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxChoiceOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
