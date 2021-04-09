import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStudentByIdComponent } from './show-student-by-id.component';

describe('ShowStudentByIdComponent', () => {
  let component: ShowStudentByIdComponent;
  let fixture: ComponentFixture<ShowStudentByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowStudentByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowStudentByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
