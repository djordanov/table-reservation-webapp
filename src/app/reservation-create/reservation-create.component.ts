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
  reservation: CreateReservation = {
    tableID: '', firstname: '', lastname: '', telnr: '',
    email: '', numberOfPersons: undefined, date: undefined, duration: undefined,
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

  constructor(private reservationService: ReservationService) {}

  onTableClicked(tableID: string) {
    this.reservation.tableID = tableID;
  }

  createReservation() {
    this.reservationService.createReservation(this.reservation);
  }
}
