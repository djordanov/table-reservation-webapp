import { TablesComponent } from './tables.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableReservationStatus } from 'src/app/data-models/TableReservationStatus';
import { By } from '@angular/platform-browser';

describe('TablesComponent ', () => {
    let component: TablesComponent;
    let fixture: ComponentFixture<TablesComponent>;

    const tableData: TableReservationStatus[] = [
        { table_id: '1', row: 1, col: 1, type: '2', frei: true },
        { table_id: '2', row: 1, col: 2, type: '2', frei: true },
        { table_id: '3', row: 2, col: 1, type: '2', frei: false },
        { table_id: '4', row: 2, col: 2, type: '4', frei: true },
        { table_id: '5', row: 3, col: 1, type: '4', frei: true },
        { table_id: '6', row: 3, col: 2, type: '4', frei: false },
    ];

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ TablesComponent ],
          })
          .compileComponents();

        fixture = TestBed.createComponent(TablesComponent);
        component = fixture.componentInstance;
        component.isClickable = true;
        component.tableData = tableData;
        fixture.detectChanges();
      });

      it('should create component', () => {
        expect(component).toBeTruthy();
      });

      it('should include free table for two picture', () => {
        const table = tableData[0];
        const row = fixture.debugElement.query(By.css('#row-' + table.row));
        const column: HTMLElement = row.query(By.css('.column-' + table.col)).nativeElement;
        const image: HTMLCollectionOf<HTMLImageElement> = column.getElementsByTagName('img');
        expect(table.type).toEqual('2');
        expect(image[0].className).toEqual('img-fluid table-2');
        expect(image[0].src).toEqual('http://localhost:9876/assets/images/Tisch2_wei%C3%9F.png');
      });

      it('should include reserved table for two picture', () => {
        const table = tableData[2];
        const row = fixture.debugElement.query(By.css('#row-' + table.row));
        const column: HTMLElement = row.query(By.css('.column-' + table.col)).nativeElement;
        const image: HTMLCollectionOf<HTMLImageElement> = column.getElementsByTagName('img');
        expect(table.type).toEqual('2');
        expect(image[0].className).toEqual('img-fluid table-2');
        expect(image[0].src).toEqual('http://localhost:9876/assets/images/Tisch2_grau.png');
      });

      it('should include free table for four picture', () => {
        const table = tableData[3];
        const row = fixture.debugElement.query(By.css('#row-' + table.row));
        const column: HTMLElement = row.query(By.css('.column-' + table.col)).nativeElement;
        const image: HTMLCollectionOf<HTMLImageElement> = column.getElementsByTagName('img');
        expect(table.type).toEqual('4');
        expect(image[0].className).toEqual('img-fluid table-1');
        expect(image[0].src).toEqual('http://localhost:9876/assets/images/Tisch1_wei%C3%9F.png');
      });

      it('should include reserved table for four picture', () => {
        const table = tableData[5];
        const row = fixture.debugElement.query(By.css('#row-' + table.row));
        const column: HTMLElement = row.query(By.css('.column-' + table.col)).nativeElement;
        const image: HTMLCollectionOf<HTMLImageElement> = column.getElementsByTagName('img');
        expect(table.type).toEqual('4');
        expect(image[0].className).toEqual('img-fluid table-1');
        expect(image[0].src).toEqual('http://localhost:9876/assets/images/Tisch1_grau.png');
      });
});
