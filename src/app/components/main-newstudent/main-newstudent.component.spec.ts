import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNewstudentComponent } from './main-newstudent.component';

describe('MainNewstudentComponent', () => {
  let component: MainNewstudentComponent;
  let fixture: ComponentFixture<MainNewstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainNewstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNewstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
