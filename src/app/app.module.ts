import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlertModule } from 'ngx-bootstrap';

import { ModalModule } from 'ngx-modialog';
import { BootstrapModalModule } from 'ngx-modialog/plugins/bootstrap';

import { ReservationCreateComponent } from './reservation-create/reservation-create.component';
import { ReservationDeleteComponent } from './reservation-delete/reservation-delete.component';
import { ReservationDetailsComponent } from './reservation-details/reservation-details.component';
import { ReservationMenuComponent } from './reservation-menu/reservation-menu';
import { TablesComponent } from './templates/tables/tables.component';

@NgModule({
  declarations: [
    AppComponent,
    ReservationCreateComponent,
    ReservationDeleteComponent,
    ReservationDetailsComponent,
    ReservationMenuComponent,
    TablesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
