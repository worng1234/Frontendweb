import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentCoreInformationComponent } from './student-core-information.component';

describe('StudentCoreInformationComponent', () => {
  let component: StudentCoreInformationComponent;
  let fixture: ComponentFixture<StudentCoreInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentCoreInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentCoreInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
