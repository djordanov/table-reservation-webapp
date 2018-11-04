import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';

import { ReservationCreateComponent } from './reservation-create/reservation-create.component';
import { ReservationDeleteComponent } from './reservation-delete/reservation-delete.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { ReservationMenuComponent } from './reservation-menu/reservation-menu';

@NgModule({
  declarations: [
    AppComponent,
    ReservationCreateComponent,
    ReservationDeleteComponent,
    ReservationDetailsComponent,
    ReservationMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
