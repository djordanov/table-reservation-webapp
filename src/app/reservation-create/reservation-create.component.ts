import { Component, OnInit } from '@angular/core';
import { GetTablesResponse } from '../data-models/TableReservationStatus';
import { ReservationService } from '../services/reservation.service';
import { TableService } from '../services/table.service';
import { CreateReservation, CreateReservationResponse } from '../data-models/Reservation';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-reservation-create',
  templateUrl: './reservation-create.html',
  styleUrls: ['./reservation-create.css']
})
export class ReservationCreateComponent implements OnInit {

  isDateAndTimeSet = false;
  isDateOnEdit = false;
  isReservationRequestSend = false;

  today = new Date();
  formattedToday = this.today.getDate() + '-' + (this.today.getMonth() + 1) + '-' + this.today.getFullYear();

  reservationTime: { date: Date, hour: String; minute: String } = { date: undefined, hour: '', minute: '' };

  hours: string[] = [];
  minutes: string[] = ['00', '15', '30', '45'];

  reservation: CreateReservation = {
    tableID: undefined, firstName: '', lastName: '', telephoneNumber: '',
    email: '', numberOfPersons: undefined, date: undefined,
    rest_id: 1, hour: '', minute: '',
  };

  response$: Observable<CreateReservationResponse>;

  tables$: Observable<GetTablesResponse>;

  constructor(private reservationService: ReservationService,
    private tableService: TableService) {
  }

  ngOnInit() {
    this.tables$ = this.tableService.getTables();
    for (let i = 0; i < 24; i++) {
      this.hours.push(this.addZero(i));
    }
  }

  addZero(i): string {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  }

  onTableClicked(tableID: number) {
    if (this.reservation.tableID === tableID) {
      this.reservation.tableID = undefined;
    } else {
      this.reservation.tableID = tableID;
    }
  }

  createReservation() {
    this.isReservationRequestSend = true;
    this.response$ = this.reservationService.createReservation(this.reservation);
  }

  setDateAndTime() {
    if (this.reservation.hour && this.reservation.minute && this.reservation.date) {
      this.isDateAndTimeSet = true;
      this.reservationTime.date = this.reservation.date;
      this.reservationTime.hour = this.reservation.hour;
      this.reservationTime.minute = this.reservation.minute;
      this.tables$ = this.tableService.getTablesByDateAndTime({
        rest_id: 1,
        date: this.reservation.date,
        time: this.reservation.hour + ':' + this.reservation.minute,
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
    if (this.reservationTime.hour && this.reservation.minute && this.reservationTime.date) {
      this.reservation.date = this.reservationTime.date;
      this.reservation.hour = this.reservationTime.hour;
      this.reservation.minute = this.reservationTime.minute;
      this.isDateOnEdit = false;
      this.tables$ = this.tableService.getTablesByDateAndTime({
        rest_id: 1,
        date: this.reservation.date,
        time: this.reservation.hour + ':' + this.reservation.minute,
      });
    }
  }
}
