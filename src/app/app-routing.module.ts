import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservationMenuComponent } from './reservation-menu/reservation-menu';
import { ReservationCreateComponent } from './reservation-create/reservation-create.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { ReservationDeleteComponent } from './reservation-delete/reservation-delete.component';

import { StaffMenuComponent } from './staff/menu/staff-menu.component';
import { StaffCurrentReservationsComponent } from './staff/current-reservations/current-reservations.component';
import { ReservationCreateResponseComponent } from './reservation-create-response/reservation-create-response';
import { StaffBookingPlanComponent } from './staff/staff-booking-plan/staff-booking-plan.component';

const routes: Routes = [
  { path: '', redirectTo: 'reservation', pathMatch: 'full' },
  { path: 'reservation', component: ReservationMenuComponent },
  { path: 'reservation/create', component: ReservationCreateComponent },
  { path: 'reservation/details', component: ReservationDetailsComponent },
  { path: 'reservation/delete', component: ReservationDeleteComponent },
  { path: 'staff/menu', component: StaffMenuComponent },
  {
    path: 'staff/current-reservations',
    component: StaffCurrentReservationsComponent
  },
  {
    path: 'staff/reservations',
    component: ReservationCreateComponent,
  },
  {
    path: 'staff/booking-plan',
    component: StaffBookingPlanComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
