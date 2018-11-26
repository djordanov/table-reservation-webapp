import { Table } from './Table';
import { Person } from './Person';

export class Reservation {
    reservation_id: String;
    table: Table;
    person: Person;
    created_at: Date;
    res_day: Date;
    res_time: Date;
    timeduration_min: number;
    number_of_person: number;
}

export class CreateReservation {
    rest_id: number;
    tableID: number;
    firstName: String;
    lastName: String;
    telephoneNumber: String;
    email: String;
    numberOfPersons: number;
    date: Date;
    time: String;
}

export class CreateReservationResponse {
    result: string;
    text: string;
    res_id: number;
    res_pid: string;
}

export class TableReservedRequestPayload {
    rest_id: number;
    date: Date;
    time: String;
}
