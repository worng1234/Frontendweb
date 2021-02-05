import { TestBed } from '@angular/core/testing';

import { NewStudentM4Service } from './new-student-m4.service';

describe('NewStudentM4Service', () => {
  let service: NewStudentM4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewStudentM4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
