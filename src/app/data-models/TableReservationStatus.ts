export class GetTablesResponse {
    result: boolean;
    rest_id: string;
    table:  TableReservationStatus[];
}

export class TableReservationStatus {
    table_id: string;
    row: number;
    col: number;
    type: string;
    frei: boolean;
    isSelected?: boolean;
}
