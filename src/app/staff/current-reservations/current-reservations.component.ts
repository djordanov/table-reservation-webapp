import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { Reservation } from 'src/app/data-models/Reservation';
import { TableService } from 'src/app/services/table.service';
import { ReservationService } from 'src/app/services/reservation.service';
import { CancelModalComponent } from '../../cancel-modal/cancel-modal.component';
import { parseTablesResponse } from '../../Utils';

@Component({
  selector: 'app-current-reservations',
  templateUrl: './current-reservations.component.html',
  styleUrls: ['./current-reservations.component.css']
})
export class StaffCurrentReservationsComponent implements OnInit {
  formDate = this.fb.group({
    date: formatDate(new Date(), 'yyyy-MM-dd', 'en_US'),
    time: formatDate(new Date(), 'HH:mm', 'en_US')
  });
  formQuery = this.fb.group({
    query: ''
  });
  baseReservations: Reservation[];
  filtRes: Reservation[];

  constructor(
    private tableService: TableService,
    private reservationService: ReservationService,
    private fb: FormBuilder,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    this.fetchReservations();
  }

  onSubmit() {
    this.fetchReservations();
    this.formQuery.get('query').setValue('');
  }

  deleteRes(reservation) {
    const modalRef = this.modalService.open(CancelModalComponent);
    modalRef.componentInstance.reservation = reservation;
  }

  confirmArrival(reservation) {
    this.reservationService.confirmArrival(reservation.res_pid).subscribe(resp => {
      if (resp.result === 'successful') {
        reservation.angekommen = '1';
      } else {
        alert(JSON.stringify(resp));
      }
    });
  }

  jumpCurrent() {
    this.formDate
      .get('date')
      .setValue(formatDate(new Date(), 'yyyy-MM-dd', 'en_US'));
    this.formDate
      .get('time')
      .setValue(formatDate(new Date(), 'HH:mm', 'en_US'));
    this.formQuery.get('query').setValue('');

    this.fetchReservations();
  }

  jumpNextHour() {
    const nextHour = new Date(new Date().getTime() + 1000 * 60 * 60);

    this.formDate
      .get('date')
      .setValue(formatDate(nextHour, 'yyyy-MM-dd', 'en_US'));
    this.formDate.get('time').setValue(formatDate(nextHour, 'HH:mm', 'en_US'));
    this.formQuery.get('query').setValue('');

    this.fetchReservations();
  }

  fetchReservations() {
    const datestr =
      this.formDate.get('date').value + 'T' + this.formDate.get('time').value;
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
      this.baseReservations = reservations;
      this.filtRes = reservations;
    });
  }

  /**
   * filter baseReservations based on search query
   * filters progressively. That means that it first tries to filter by table nr.
   * then if that doesn't return anything by number of persons
   * ...name, date, time and reservationnumber
   *
   * This could probably be done in a better way, but oh well
   */
  filterReservations() {
    // basically a massive if else ...
    const q = this.formQuery.get('query').value;

    if (q === '') {
      this.filtRes = this.baseReservations;
      return;
    }
    // name
    this.filtRes = this.baseReservations.filter(res =>
      res.person.name.includes(q)
    );
    if (this.filtRes && this.filtRes.length > 0) {
      return;
    }
    // table id
    this.filtRes = this.baseReservations.filter(res =>
      res.table.table_id.includes(q)
    );
    if (this.filtRes && this.filtRes.length > 0) {
      return;
    }
    // number of persons
    this.filtRes = this.baseReservations.filter(res =>
      res.number_of_person.toString().includes(q)
    );
    if (this.filtRes && this.filtRes.length > 0) {
      return;
    }
    // reservationnumber
    this.filtRes = this.baseReservations.filter(res => res.res_pid.includes(q));
    if (this.filtRes && this.filtRes.length > 0) {
      return;
    }
    // date is redundant, since we only ever show today
    // time
    this.filtRes = this.baseReservations.filter(res =>
      res.res_time.toString().includes(q)
    );
    if (this.filtRes && this.filtRes.length > 0) {
      return;
    }
    // nothing found
    this.filtRes = [];
  }
}
