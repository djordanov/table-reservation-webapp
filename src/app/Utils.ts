import { Reservation } from './data-models/Reservation';
import { Table } from './data-models/Table';
import { reservationNotFound, reservationCancelled } from './Config';

const parseReservationResponse = (reservationResponse: any): Reservation => {
  // error handling...
  // undefined errors
  if (reservationResponse === null) {
    return null;
  }
  // reservation doesn't exist
  if (
    reservationResponse.result === 'error' &&
    reservationResponse.text === 'Falsche RES_ID'
  ) {
    throw new Error('Reservation doesn\'t exist');
  }
  // reservation was cancelled
  if (
    reservationResponse.result === 'error' &&
    reservationResponse.text === 'Durch Kunde storniert'
  ) {
    throw new Error('Reservation was cancelled');
  }

  const reservation = reservationResponse.info_res;
  reservation.table = reservationResponse.info_table;
  reservation.person = reservationResponse.info_person;
  return reservation;
};

const parseTablesResponse = (tablesResponse: any): Table[] => {
  if (tablesResponse.result === 'error') {
    alert('Coudn\t access tables for some reason'); // TODO better error message
    return;
  }

  return tablesResponse.table.map(tableResponse => {
    return parseTableResponse(tableResponse);
  });
};

const parseTableResponse = (tableResponse: any): Table => {
  const table: Table = new Table(tableResponse.table_id);
  for (const key of tableResponse) {
    table[key] = tableResponse[key];
  }
  return table;
};

export { parseReservationResponse, parseTablesResponse };
