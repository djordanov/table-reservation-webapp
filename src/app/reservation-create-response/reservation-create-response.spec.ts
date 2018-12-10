import { ReservationCreateResponseComponent } from './reservation-create-response';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes, Router } from '@angular/router';
import { ReservationMenuComponent } from '../reservation-menu/reservation-menu';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from '../templates/header/header.component';

describe('ReservationMenuComponent ', () => {
    let component: ReservationCreateResponseComponent;
    let fixture: ComponentFixture<ReservationCreateResponseComponent>;
    let router: Router;

    const routes: Routes = [
        { path: 'reservation', component: ReservationMenuComponent },
    ];

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ ReservationCreateResponseComponent, ReservationMenuComponent, HeaderComponent ],
            imports: [ RouterTestingModule.withRoutes(routes), NgbModule.forRoot() ]
          })
          .compileComponents();

        router = TestBed.get(Router);
        fixture = TestBed.createComponent(ReservationCreateResponseComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
      });

      it('should create component', () => {
        expect(component).toBeTruthy();
      });

      it('onBackClick() should navigate to reservation page', () => {
        const spy = spyOn(router, 'navigateByUrl');
        component.onBackClick();
        const url = spy.calls.first().args[0];
        expect(url).toEqual('reservation');
      });
});
