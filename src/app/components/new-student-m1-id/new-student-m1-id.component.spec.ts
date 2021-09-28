import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStudentM1IdComponent } from './new-student-m1-id.component';

describe('NewStudentM1IdComponent', () => {
  let component: NewStudentM1IdComponent;
  let fixture: ComponentFixture<NewStudentM1IdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewStudentM1IdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStudentM1IdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
