import { Component } from '@angular/core';

import { Overlay } from 'ngx-modialog';
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
      .showClose(true)
      .title('Stornierung Bestätigen')
      .body(`
          <h3>Sind Sie sicher, dass Sie folgende Reservierung stornieren wollen?</h3>
          <p>Name: ${reservation.customer.name}</p>
          <p>Personen: ${reservation.numberOfPersons}</p>
          <p>Tisch: ${reservation.table.id}</p>
          <p>Datum: ${reservation.date.toLocaleDateString('de-DE')}</p>
          <p>Zeit: ${reservation.date.getHours() + ':' + reservation.date.getMinutes()}</p>
          `)
      .open();

    dialogRef.result
      .then( result => this.deleteReservation(reservation.id) );
  }

  deleteReservation(reservationID: String): void {
    this.reservationService.getReservation(reservationID)
      .subscribe(reservation => {
        this.reservationService.delete(reservation.id);
      });
  }
}
