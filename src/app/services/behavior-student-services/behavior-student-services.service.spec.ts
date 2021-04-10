import { TestBed } from '@angular/core/testing';

import { BehaviorStudentServicesService } from './behavior-student-services.service';

describe('BehaviorStudentServicesService', () => {
  let service: BehaviorStudentServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BehaviorStudentServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
