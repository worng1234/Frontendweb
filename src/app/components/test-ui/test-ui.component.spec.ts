import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestUIComponent } from './test-ui.component';

describe('TestUIComponent', () => {
  let component: TestUIComponent;
  let fixture: ComponentFixture<TestUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
