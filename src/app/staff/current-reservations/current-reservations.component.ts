import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { Modal } from 'ngx-modialog/plugins/bootstrap';
import { FormBuilder, Validators } from '@angular/forms';

import { Table } from 'src/app/data-models/Table';
import { TableService } from 'src/app/services/table.service';
import { CancelModalComponent } from '../../cancel-modal/cancel-modal.component';
import { parseTablesResponse } from '../../Utils';

@Component({
  selector: 'app-current-reservations',
  templateUrl: './current-reservations.component.html',
  styleUrls: ['./current-reservations.component.css']
})
export class StaffCurrentReservationsComponent implements OnInit {
  form = this.fb.group({
    date: formatDate(new Date(), 'yyyy-MM-dd', 'en_US'),
    time: formatDate(new Date(), 'HH:mm:ss', 'en_US')
  });
  tables: Table[];

  constructor(
    private tableService: TableService,
    private fb: FormBuilder,
    public modal: Modal
  ) {}

  ngOnInit() {
    this.fetchReservations();
  }

  onSubmit() {
    this.fetchReservations();
  }

  onClickMe() {
    console.log('onClickMe');
    const dialogRef = this.modal.open(CancelModalComponent);
  }

  onClickDelete() {
    console.log('In onClickDelete');
    const dialogRef = this.modal.open(CancelModalComponent);
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
