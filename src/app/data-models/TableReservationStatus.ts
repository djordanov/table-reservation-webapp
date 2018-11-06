import { TableTypes } from './TableTypes';

export class TableReservationStatus {
    id: string;
    row: number;
    col: number;
    type: TableTypes;
    isReserved: boolean;
    isSelected?: boolean;
}
