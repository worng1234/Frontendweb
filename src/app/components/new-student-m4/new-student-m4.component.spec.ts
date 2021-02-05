import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStudentM4Component } from './new-student-m4.component';

describe('NewStudentM4Component', () => {
  let component: NewStudentM4Component;
  let fixture: ComponentFixture<NewStudentM4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewStudentM4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStudentM4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
