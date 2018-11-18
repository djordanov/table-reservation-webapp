import { TableTypes } from './TableTypes';

export class TableReservationStatus {
    table_id: string;
    row: number;
    col: number;
    type: string;
    isReserved?: boolean;
    isSelected?: boolean;
}
