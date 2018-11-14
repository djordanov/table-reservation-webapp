import { Reservation } from './Reservation';

export class Table {
    'table_id': String;
    'rest_id': String;
    'row': number;
    'col': number;
    'nuberofseats': number;
    'res': Reservation;
    'frei': number;

    constructor(table_id) {
        this.table_id = table_id;
    }
}
