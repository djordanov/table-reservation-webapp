import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { Table } from 'src/app/data-models/Table';
import { TableService } from 'src/app/services/table.service';

import { parseTablesResponse } from '../../Utils';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-current-reservations',
  templateUrl: './current-reservations.component.html',
  styleUrls: ['./current-reservations.component.css']
})
export class StaffCurrentReservationsComponent implements OnInit {
  form = this.fb.group({
    date: formatDate(new Date(), 'yyyy-MM-dd', 'en_US'),
    time: formatDate(new Date(), 'mm:HH:ss', 'en_US')
  });
  tables: Table[];

  constructor(private tableService: TableService, private fb: FormBuilder) {}

  ngOnInit() {
    this.fetchReservations();
  }

  onSubmit() {
    this.fetchReservations();
  }

  fetchReservations() {
    const datestr =
      this.form.get('date').value + 'T' + this.form.get('time').value;
    const date = new Date(datestr);
    this.tableService.getTableStatus(date).subscribe(response => {
      const tables = parseTablesResponse(response);
      this.tables = tables.filter(table => table.res);
    });
  }
}
