import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminPageCommunicateComponent } from './admin-page-communicate.component';

describe('AdminPageCommunicateComponent', () => {
  let component: AdminPageCommunicateComponent;
  let fixture: ComponentFixture<AdminPageCommunicateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminPageCommunicateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminPageCommunicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
