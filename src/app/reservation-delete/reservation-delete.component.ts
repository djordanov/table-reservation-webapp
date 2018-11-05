import { Component } from '@angular/core';

import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation-delete',
  templateUrl: './reservation-delete.html',
  styleUrls: ['./reservation-delete.css']
})
export class ReservationDeleteComponent {
  constructor(private reservationService: ReservationService) {}

  cancelReservation(firstName: String, familyName: String, reservationNumber: String): void {
    const name = firstName + '' + familyName;
    this.reservationService.getReservation(reservationNumber)
      .subscribe(reservation => {
        if (reservation.customer.name === name) {
          if (confirm('Do you really, reaaaaalleeeyyyyy want to cancel your reservation?')) {
            this.reservationService.delete(reservation.id);
          }
        } else {
          alert('Name doesn\'t match reservation number');
        }
      });
  }
}
