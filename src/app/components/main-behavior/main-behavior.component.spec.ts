import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBehaviorComponent } from './main-behavior.component';

describe('MainBehaviorComponent', () => {
  let component: MainBehaviorComponent;
  let fixture: ComponentFixture<MainBehaviorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainBehaviorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBehaviorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
