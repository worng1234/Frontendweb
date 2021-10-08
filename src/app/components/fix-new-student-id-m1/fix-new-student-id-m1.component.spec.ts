import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixNewStudentIdM1Component } from './fix-new-student-id-m1.component';

describe('FixNewStudentIdM1Component', () => {
  let component: FixNewStudentIdM1Component;
  let fixture: ComponentFixture<FixNewStudentIdM1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixNewStudentIdM1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixNewStudentIdM1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
