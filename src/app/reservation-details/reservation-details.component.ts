import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Reservation } from '../data-models/Reservation';
import { ReservationService } from '../services/reservation.service';

import { parseReservationResponse } from '../Utils';

@Component({
  selector: 'app-reservation-details',
  templateUrl: './reservation-details.html',
  styleUrls: ['./reservation-details.css']
})
export class ReservationDetailsComponent {
  form = this.fb.group({
    reservationNumber: ['Reservierungsnummer', Validators.required]
  });
  reservation: Reservation;

  constructor(
    private reservationService: ReservationService,
    private fb: FormBuilder
  ) {}

  onSubmit() {
    this.getReservation(this.form.get('reservationNumber').value);
  }

  getReservation(id: String): void {
    this.reservationService.getReservation(id).subscribe(response => {
      this.reservation = parseReservationResponse(response);
    });
  }
}
