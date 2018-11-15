import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Modal } from 'ngx-modialog/plugins/bootstrap';

import { ReservationService } from '../services/reservation.service';
import { Reservation } from '../data-models/Reservation';

import { parseReservationResponse } from '../Utils';

@Component({
  selector: 'app-reservation-delete',
  templateUrl: './reservation-delete.html',
  styleUrls: ['./reservation-delete.css']
})
export class ReservationDeleteComponent {
  form = this.fb.group({
    firstName: ['Vorname', Validators.required],
    familyName: ['Familienname', Validators.required],
    reservationNumber: ['Reservierungsnummer', Validators.required]
  });

  constructor(
    private reservationService: ReservationService,
    private fb: FormBuilder,
    public modal: Modal
  ) {}

  onSubmit(): void {
    this.onCancel(
      this.form.get('firstName').value,
      this.form.get('familyName').value,
      this.form.get('reservationNumber').value
    );
  }

  onCancel(
    firstName: String,
    familyName: String,
    reservationNumber: String
  ): void {
    const name = firstName + ' ' + familyName;
    this.reservationService
      .getReservation(reservationNumber)
      .subscribe(reservationResponse => {
        const reservation = parseReservationResponse(reservationResponse);
        if (reservation.person.name === name) {
          this.openConfirm(reservation);
        } else {
          alert('Name doesn\'t match reservation number');
        }
      });
  }

  openConfirm(reservation: Reservation) {
    const dialogRef = this.modal
      .confirm()
      .size('lg') // TODO fix date format.
      .body(
        `
          <h2>Sind Sie sicher, dass Sie folgende Reservierung stornieren wollen?</h2>
          <div class="container float-right mt-5 ml-4">
            <p>Name: ${reservation.person.name}</p>
            <p>Personen: ${reservation.number_of_person}</p>
            <p>Tisch: ${reservation.table.table_id}</p>
            <p>Datum: ${reservation.res_day}</p>
            <p>Zeit: ${reservation.res_time}</p>
            <p>Dauer: ${reservation.timeduration_min} min.</p>
          </div>
          `
      )
      .open();

    dialogRef.result.then(result =>
      this.deleteReservation(reservation.reservation_id)
    );
  }

  deleteReservation(reservationID: String): void {
    this.reservationService
      .getReservation(reservationID)
      .subscribe(reservationResponse => {
        if (!reservationResponse) {
          // specified reservation is missing
          return;
        }

        const reservation_id = reservationResponse.info_res.reservation_id; // TODO add error handling
        this.reservationService
          .delete(reservation_id)
          .subscribe(deleteResponse => {
            // TODO [minor] this is pretty bad
            console.log(deleteResponse); // TODO remove
            if (deleteResponse.result) {
              alert('Reservation storniert!');
            } else {
              alert(deleteResponse.text);
            }
          });
      });
  }
}
