import { TestBed } from '@angular/core/testing';

import { AddStudentcoreService } from './add-studentcore.service';

describe('AddStudentcoreService', () => {
  let service: AddStudentcoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddStudentcoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
