import { Reservation } from './data-models/Reservation';
import { Table } from './data-models/Table';

const parseReservationResponse = (reservationResponse: any): Reservation => {
  if (reservationResponse.result === 'error') {
    alert('Coudn\t access reservation for some reason'); // TODO better error message
    return;
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
    if (key === 'res') {
      table.res = parseReservationResponse(tableResponse[key]);
    } else {
      table[key] = tableResponse[key];
    }
  }
  return table;
};

export { parseReservationResponse, parseTablesResponse };
