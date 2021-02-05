import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorTeacherComponent } from './behavior-teacher.component';

describe('BehaviorTeacherComponent', () => {
  let component: BehaviorTeacherComponent;
  let fixture: ComponentFixture<BehaviorTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BehaviorTeacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BehaviorTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
