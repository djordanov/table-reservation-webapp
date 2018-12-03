import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotifierModule, NotifierOptions } from 'angular-notifier';

// icons
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import { ReservationCreateComponent } from './reservation-create/reservation-create.component';
import { ReservationDeleteComponent } from './reservation-delete/reservation-delete.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { ReservationMenuComponent } from './reservation-menu/reservation-menu';
import { TablesComponent } from './templates/tables/tables.component';

import { StaffMenuComponent } from './staff/menu/staff-menu.component';
import { StaffCurrentReservationsComponent } from './staff/current-reservations/current-reservations.component';
import { ReservationCreateResponseComponent } from './reservation-create-response/reservation-create-response';
import { HeaderComponent } from './templates/header/header.component';
import { CancelModalComponent } from './cancel-modal/cancel-modal.component';
import { StaffBookingPlanComponent } from './staff/staff-booking-plan/staff-booking-plan.component';

const notificationConfig: NotifierOptions = {
  position: {
    horizontal: {
      position: 'right'
    },
    vertical: {
      position: 'top'
    }
  },
  behaviour: {
    onClick: 'hide',
    showDismissButton: false
  }
};

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
    HeaderComponent,
    CancelModalComponent,
    StaffBookingPlanComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    NgbModule.forRoot(),
    NotifierModule.withConfig(notificationConfig),
    FontAwesomeModule
  ],
  entryComponents: [CancelModalComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    library.add(faCaretUp);
    library.add(faCaretDown);
  }
}
