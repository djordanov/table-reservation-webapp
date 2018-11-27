import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


import { ReservationService } from '../services/reservation.service';

import { parseReservationResponse } from '../Utils';
import { Reservation } from '../data-models/Reservation';
import { CancelModalComponent } from '../cancel-modal/cancel-modal.component';

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
    private fb: FormBuilder,
    private modalService: NgbModal
  ) {}

  onSubmit(): void {
    const modalRef = this.modalService.open(CancelModalComponent);
    modalRef.componentInstance.name = 'World';

    // this.onCancel(this.form.get('reservationNumber').value);
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
