import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffCurrentReservationsComponent } from './current-reservations.component';

describe('CurrentReservationsComponent', () => {
  let component: StaffCurrentReservationsComponent;
  let fixture: ComponentFixture<StaffCurrentReservationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaffCurrentReservationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffCurrentReservationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
