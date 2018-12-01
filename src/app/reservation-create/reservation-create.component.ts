import { Component, OnInit } from '@angular/core';
import { GetTablesResponse } from '../data-models/TableReservationStatus';
import { ReservationService } from '../services/reservation.service';
import { TableService } from '../services/table.service';
import { CreateReservation, CreateReservationResponse } from '../data-models/Reservation';
import { Observable, of } from 'rxjs';
import { NgbDateStruct, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Week } from '../data-models/Restaurant';

@Component({
  selector: 'app-reservation-create',
  templateUrl: './reservation-create.html',
  styleUrls: ['./reservation-create.css']
})
export class ReservationCreateComponent implements OnInit {

  isDateAndTimeSet = false;
  isDateOnEdit = false;
  isReservationRequestSend = false;

  date = new Date();
  minDate: NgbDateStruct = {year: this.date.getFullYear(), month: this.date.getMonth() + 1, day: this.date.getDate()};
  maxDate: NgbDateStruct = {year: this.date.getFullYear() + 1, month: this.date.getMonth() + 1, day: this.date.getDate()};

  reservationTime: { date: NgbDate, hour: String; minute: String } = { date: undefined, hour: '', minute: '' };

  hours: string[] = [];
  minutes: string[] = ['00', '15', '30', '45'];

  reservation: CreateReservation = {
    tableID: undefined, firstName: '', lastName: '', telephoneNumber: '',
    email: '', numberOfPersons: undefined, date: undefined,
    rest_id: 1, hour: '', minute: '',
  };

  isDisabled;

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
    this.reservationService.getOpeningHours('1').subscribe((week: Week) => {
      const closedDays = this.getClosedDays(week);

      this.isDisabled = (date: NgbDate, current: {month: number}) => {
        const day = this.getDate(date);
        let isClosed = false;
        closedDays.map(closedDay => {
          if (day.getDay() === closedDay && !isClosed) {
            isClosed = true;
          }
        });
        return isClosed;
      };
    });
  }

  getClosedDays(week: Week): number[] {
    const closedDays: number[] = [];
    if (week.monday.ruhetag) {
      closedDays.push(1);
    } else if (week.tuesday.ruhetag) {
      closedDays.push(2);
    } else if (week.wednesday.ruhetag) {
      closedDays.push(3);
    } else if (week.thursday.ruhetag) {
      closedDays.push(4);
    } else if (week.friday.ruhetag) {
      closedDays.push(5);
    } else if (week.saturday.ruhetag) {
      closedDays.push(6);
    } else if (week.sunday.ruhetag) {
      closedDays.push(0);
    }
    return closedDays;
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
        date: this.reservation.date.year + '-' + this.addZero(this.reservation.date.month) + '-' + this.addZero(this.reservation.date.day),
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
        date: this.reservation.date.year + '-' + this.addZero(this.reservation.date.month) + '-' + this.addZero(this.reservation.date.day),
        time: this.reservation.hour + ':' + this.reservation.minute,
      });
    }
  }

  getDate(day: NgbDate): Date {
    const date = new Date();
    date.setDate(day.day);
    date.setMonth(day.month - 1);
    date.setFullYear(day.year);
    return date;
  }
}
