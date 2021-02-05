import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortNewstudentComponent } from './sort-newstudent.component';

describe('SortNewstudentComponent', () => {
  let component: SortNewstudentComponent;
  let fixture: ComponentFixture<SortNewstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortNewstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortNewstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
