import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortNewstudentM4Component } from './sort-newstudent-m4.component';

describe('SortNewstudentM4Component', () => {
  let component: SortNewstudentM4Component;
  let fixture: ComponentFixture<SortNewstudentM4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortNewstudentM4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortNewstudentM4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
