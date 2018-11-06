import { Table } from './Table';
import { Time } from '@angular/common';
import { Customer } from './Customer';

export class Reservation {
    id: String;
    table: Table;
    customer: Customer;
    date: Date;
    numberOfPersons: number;
}

export class CreateReservation {
    tableID: String;
    firstname: String;
    lastname: String;
    telnr: String;
    email: String;
    numberOfPersons: number;
    date: Date;
    duration: number;
}
