import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentCoreComponent } from './add-student-core.component';

describe('AddStudentCoreComponent', () => {
  let component: AddStudentCoreComponent;
  let fixture: ComponentFixture<AddStudentCoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddStudentCoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddStudentCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
