import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffBookingPlanComponent } from './staff-booking-plan.component';

describe('StaffBookingPlanComponent', () => {
  let component: StaffBookingPlanComponent;
  let fixture: ComponentFixture<StaffBookingPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffBookingPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffBookingPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
