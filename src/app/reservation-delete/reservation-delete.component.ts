import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ReservationService } from '../services/reservation.service';

import { parseReservationResponse } from '../Utils';
import { reservDMatchName } from '../Config';
import { Reservation } from '../data-models/Reservation';

@Component({
  selector: 'app-reservation-delete',
  templateUrl: './reservation-delete.html',
  styleUrls: ['./reservation-delete.css']
})
export class ReservationDeleteComponent {
  error: Error;
  openConfirm: boolean;
  reservation: Reservation;
  form = this.fb.group({
    reservationNumber: ['Reservierungsnummer', Validators.required]
  });

  constructor(
    private reservationService: ReservationService,
    private fb: FormBuilder
  ) {}

  onSubmit(): void {
    this.onCancel(this.form.get('reservationNumber').value);
  }

  onCancel(reservationNumber: String): void {
    this.reservationService
      .getReservation(reservationNumber)
      .subscribe(reservationResponse => {
        try {
          this.reservation = parseReservationResponse(reservationResponse);
          this.openConfirm = true;
        } catch (err) {
          this.error = err;
        }
      });
  }
}
