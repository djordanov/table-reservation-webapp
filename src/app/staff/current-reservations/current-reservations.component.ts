import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Reservation } from 'src/app/data-models/Reservation';
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
  reservations: Reservation[];

  constructor(
    private tableService: TableService,
    private fb: FormBuilder,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.fetchReservations();
  }

  onSubmit() {
    this.fetchReservations();
  }

  onClickDelete(reservation) {
    const modalRef = this.modalService.open(CancelModalComponent);
    modalRef.componentInstance.reservation = reservation;
  }

  fetchReservations() {
    const datestr =
      this.form.get('date').value + 'T' + this.form.get('time').value;
    const date = new Date(datestr);
    this.tableService.getTableStatus(date).subscribe(response => {
      const tables = parseTablesResponse(response);
      const occTables = tables.filter(table => table.res);

      // get all reservations from tables
      const reservations = [];
      for (const table of occTables) {
        const arrRes = table.res;
        if (arrRes) {
          for (const res of arrRes) {
            res.table = table;
            reservations.push(res);
          }
        }
      }
      this.reservations = reservations;
    });
  }
}
