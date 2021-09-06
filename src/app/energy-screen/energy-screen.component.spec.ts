import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyScreenComponent } from './energy-screen.component';

describe('EnergyScreenComponent', () => {
  let component: EnergyScreenComponent;
  let fixture: ComponentFixture<EnergyScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergyScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnergyScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
