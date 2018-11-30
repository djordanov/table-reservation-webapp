import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

import { Table } from '../../data-models/Table';
import { TableService } from '../../services/table.service';

@Component({
  selector: 'app-staff-booking-plan',
  templateUrl: './staff-booking-plan.component.html',
  styleUrls: ['./staff-booking-plan.component.css']
})
export class StaffBookingPlanComponent implements OnInit {

  tables: Table[];

  constructor(private tableService: TableService) {}

  ngOnInit() {
    const body = {
      rest_id: 1,
      date: new Date(),
      time: formatDate(new Date(), 'HH:mm', 'en_US')
    };
    this.tableService.getTablesByDateAndTime(body)
    .subscribe(tables => {
      this.tables = tables;
    });
  }
}
