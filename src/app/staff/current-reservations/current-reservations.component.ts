import { Component, OnInit } from '@angular/core';
import { Table } from 'src/app/data-models/Table';
import { TableService } from 'src/app/services/table.service';

import { parseTablesResponse } from '../../Utils';

@Component({
  selector: 'app-current-reservations',
  templateUrl: './current-reservations.component.html',
  styleUrls: ['./current-reservations.component.css']
})
export class StaffCurrentReservationsComponent implements OnInit {
  tables: Table[];

  constructor(private tableService: TableService) {}

  ngOnInit() {
    this.fetchReservations();
  }

  fetchReservations() {
    this.tableService.getCurrentTableStatus().subscribe(response => {
      const tables = parseTablesResponse(response);
      this.tables = tables.filter(table => table.res);
    });
  }
}
