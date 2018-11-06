import { Reservation } from './data-models/Reservation';
import { TABLES } from './mock-tables';
import { CUSTOMERS } from './mock-customers';

export const RESERVATIONS: Reservation[] = [
  { id: '1', customer: CUSTOMERS[0], table: TABLES[0], date: new Date(), numberOfPersons: 1},
  { id: '2', customer: CUSTOMERS[1], table: TABLES[1], date: new Date(), numberOfPersons: 2},
  { id: '3', customer: CUSTOMERS[2], table: TABLES[2], date: new Date(), numberOfPersons: 3},
  { id: '4', customer: CUSTOMERS[3], table: TABLES[3], date: new Date(), numberOfPersons: 4},
  { id: '5', customer: CUSTOMERS[4], table: TABLES[4], date: new Date(), numberOfPersons: 5},
  { id: '6', customer: CUSTOMERS[5], table: TABLES[5], date: new Date(), numberOfPersons: 6},
  { id: '7', customer: CUSTOMERS[6], table: TABLES[6], date: new Date(), numberOfPersons: 7},
  { id: '8', customer: CUSTOMERS[7], table: TABLES[7], date: new Date(), numberOfPersons: 8},
  { id: '9', customer: CUSTOMERS[8], table: TABLES[8], date: new Date(), numberOfPersons: 9},
  { id: '10', customer: CUSTOMERS[9], table: TABLES[9], date: new Date(), numberOfPersons: 10},
  { id: '11', customer: CUSTOMERS[10], table: TABLES[10], date: new Date(), numberOfPersons: 11},
];

