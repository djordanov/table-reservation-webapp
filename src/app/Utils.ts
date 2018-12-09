import { Reservation } from './data-models/Reservation';
import { Table } from './data-models/Table';
import { reservationNotFound, reservationCancelled } from './Config';

const parseReservationResponse = (reservationResponse: any): Reservation => {
  // error handling...
  // undefined errors
  if (reservationResponse === null) {
    return null;
  }

  if (reservationResponse.result === 'error') {
    // reservation doesn't exist
    if (reservationResponse.text === 'Falsche RES_PID') {
      throw new Error(reservationNotFound);
    }
    // reservation was cancelled
    if (reservationResponse.text === 'Durch Kunde storniert') {
      throw new Error(reservationCancelled);
    }
    // default
    throw new Error(reservationResponse.text);
  }

  const reservation = reservationResponse.info_res;
  if (reservationResponse.info_table) {
    reservation.table = reservationResponse.info_table;
  }
  reservation.person = reservationResponse.info_person;
  return reservation;
};

const parseTableResponse = (tableResponse: any): Table => {
  const table: Table = new Table(tableResponse.table_id);
  for (const key of Object.keys(tableResponse)) {
    table[key] = tableResponse[key];
  }
  return table;
};

const parseTablesResponse = (tablesResponse: any): Table[] => {
  if (tablesResponse.result === 'error') {
    throw new Error(tablesResponse.text);
  }

  return tablesResponse.table.map(tableResponse => {
    return parseTableResponse(tableResponse);
  });
};

export { parseReservationResponse, parseTablesResponse };
