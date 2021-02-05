import { TestBed } from '@angular/core/testing';

import { NewStudentM1Service } from './new-student-m1.service';

describe('NewStudentM1Service', () => {
  let service: NewStudentM1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewStudentM1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
