import { Reservation } from './Reservation';
import { TABLES } from './mock-tables';

export const RESERVATIONS: Reservation[] = [
  { id: '1', table: TABLES[0], date: new Date(), numberOfPersons: 1},
  { id: '2', table: TABLES[1], date: new Date(), numberOfPersons: 2},
  { id: '3', table: TABLES[2], date: new Date(), numberOfPersons: 3},
  { id: '4', table: TABLES[3], date: new Date(), numberOfPersons: 4},
  { id: '5', table: TABLES[4], date: new Date(), numberOfPersons: 5},
  { id: '6', table: TABLES[5], date: new Date(), numberOfPersons: 6},
  { id: '7', table: TABLES[6], date: new Date(), numberOfPersons: 7},
  { id: '8', table: TABLES[7], date: new Date(), numberOfPersons: 8},
  { id: '9', table: TABLES[8], date: new Date(), numberOfPersons: 9},
  { id: '10', table: TABLES[9], date: new Date(), numberOfPersons: 10},
  { id: '11', table: TABLES[10], date: new Date(), numberOfPersons: 11},
];

