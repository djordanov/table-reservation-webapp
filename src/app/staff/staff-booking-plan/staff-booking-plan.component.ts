import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

import { Table } from '../../data-models/Table';
import { TableService } from '../../services/table.service';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-staff-booking-plan',
  templateUrl: './staff-booking-plan.component.html',
  styleUrls: ['./staff-booking-plan.component.css']
})
export class StaffBookingPlanComponent implements OnInit {

  tables: Table[];

  constructor(private tableService: TableService) {}

  ngOnInit() {
    const date = new Date;
    const body = {
      rest_id: 1,
      date: date.getFullYear() + '-' + this.addZero(date.getMonth() + 1) + '-' + this.addZero(date.getDate()),
      time: formatDate(new Date(), 'HH:mm', 'en_US')
    };
    this.tableService.getTablesByDateAndTime(body)
    .subscribe(tables => {
      this.tables = tables;
    });
  }

  addZero(i): string {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  }
}
