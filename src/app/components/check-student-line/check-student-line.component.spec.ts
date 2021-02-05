import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckStudentLineComponent } from './check-student-line.component';

describe('CheckStudentLineComponent', () => {
  let component: CheckStudentLineComponent;
  let fixture: ComponentFixture<CheckStudentLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckStudentLineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckStudentLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
