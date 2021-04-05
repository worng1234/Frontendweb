import { TestBed } from '@angular/core/testing';

import { StudentCoreInformationService } from './student-core-information.service';

describe('StudentCoreInformationService', () => {
  let service: StudentCoreInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentCoreInformationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
