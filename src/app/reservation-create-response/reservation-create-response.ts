import { Component, OnInit, Input } from '@angular/core';
import { CreateReservation, CreateReservationResponse } from '../data-models/Reservation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reservation-create-response',
  templateUrl: './reservation-create-response.html',
  styleUrls: ['./reservation-create-response.css']
})
export class ReservationCreateResponseComponent {

    @Input() reservation: CreateReservation;
    @Input() response: CreateReservationResponse;

  constructor(private router: Router) {
  }

  onBackClick() {
    this.router.navigateByUrl('reservation');
  }

  addZero(i): string {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  }
}
