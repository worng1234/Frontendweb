import { TestBed } from '@angular/core/testing';

import { SortNewStudentM4ServicesService } from './sort-new-student-m4-services.service';

describe('SortNewStudentM4ServicesService', () => {
  let service: SortNewStudentM4ServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortNewStudentM4ServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
