import { Table } from './Table';
import { Time } from '@angular/common';
import { Customer } from '../Customer';

export class Reservation {
    id: String;
    table: Table;
    customer: Customer;
    date: Date;
    duration?: Time;
    numberOfPersons: number;
}
