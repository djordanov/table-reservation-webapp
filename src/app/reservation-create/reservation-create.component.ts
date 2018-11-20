import { Component, OnInit } from '@angular/core';
import { TableReservationStatus, GetTablesResponse } from '../data-models/TableReservationStatus';
import { TableTypes } from '../data-models/TableTypes';
import { ReservationService } from '../services/reservation.service';
import { CreateReservation } from '../data-models/Reservation';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-reservation-create',
  templateUrl: './reservation-create.html',
  styleUrls: ['./reservation-create.css']
})
export class ReservationCreateComponent implements OnInit {

  isDateAndTimeSet = false;
  isDateOnEdit = false;

  reservationTime: { date: Date, time: String } = { date: undefined, time: undefined };

  reservation: CreateReservation = {
    tableID: undefined, firstName: '', lastName: '', telephoneNumber: '',
    email: '', numberOfPersons: undefined, date: undefined, time: undefined,
    rest_id: 1,
  };

  tables$: Observable<GetTablesResponse>;

  constructor(private reservationService: ReservationService) {
  }

  ngOnInit() {
    this.tables$ = this.reservationService.getTables();
  }

  onTableClicked(tableID: number) {
    if (this.reservation.tableID === tableID) {
      this.reservation.tableID = undefined;
    } else {
      this.reservation.tableID = tableID;
    }
  }

  createReservation() {
    this.reservationService.createReservation(this.reservation).subscribe();
  }

  setDateAndTime() {
    if (this.reservation.time && this.reservation.date) {
      this.isDateAndTimeSet = true;
      this.reservationTime.date = this.reservation.date;
      this.reservationTime.time = this.reservation.time;
      this.tables$ = this.reservationService.getTablesByDateAndTime({
        rest_id: 1,
        date: this.reservation.date,
        time: this.reservation.time,
      });
    }
  }

  onDateEditClick() {
    this.isDateOnEdit = true;
  }

  backButtonClicked() {
    this.isDateOnEdit = false;
  }

  setNewDateAndTime() {
    if (this.reservationTime.time && this.reservationTime.date) {
      this.reservation.date = this.reservationTime.date;
      this.reservation.time = this.reservationTime.time;
      this.isDateOnEdit = false;
      this.tables$ = this.reservationService.getTablesByDateAndTime({
        rest_id: 1,
        date: this.reservation.date,
        time: this.reservation.time,
      });
    }
  }
}
