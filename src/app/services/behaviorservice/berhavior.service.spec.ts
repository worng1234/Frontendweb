import { TestBed } from '@angular/core/testing';

import { BerhaviorService } from './berhavior.service';

describe('BerhaviorService', () => {
  let service: BerhaviorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BerhaviorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
