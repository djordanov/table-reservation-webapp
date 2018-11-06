import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Reservation, CreateReservation } from '../data-models/Reservation';
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

  delete(id: String): Observable<void> {
    return of(alert('Reservation Deletion not implemented yet'));
  }

  createReservation(payload: CreateReservation): Observable<void> {
    return of(alert('Reservation Create not implemented yet \n\n payload: ' + payload));
  }
}
