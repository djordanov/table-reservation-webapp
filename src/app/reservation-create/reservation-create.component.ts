import { Component } from '@angular/core';
import { TableReservationStatus } from '../data-models/TableReservationStatus';
import { TableTypes } from '../data-models/TableTypes';
import { ReservationService } from '../services/reservation.service';
import { CreateReservation } from '../data-models/Reservation';

@Component({
  selector: 'app-reservation-create',
  templateUrl: './reservation-create.html',
  styleUrls: ['./reservation-create.css']
})
export class ReservationCreateComponent {

  isDateAndTimeSet = false;
  isDateOnEdit = false;

  reservationTime: { date: Date, time: String } = { date: undefined, time: undefined };

  reservation: CreateReservation = {
    tableID: undefined, firstName: '', lastName: '', telephoneNumber: '',
    email: '', numberOfPersons: undefined, date: undefined, time: undefined,
    rest_id: 1,
  };

  tableData: TableReservationStatus[] = [
    {
      id: '1',
      row: 1,
      col: 1,
      type: TableTypes['Tisch 2'],
      isReserved: false,
    },
    {
      id: '2',
      row: 1,
      col: 3,
      type: TableTypes['Tisch 1'],
      isReserved: true,
    },
    {
      id: '3',
      row: 2,
      col: 2,
      type: TableTypes['Tisch 1'],
      isReserved: false,
    },
    {
      id: '4',
      row: 2,
      col: 4,
      type: TableTypes['Tisch 1'],
      isReserved: false,
    },
    {
      id: '5',
      row: 3,
      col: 1,
      type: TableTypes['Tisch 2'],
      isReserved: false,
    },
    {
      id: '6',
      row: 3,
      col: 3,
      type: TableTypes['Tisch 1'],
      isReserved: true,
    }
  ];

  constructor(private reservationService: ReservationService) {  }

  onTableClicked(tableID: number) {
    if (this.reservation.tableID === tableID) {
      this.reservation.tableID = undefined;
    } else {
      this.reservation.tableID = tableID;
    }
  }

  createReservation() {
    this.reservationService.createReservation(this.reservation);
  }

  setDateAndTime() {
    if (this.reservation.time && this.reservation.date) {
      this.isDateAndTimeSet = true;
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
    }
  }
}
