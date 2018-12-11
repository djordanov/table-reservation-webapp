import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { NotifierService } from 'angular-notifier';

import { ReservationService } from '../services/reservation.service';
import { Reservation } from '../data-models/Reservation';

@Component({
  selector: 'app-cancel-modal',
  templateUrl: './cancel-modal.component.html',
  styleUrls: ['./cancel-modal.component.css']
})
export class CancelModalComponent implements OnInit {
  @Input() reservation: Reservation;
  constructor(
    private reservationService: ReservationService,
    public activeModal: NgbActiveModal,
    private notifierService: NotifierService
  ) {}

  ngOnInit() {}

  onConfirm() {
    // close modal
    this.activeModal.close('Close click');

    // and actually delete reservation
    this.reservationService
      .delete(this.reservation.res_pid)
      .subscribe(deleteResponse => {
        if (deleteResponse.result) {
          this.notifierService.notify(
            'success',
            'Reservierung wurde storniert!'
          );
        } else {
          this.notifierService.notify('warning', deleteResponse.text);
        }
      });
  }
}
