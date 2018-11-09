import { Table } from './Table';
import { Person } from './Person';

export class Reservation {
    reservation_id: String;
    table: Table;
    person: Person;
    created_at: Date;
    res_day: Date;
    timeduration_min: number;
    number_of_person: number;
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
