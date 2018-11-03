import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReservationMenuComponent } from './reservation-menu/reservation-menu';
import { ReservationCreateComponent } from './reservation-create/reservation-create.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { ReservationDeleteComponent } from './reservation-delete/reservation-delete.component';

const routes: Routes = [
  { path: '', redirectTo: 'reservation', pathMatch: 'full' },
  { path: 'reservation', component: ReservationMenuComponent },
  { path: 'reservation/create', component: ReservationCreateComponent },
  { path: 'reservation/details', component: ReservationDetailsComponent },
  { path: 'reservation/delete', component: ReservationDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
