import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStudentM1Component } from './new-student-m1.component';

describe('NewStudentM1Component', () => {
  let component: NewStudentM1Component;
  let fixture: ComponentFixture<NewStudentM1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewStudentM1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStudentM1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
