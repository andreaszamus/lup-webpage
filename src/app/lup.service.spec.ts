import { TestBed } from '@angular/core/testing';

import { LupService } from './lup.service';

describe('LupService', () => {
  let service: LupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
