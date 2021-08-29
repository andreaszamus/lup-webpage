import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FluxStatusHeaderComponent } from './flux-status-header.component';

describe('FluxStatusHeaderComponent', () => {
  let component: FluxStatusHeaderComponent;
  let fixture: ComponentFixture<FluxStatusHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FluxStatusHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FluxStatusHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
