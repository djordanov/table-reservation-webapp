import { Component } from '@angular/core';
import { StringMap } from '@angular/compiler/src/compiler_facade_interface';

import { Reservation } from '../Reservation';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.html',
  styleUrls: ['./reservation-details.css']
})
export class ReservationDetailsComponent {
  reservation: Reservation;

  constructor(private reservationService: ReservationService) {}

  getReservation(id: String): void {
    alert('reservation id: ' + id);
    this.reservationService.getReservation(id)
      .subscribe(reservation => this.reservation = reservation);
  }
}
