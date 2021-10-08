import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewStudentM4IdComponent } from './new-student-m4-id.component';

describe('NewStudentM4IdComponent', () => {
  let component: NewStudentM4IdComponent;
  let fixture: ComponentFixture<NewStudentM4IdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewStudentM4IdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewStudentM4IdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
