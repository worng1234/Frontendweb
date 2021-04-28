import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FixProfileStudentComponent } from './fix-profile-student.component';

describe('FixProfileStudentComponent', () => {
  let component: FixProfileStudentComponent;
  let fixture: ComponentFixture<FixProfileStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FixProfileStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FixProfileStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
