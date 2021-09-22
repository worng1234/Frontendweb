import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainStudyComponent } from './main-study.component';

describe('MainStudyComponent', () => {
  let component: MainStudyComponent;
  let fixture: ComponentFixture<MainStudyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainStudyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
