import { TestBed } from '@angular/core/testing';

import { SortNewstudentService } from './sort-newstudent.service';

describe('SortNewstudentService', () => {
  let service: SortNewstudentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortNewstudentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
