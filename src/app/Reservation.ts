import { Table } from './Table';
import { Customer } from './Customer';

export class Reservation {
    id: String;
    table: Table;
    customer: Customer;
    date: Date;
    numberOfPersons: number;
}
