import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';

import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { ReservationCreateComponent } from './reservation-create/reservation-create.component';
import { ReservationDeleteComponent } from './reservation-delete/reservation-delete.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { ReservationMenuComponent } from './reservation-menu/reservation-menu';
import { TablesComponent } from './templates/tables/tables.component';
import { FormsModule } from '@angular/forms';

import { StaffMenuComponent } from './staff/menu/staff-menu.component';
import { StaffCurrentReservationsComponent } from './staff/current-reservations/current-reservations.component';
import { CommonModule } from '@angular/common';
import { ReservationCreateResponseComponent } from './reservation-create-response/reservation-create-response';
import { CancelModalComponent } from './cancel-modal/cancel-modal.component';
import { StaffBookingPlanComponent } from './staff/staff-booking-plan/staff-booking-plan.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservationCreateComponent,
    ReservationDeleteComponent,
    ReservationDetailsComponent,
    ReservationMenuComponent,
    TablesComponent,
    StaffMenuComponent,
    StaffCurrentReservationsComponent,
    ReservationCreateResponseComponent,
    CancelModalComponent,
    StaffBookingPlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    BootstrapModalModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
