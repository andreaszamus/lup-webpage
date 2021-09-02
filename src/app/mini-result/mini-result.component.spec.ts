import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniResultComponent } from './mini-result.component';

describe('MiniResultComponent', () => {
  let component: MiniResultComponent;
  let fixture: ComponentFixture<MiniResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiniResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
