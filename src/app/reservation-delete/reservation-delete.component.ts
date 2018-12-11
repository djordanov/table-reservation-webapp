import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ReservationService } from '../services/reservation.service';

import { parseReservationResponse } from '../Utils';
import { CancelModalComponent } from '../cancel-modal/cancel-modal.component';

@Component({
  selector: 'app-reservation-delete',
  templateUrl: './reservation-delete.html',
  styleUrls: ['./reservation-delete.css']
})
export class ReservationDeleteComponent {
  error: Error;
  openConfirm: boolean;
  form = this.fb.group({
    reservationNumber: ['Reservierungsnummer', Validators.required]
  });

  constructor(
    private reservationService: ReservationService,
    private fb: FormBuilder,
    private modalService: NgbModal
  ) {}

  onSubmit(): void {
    this.onCancel(this.form.get('reservationNumber').value);
  }

  /**
   * fetch reservation and open reservation cancellation modal
   */
  onCancel(reservationNumber: String): void {
    this.reservationService
      .getReservation(reservationNumber)
      .subscribe(reservationResponse => {
        try {
          const reservation = parseReservationResponse(reservationResponse);
          const modalRef = this.modalService.open(CancelModalComponent);
          modalRef.componentInstance.reservation = reservation;
        } catch (err) {
          this.error = err;
        }
      });
  }
}
