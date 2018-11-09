import { Component } from '@angular/core';

import { Modal } from 'ngx-modialog/plugins/bootstrap';
import { ReservationService } from '../services/reservation.service';
import { Reservation } from '../data-models/Reservation';

@Component({
  selector: 'app-reservation-delete',
  templateUrl: './reservation-delete.html',
  styleUrls: ['./reservation-delete.css']
})
export class ReservationDeleteComponent {
  constructor(private reservationService: ReservationService, public modal: Modal) {}

  onCancel(firstName: String, familyName: String, reservationNumber: String): void {
    const name = firstName + '' + familyName;
    this.reservationService.getReservation(reservationNumber)
      .subscribe(reservation => {
        if (reservation.customer.name === name) {
          this.openConfirm(reservation);
        } else {
          alert('Name doesn\'t match reservation number');
        }
      });
  }

  openConfirm(reservation: Reservation) {
    const dialogRef = this.modal.confirm()
      .size('lg')
      .body(`
          <h2>Sind Sie sicher, dass Sie folgende Reservierung stornieren wollen?</h2>
          <div class="container float-right mt-5 ml-4">
            <p>Name: ${reservation.person.name}</p>
            <p>Personen: ${reservation.number_of_person}</p>
            <p>Tisch: ${reservation.table.table_id}</p>
            <p>Datum: ${reservation.res_day.toLocaleDateString('de-DE')}</p>
            <p>Zeit: ${reservation.res_day.getHours() + ':' + reservation.res_day.getMinutes()}</p>
          </div>
          `)
      .open();

    dialogRef.result
      .then( result => this.deleteReservation(reservation.reservation_id) );
  }

  deleteReservation(reservationID: String): void {
    this.reservationService.getReservation(reservationID)
      .subscribe(reservation => {
        this.reservationService.delete(reservation.id);
      });
  }
}
