import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ReservationService } from '../services/reservation.service';
import { Reservation } from '../data-models/Reservation';

@Component({
  selector: 'app-cancel-modal',
  templateUrl: './cancel-modal.component.html',
  styleUrls: ['./cancel-modal.component.css']
})
export class CancelModalComponent implements OnInit {
  @Input() reservation: Reservation;
  @Input() name: String;
  constructor(private reservationService: ReservationService,
    public activeModal: NgbActiveModal) {}

  ngOnInit() {}

  onConfirm() {
    // close modal
    this.activeModal.close('Close click');

    // and actually delete reservation
    this.reservationService
      .delete(this.reservation.res_pid)
      .subscribe(deleteResponse => {
        if (deleteResponse.result) {
          alert('Reservation storniert!');
        } else {
          alert(deleteResponse.text);
        }
      });
  }
}
