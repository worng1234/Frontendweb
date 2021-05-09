import { TestBed } from '@angular/core/testing';

import { BehaviorserviceService } from './behaviorservice.service';

describe('BehaviorserviceService', () => {
  let service: BehaviorserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BehaviorserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
