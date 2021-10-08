import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixNewStudentIdM4Component } from './fix-new-student-id-m4.component';

describe('FixNewStudentIdM4Component', () => {
  let component: FixNewStudentIdM4Component;
  let fixture: ComponentFixture<FixNewStudentIdM4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixNewStudentIdM4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixNewStudentIdM4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
