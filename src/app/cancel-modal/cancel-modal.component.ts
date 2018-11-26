import { Component, OnInit, Input } from '@angular/core';

import { ReservationService } from '../services/reservation.service';
import { Reservation } from '../data-models/Reservation';

@Component({
  selector: 'app-cancel-modal',
  templateUrl: './cancel-modal.component.html',
  styleUrls: ['./cancel-modal.component.css']
})
export class CancelModalComponent implements OnInit {
  @Input() reservation: Reservation;
  constructor(private reservationService: ReservationService) {}

  ngOnInit() {}

  onConfirm() {
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
