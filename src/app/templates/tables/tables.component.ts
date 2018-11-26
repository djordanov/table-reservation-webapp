import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TableReservationStatus } from 'src/app/data-models/TableReservationStatus';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.html',
  styleUrls: ['./tables.css']
})
export class TablesComponent implements OnInit {
    @Input() isClickable: boolean;
    @Input() tableData: TableReservationStatus[];
    @Output() tableClicked = new EventEmitter<number>();

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
                        if (table.frei !== false && this.isClickable) {
                            column.addEventListener('click', this.onTableClick, false);
                        }
                        const img = new Image();
                        img.setAttribute('id', table.table_id);
                        if (table.type === '4') {
                            img.setAttribute('class', 'img-fluid table-1');
                            if (table.frei === false) {
                                img.src = '../../../assets/images/Tisch1_grau.png';
                            } else {
                                img.src = '../../../assets/images/Tisch1_weiß.png';
                            }
                        } else {
                            img.setAttribute('class', 'img-fluid table-2');
                            if (table.frei === false) {
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
        const srcElement = element.srcElement;
        const clickedReservations = document.getElementsByClassName('clicked');
        const img = new Image();

        if (clickedReservations.length !== 0 && clickedReservations[0].id === srcElement.id) {
            // set new reserved Img
            img.setAttribute('id', srcElement.id);
            if (element.srcElement.className.includes('table-1')) {
                img.setAttribute('class', 'img-fluid table-1');
                img.src = '../../../assets/images/Tisch1_weiß.png';
            } else {
                img.setAttribute('class', 'img-fluid table-2');
                img.src = '../../../assets/images/Tisch2_weiß.png';
            }
            srcElement.parentNode.append(img);
            srcElement.parentNode.removeChild(srcElement);
        } else {
            // reset old Img
            if (clickedReservations.length !== 0) {
                const currentClicked = clickedReservations[0];
                const oldImg = new Image();
                oldImg.setAttribute('id', currentClicked.id);
                if (currentClicked.className.includes('table-1')) {
                    oldImg.src = '../../../assets/images/Tisch1_weiß.png';
                    oldImg.setAttribute('class', 'img-fluid table-1');
                } else {
                    oldImg.src = '../../../assets/images/Tisch2_weiß.png';
                    oldImg.setAttribute('class', 'img-fluid table-2');
                }
                clickedReservations[0].parentNode.append(oldImg);
                clickedReservations[0].parentNode.removeChild(clickedReservations[0]);
            }

            // set new reserved Img
            img.setAttribute('id', srcElement.id);
            img.setAttribute('class', srcElement.className + ' clicked');
            if (element.srcElement.className.includes('table-1')) {
                img.src = '../../../assets/images/Tisch1_gruen.png';
            } else {
                img.src = '../../../assets/images/Tisch2_gruen.png';
            }
            srcElement.parentNode.append(img);
            srcElement.parentNode.removeChild(srcElement);
    }
    // emit tableID
    this.tableClicked.emit(parseInt(srcElement.id, 10));
    }
}
