import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TableReservationStatus } from 'src/app/data-models/TableReservationStatus';
import { TableTypes } from 'src/app/data-models/TableTypes';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.html',
  styleUrls: ['./tables.css']
})
export class TablesComponent implements OnInit {
    @Input() isClickable: boolean;
    @Input() tableData: TableReservationStatus[];
    @Output() tableClicked = new EventEmitter<string>();

    columns = [1, 2, 3, 4, 5];


    constructor() {}

    ngOnInit() {
        if (this.tableData) {
            this.tableData.forEach(table => {
                const row = document.getElementById('row-' + table.row);
                if (row) {
                    const columns = row.getElementsByClassName('column-' + table.col);
                    if (columns.length === 1) {
                        const column = columns[0];
                        column.addEventListener('click', this.onTableClick, false);
                        const img = new Image();
                        img.setAttribute('id', table.id);
                        if (table.type === TableTypes['Tisch 1']) {
                            img.setAttribute('class', 'img-fluid table-1');
                            if (table.isReserved) {
                                img.src = '../../../assets/images/Tisch1_grau.png';
                            } else {
                                img.src = '../../../assets/images/Tisch1_weiß.png';
                            }
                        } else {
                            img.setAttribute('class', 'img-fluid table-2');
                            if (table.isReserved) {
                                img.src = '../../../assets/images/Tisch2_grau.png';
                            } else {
                                img.src = '../../../assets/images/Tisch2_weiß.png';
                            }
                        }
                        column.appendChild(img);
                    }
                }
            });
        }
    }

    onTableClick = (element: MouseEvent) => {
        this.tableClicked.emit(element.srcElement.id);
    }
}
