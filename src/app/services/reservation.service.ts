import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Reservation } from '../data-models/Reservation';
import { RESERVATIONS } from '../mock-reservations';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor() { }

  getReservation(id: String): Observable<Reservation> {
    const reservation = RESERVATIONS.find(r => r.id === id);
    return of(reservation);
  }
}
