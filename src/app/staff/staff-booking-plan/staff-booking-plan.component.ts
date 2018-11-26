import { Component, OnInit } from '@angular/core';

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
    this.tableService.getTables()
    .subscribe(tables => {
      this.tables = tables;
    });
  }
}
