import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckStudentRoomComponent } from './check-student-room.component';

describe('CheckStudentRoomComponent', () => {
  let component: CheckStudentRoomComponent;
  let fixture: ComponentFixture<CheckStudentRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckStudentRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckStudentRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
