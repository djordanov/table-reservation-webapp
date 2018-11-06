import { Table } from './Table';
import { Time } from '@angular/common';

export class Reservation {
    id: String;
    table: Table;
    date: Date;
    duration?: Time;
    numberOfPersons: number;
}
