import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxChoiceTwoComponent } from './flux-choice-two.component';

describe('FluxChoiceTwoComponent', () => {
  let component: FluxChoiceTwoComponent;
  let fixture: ComponentFixture<FluxChoiceTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluxChoiceTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxChoiceTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
