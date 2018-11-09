import { Component } from '@angular/core';

import { Reservation } from '../data-models/Reservation';
import { ReservationService } from '../services/reservation.service';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.html',
  styleUrls: ['./reservation-details.css']
})
export class ReservationDetailsComponent {
  reservation: Reservation;

  constructor(private reservationService: ReservationService) {}

  getReservation(id: String): void {
    this.reservationService.getReservation(id)
      .subscribe(response => {
        this.parseReservationResponse(response);
      });
  }

  parseReservationResponse(reservationResponse: any): void {
    this.reservation = reservationResponse.info_res;
    this.reservation.table = reservationResponse.info_table;
    this.reservation.person = reservationResponse.info_person;
  }
}
