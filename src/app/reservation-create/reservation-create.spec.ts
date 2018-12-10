import { ReservationCreateComponent } from './reservation-create.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ReservationService } from '../services/reservation.service';
import { TableService } from '../services/table.service';
import { HeaderComponent } from '../templates/header/header.component';
import { TablesComponent } from '../templates/tables/tables.component';
import { ReservationCreateResponseComponent } from '../reservation-create-response/reservation-create-response';
import { NgbModule, NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { Week } from '../data-models/Restaurant';
import { CreateReservationResponse } from '../data-models/Reservation';
import { of } from 'rxjs';

describe('ReservationCreateComponent ', () => {
    let component: ReservationCreateComponent;
    let fixture: ComponentFixture<ReservationCreateComponent>;
    let reservationService: ReservationService;
    let tableService: TableService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ ReservationCreateComponent, HeaderComponent, TablesComponent,
                ReservationCreateResponseComponent ],
            imports: [ NgbModule.forRoot(), FormsModule, HttpClientTestingModule ],
            providers: [ ReservationService, TableService ],
          })
          .compileComponents();

        fixture = TestBed.createComponent(ReservationCreateComponent);
        component = fixture.componentInstance;
        reservationService = TestBed.get(ReservationService);
        tableService = TestBed.get(TableService);
        fixture.detectChanges();
      });

      it('should create component', () => {
        expect(component).toBeTruthy();
      });

      it('should set hours', () => {
        const hours: number[] = [14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
        expect(component.hours).toEqual(hours);
      });

      it('getClosedDays() should return closed days', () => {
          const week: Week = {
              monday: { weekday: 'monday', ruhetag: true, open: '00:00', close: '00:00' },
              tuesday: { weekday: 'tuesday', ruhetag: true, open: '00:00', close: '00:00' },
              wednesday: { weekday: 'wednesday', ruhetag: true, open: '00:00', close: '00:00' },
              thursday: { weekday: 'thursday', ruhetag: true, open: '00:00', close: '00:00' },
              friday: { weekday: 'friday', ruhetag: true, open: '00:00', close: '00:00' },
              saturday: { weekday: 'saturday', ruhetag: true, open: '00:00', close: '00:00' },
              sunday: { weekday: 'sunday', ruhetag: true, open: '00:00', close: '00:00' },
             };
        const closedDays = [1];
        expect(component.getClosedDays(week)).toEqual(closedDays);
      });

      it('onTableClicked() should add table to reservation, if table is active', () => {
        component.reservation.tableID = undefined;
        fixture.detectChanges();
        component.onTableClicked(1);
        fixture.detectChanges();
        expect(component.reservation.tableID).toEqual(1);
      });

      it('onTableClicked() should remove table from reservation, if table was added', () => {
        component.reservation.tableID = 1;
        fixture.detectChanges();
        component.onTableClicked(1);
        fixture.detectChanges();
        expect(component.reservation.tableID).toEqual(undefined);
      });

      it('createReservation() should send createReservation request and save response', () => {
        const response: CreateReservationResponse = {
            result: 'succesful',
            text: '',
            res_id: 1,
            res_pid: '1'
        };
        spyOn(reservationService, 'createReservation').and.returnValue(of(response));
        component.createReservation();
        fixture.detectChanges();
        expect(component.isReservationRequestSend).toBe(true);
        component.response$.subscribe(res => expect(res).toEqual(response));
      });

      it('onDateEditClick() should set isDateOnEdit to true', () => {
        component.onDateEditClick();
        fixture.detectChanges();
        expect(component.isDateOnEdit).toEqual(true);
      });

      it('getDate() should get Date', () => {
        const ngbDate: NgbDate = new NgbDate(2018, 2, 1);

        const date = new Date();
        date.setFullYear(2018);
        date.setMonth(1);
        date.setDate(1);

        expect(component.getDate(ngbDate)).toEqual(date);
      });

      it('disableTimeButton() should return false, if date, hour, or minute is not set', () => {
        component.reservation.date = new NgbDate(2018, 2, 1);
        component.reservation.hour = '14';
        component.reservation.minute = '30';
        fixture.detectChanges();
        expect(component.disableTimeButton()).toEqual(false);
      });

      it('disableEditTimeButton() should return false, if date, hour, or minute is not set', () => {
        component.reservationTime.date = new NgbDate(2018, 2, 1);
        component.reservationTime.hour = '14';
        component.reservationTime.minute = '30';
        fixture.detectChanges();
        expect(component.disableEditTimeButton()).toEqual(false);
      });

      it('disableReservationButton() should return false, if not all reservation input fields are set', () => {
        component.reservation =  { rest_id: 1, tableID: 1, firstName: 'Max', lastName: 'Mustermann',
            telephoneNumber: '012345678', email: 'maxmustermann@test.de', numberOfPersons: 2,
            date: new NgbDate(2018, 2, 1), hour: '18', minute: '00' };
        fixture.detectChanges();
        expect(component.disableReservationButton()).toEqual(false);
      });

      it('disableInputField() should return true, if date is on edit', () => {
        component.isDateOnEdit = true;
        fixture.detectChanges();
        expect(component.disableInputField()).toEqual(true);
      });
});
