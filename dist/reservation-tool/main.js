(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Config.js":
/*!***************************!*\
  !*** ./src/app/Config.js ***!
  \***************************/
/*! exports provided: baseURL, reservationNotFound, reservationCancelled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseURL", function() { return baseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reservationNotFound", function() { return reservationNotFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reservationCancelled", function() { return reservationCancelled; });
var baseURL = 'https://lustigtestt.de/php';
var reservationNotFound = 'Reservierung existiert nicht';
var reservationCancelled = 'Reservierung wurde storniert';
//# sourceMappingURL=Config.js.map

/***/ }),

/***/ "./src/app/Config.ts":
/*!***************************!*\
  !*** ./src/app/Config.ts ***!
  \***************************/
/*! exports provided: baseURL, reservationNotFound, reservationCancelled */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseURL", function() { return baseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reservationNotFound", function() { return reservationNotFound; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reservationCancelled", function() { return reservationCancelled; });
var baseURL = 'https://lustigtestt.de/php';
var reservationNotFound = 'Reservierung existiert nicht';
var reservationCancelled = 'Reservierung wurde storniert';


/***/ }),

/***/ "./src/app/Utils.ts":
/*!**************************!*\
  !*** ./src/app/Utils.ts ***!
  \**************************/
/*! exports provided: parseReservationResponse, parseTablesResponse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseReservationResponse", function() { return parseReservationResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseTablesResponse", function() { return parseTablesResponse; });
/* harmony import */ var _data_models_Table__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data-models/Table */ "./src/app/data-models/Table.ts");
/* harmony import */ var _Config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Config */ "./src/app/Config.ts");


var parseReservationResponse = function (reservationResponse) {
    // error handling...
    // undefined errors
    if (reservationResponse === null) {
        return null;
    }
    if (reservationResponse.result === 'error') {
        // reservation doesn't exist
        if (reservationResponse.text === 'Falsche RES_PID') {
            throw new Error(_Config__WEBPACK_IMPORTED_MODULE_1__["reservationNotFound"]);
        }
        // reservation was cancelled
        if (reservationResponse.text === 'Durch Kunde storniert') {
            throw new Error(_Config__WEBPACK_IMPORTED_MODULE_1__["reservationCancelled"]);
        }
        // default
        throw new Error(reservationResponse.text);
    }
    var reservation = reservationResponse.info_res;
    if (reservationResponse.info_table) {
        reservation.table = reservationResponse.info_table;
    }
    reservation.person = reservationResponse.info_person;
    return reservation;
};
var parseTableResponse = function (tableResponse) {
    var table = new _data_models_Table__WEBPACK_IMPORTED_MODULE_0__["Table"](tableResponse.table_id);
    for (var _i = 0, _a = Object.keys(tableResponse); _i < _a.length; _i++) {
        var key = _a[_i];
        table[key] = tableResponse[key];
    }
    return table;
};
var parseTablesResponse = function (tablesResponse) {
    if (tablesResponse.result === 'error') {
        throw new Error(tablesResponse.text);
    }
    return tablesResponse.table.map(function (tableResponse) {
        return parseTableResponse(tableResponse);
    });
};



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _reservation_menu_reservation_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reservation-menu/reservation-menu */ "./src/app/reservation-menu/reservation-menu.ts");
/* harmony import */ var _reservation_create_reservation_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reservation-create/reservation-create.component */ "./src/app/reservation-create/reservation-create.component.ts");
/* harmony import */ var _reservation_details_reservation_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./reservation-details/reservation-details.component */ "./src/app/reservation-details/reservation-details.component.ts");
/* harmony import */ var _reservation_delete_reservation_delete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reservation-delete/reservation-delete.component */ "./src/app/reservation-delete/reservation-delete.component.ts");
/* harmony import */ var _staff_menu_staff_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./staff/menu/staff-menu.component */ "./src/app/staff/menu/staff-menu.component.ts");
/* harmony import */ var _staff_current_reservations_current_reservations_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./staff/current-reservations/current-reservations.component */ "./src/app/staff/current-reservations/current-reservations.component.ts");
/* harmony import */ var _staff_staff_booking_plan_staff_booking_plan_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./staff/staff-booking-plan/staff-booking-plan.component */ "./src/app/staff/staff-booking-plan/staff-booking-plan.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '', redirectTo: 'reservation', pathMatch: 'full' },
    { path: 'reservation', component: _reservation_menu_reservation_menu__WEBPACK_IMPORTED_MODULE_2__["ReservationMenuComponent"] },
    { path: 'reservation/create', component: _reservation_create_reservation_create_component__WEBPACK_IMPORTED_MODULE_3__["ReservationCreateComponent"] },
    { path: 'reservation/details', component: _reservation_details_reservation_details_component__WEBPACK_IMPORTED_MODULE_4__["ReservationDetailsComponent"] },
    { path: 'reservation/delete', component: _reservation_delete_reservation_delete_component__WEBPACK_IMPORTED_MODULE_5__["ReservationDeleteComponent"] },
    { path: 'staff/menu', component: _staff_menu_staff_menu_component__WEBPACK_IMPORTED_MODULE_6__["StaffMenuComponent"] },
    {
        path: 'staff/current-reservations',
        component: _staff_current_reservations_current_reservations_component__WEBPACK_IMPORTED_MODULE_7__["StaffCurrentReservationsComponent"]
    },
    {
        path: 'staff/reservations',
        component: _reservation_create_reservation_create_component__WEBPACK_IMPORTED_MODULE_3__["ReservationCreateComponent"],
    },
    {
        path: 'staff/booking-plan',
        component: _staff_staff_booking_plan_staff_booking_plan_component__WEBPACK_IMPORTED_MODULE_8__["StaffBookingPlanComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<router-outlet></router-outlet>\n<notifier-container></notifier-container>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'reservation-tool';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _reservation_create_reservation_create_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./reservation-create/reservation-create.component */ "./src/app/reservation-create/reservation-create.component.ts");
/* harmony import */ var _reservation_delete_reservation_delete_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./reservation-delete/reservation-delete.component */ "./src/app/reservation-delete/reservation-delete.component.ts");
/* harmony import */ var _reservation_details_reservation_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./reservation-details/reservation-details.component */ "./src/app/reservation-details/reservation-details.component.ts");
/* harmony import */ var _reservation_menu_reservation_menu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./reservation-menu/reservation-menu */ "./src/app/reservation-menu/reservation-menu.ts");
/* harmony import */ var _templates_tables_tables_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./templates/tables/tables.component */ "./src/app/templates/tables/tables.component.ts");
/* harmony import */ var _staff_menu_staff_menu_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./staff/menu/staff-menu.component */ "./src/app/staff/menu/staff-menu.component.ts");
/* harmony import */ var _staff_current_reservations_current_reservations_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./staff/current-reservations/current-reservations.component */ "./src/app/staff/current-reservations/current-reservations.component.ts");
/* harmony import */ var _reservation_create_response_reservation_create_response__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./reservation-create-response/reservation-create-response */ "./src/app/reservation-create-response/reservation-create-response.ts");
/* harmony import */ var _templates_header_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./templates/header/header.component */ "./src/app/templates/header/header.component.ts");
/* harmony import */ var _cancel_modal_cancel_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./cancel-modal/cancel-modal.component */ "./src/app/cancel-modal/cancel-modal.component.ts");
/* harmony import */ var _staff_staff_booking_plan_staff_booking_plan_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./staff/staff-booking-plan/staff-booking-plan.component */ "./src/app/staff/staff-booking-plan/staff-booking-plan.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// icons














var notificationConfig = {
    position: {
        horizontal: {
            position: 'right'
        },
        vertical: {
            position: 'top'
        }
    },
    behaviour: {
        onClick: 'hide',
        showDismissButton: false
    }
};
var AppModule = /** @class */ (function () {
    function AppModule() {
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_10__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faCaretUp"]);
        _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_10__["library"].add(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_11__["faCaretDown"]);
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _reservation_create_reservation_create_component__WEBPACK_IMPORTED_MODULE_12__["ReservationCreateComponent"],
                _reservation_delete_reservation_delete_component__WEBPACK_IMPORTED_MODULE_13__["ReservationDeleteComponent"],
                _reservation_details_reservation_details_component__WEBPACK_IMPORTED_MODULE_14__["ReservationDetailsComponent"],
                _reservation_menu_reservation_menu__WEBPACK_IMPORTED_MODULE_15__["ReservationMenuComponent"],
                _templates_tables_tables_component__WEBPACK_IMPORTED_MODULE_16__["TablesComponent"],
                _staff_menu_staff_menu_component__WEBPACK_IMPORTED_MODULE_17__["StaffMenuComponent"],
                _staff_current_reservations_current_reservations_component__WEBPACK_IMPORTED_MODULE_18__["StaffCurrentReservationsComponent"],
                _reservation_create_response_reservation_create_response__WEBPACK_IMPORTED_MODULE_19__["ReservationCreateResponseComponent"],
                _templates_header_header_component__WEBPACK_IMPORTED_MODULE_20__["HeaderComponent"],
                _cancel_modal_cancel_modal_component__WEBPACK_IMPORTED_MODULE_21__["CancelModalComponent"],
                _staff_staff_booking_plan_staff_booking_plan_component__WEBPACK_IMPORTED_MODULE_22__["StaffBookingPlanComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"].forRoot(),
                angular_notifier__WEBPACK_IMPORTED_MODULE_8__["NotifierModule"].withConfig(notificationConfig),
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"]
            ],
            entryComponents: [_cancel_modal_cancel_modal_component__WEBPACK_IMPORTED_MODULE_21__["CancelModalComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cancel-modal/cancel-modal.component.css":
/*!*********************************************************!*\
  !*** ./src/app/cancel-modal/cancel-modal.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbmNlbC1tb2RhbC9jYW5jZWwtbW9kYWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/cancel-modal/cancel-modal.component.html":
/*!**********************************************************!*\
  !*** ./src/app/cancel-modal/cancel-modal.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\n  <h4 class=\"modal-title\">Sind Sie sicher, dass Sie folgende Reservierung\n    stornieren wollen?</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div class=\"container float-right mt-5 ml-4\">\n    <p>Reservierungsnummer: {{reservation.res_pid}}</p>\n    <p>Name: {{reservation.person.name}}</p>\n    <p>Personen: {{reservation.number_of_person}}</p>\n    <p>Tisch: {{reservation.table.table_id}}</p>\n    <p>Datum: {{reservation.res_day}}</p>\n    <p>Zeit: {{reservation.res_time}}</p>\n  </div>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-primary btn-sm\" (click)=\"onConfirm()\">\n    Ja, bitte Reservierung stornieren\n  </button>\n</div>\n"

/***/ }),

/***/ "./src/app/cancel-modal/cancel-modal.component.ts":
/*!********************************************************!*\
  !*** ./src/app/cancel-modal/cancel-modal.component.ts ***!
  \********************************************************/
/*! exports provided: CancelModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CancelModalComponent", function() { return CancelModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_notifier__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-notifier */ "./node_modules/angular-notifier/esm5/angular-notifier.js");
/* harmony import */ var _services_reservation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/reservation.service */ "./src/app/services/reservation.service.ts");
/* harmony import */ var _data_models_Reservation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data-models/Reservation */ "./src/app/data-models/Reservation.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CancelModalComponent = /** @class */ (function () {
    function CancelModalComponent(reservationService, activeModal, notifierService) {
        this.reservationService = reservationService;
        this.activeModal = activeModal;
        this.notifierService = notifierService;
    }
    CancelModalComponent.prototype.ngOnInit = function () { };
    CancelModalComponent.prototype.onConfirm = function () {
        var _this = this;
        // close modal
        this.activeModal.close('Close click');
        // and actually delete reservation
        this.reservationService
            .delete(this.reservation.res_pid)
            .subscribe(function (deleteResponse) {
            if (deleteResponse.result) {
                _this.notifierService.notify('success', 'Reservierung wurde storniert!');
            }
            else {
                _this.notifierService.notify('warning', deleteResponse.text);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _data_models_Reservation__WEBPACK_IMPORTED_MODULE_4__["Reservation"])
    ], CancelModalComponent.prototype, "reservation", void 0);
    CancelModalComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cancel-modal',
            template: __webpack_require__(/*! ./cancel-modal.component.html */ "./src/app/cancel-modal/cancel-modal.component.html"),
            styles: [__webpack_require__(/*! ./cancel-modal.component.css */ "./src/app/cancel-modal/cancel-modal.component.css")]
        }),
        __metadata("design:paramtypes", [_services_reservation_service__WEBPACK_IMPORTED_MODULE_3__["ReservationService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"],
            angular_notifier__WEBPACK_IMPORTED_MODULE_2__["NotifierService"]])
    ], CancelModalComponent);
    return CancelModalComponent;
}());



/***/ }),

/***/ "./src/app/data-models/Reservation.ts":
/*!********************************************!*\
  !*** ./src/app/data-models/Reservation.ts ***!
  \********************************************/
/*! exports provided: Reservation, CreateReservation, CreateReservationResponse, TableReservedRequestPayload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Reservation", function() { return Reservation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateReservation", function() { return CreateReservation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateReservationResponse", function() { return CreateReservationResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableReservedRequestPayload", function() { return TableReservedRequestPayload; });
var Reservation = /** @class */ (function () {
    function Reservation() {
    }
    return Reservation;
}());

var CreateReservation = /** @class */ (function () {
    function CreateReservation() {
    }
    return CreateReservation;
}());

var CreateReservationResponse = /** @class */ (function () {
    function CreateReservationResponse() {
    }
    return CreateReservationResponse;
}());

var TableReservedRequestPayload = /** @class */ (function () {
    function TableReservedRequestPayload() {
    }
    return TableReservedRequestPayload;
}());



/***/ }),

/***/ "./src/app/data-models/Table.ts":
/*!**************************************!*\
  !*** ./src/app/data-models/Table.ts ***!
  \**************************************/
/*! exports provided: Table */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return Table; });
var Table = /** @class */ (function () {
    function Table(table_id) {
        this.table_id = table_id;
    }
    return Table;
}());



/***/ }),

/***/ "./src/app/reservation-create-response/reservation-create-response.css":
/*!*****************************************************************************!*\
  !*** ./src/app/reservation-create-response/reservation-create-response.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2VydmF0aW9uLWNyZWF0ZS1yZXNwb25zZS9yZXNlcnZhdGlvbi1jcmVhdGUtcmVzcG9uc2UuY3NzIn0= */"

/***/ }),

/***/ "./src/app/reservation-create-response/reservation-create-response.html":
/*!******************************************************************************!*\
  !*** ./src/app/reservation-create-response/reservation-create-response.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"response?.result === 'successful'\" class=\"row mt-2\">\n    <div class=\"col-md-7 ml-2\">\n        <h3>Reservierung {{response?.res_pid}} bitte bestätigen!</h3>\n        <span>Sehr geehrte/ geehrter {{reservation?.firstName}} {{reservation?.lastName}}</span><br><br>\n        <span>Sie haben am <strong>{{addZero(reservation?.date.day)}}-{{addZero(reservation?.date.month)}}-{{reservation?.date.year}}</strong> um <strong>{{reservation?.hour}}</strong> Uhr einen Tisch für <strong>{{reservation?.numberOfPersons}}</strong> Personen in unserem Restaurant reserviert.</span><br>\n        <span>Bitte bestätigen Sie Ihre Reservierung innerhalb der nächsten Stunde, um diese erfolgreich abzuschließen.</span><br>\n        <span>Sie müssen einfach auf den Link in der Bestätigungsmail ihrer Reservierung klicken.</span><br><br>\n        <span>Mit freundlichen Grüßen</span><br>\n        <span>Max Mustermann</span>\n        <button class=\"btn btn-primary btn-block mt-2\" (click)=\"onBackClick()\">Zurück zur Hauptseite</button>\n    </div>\n    <div class=\"col-md-4 ml-2 mr-2\">\n        <img src=\"../../assets/images/create-reservation-success.jpg\" class=\"rounded mx-auto d-block col-md-12 mt-2\" alt=\"Success_Image\">\n    </div>\n</div>\n<div *ngIf=\"response?.result === 'error'\" class=\"row mt-2\">\n        <div class=\"col-md-5 ml-2\">\n            <h1>Reservierung ist fehlgeschlagen!</h1>\n            <span>Es lag folgender Fehler vor: <strong>{{response?.text}}</strong></span><br>\n            <button class=\"btn btn-primary btn-block mt-2\" (click)=\"onBackClick()\">Zurück zur Hauptseite</button>\n        </div>\n        <div class=\"col-md-6 ml-2 mr-2\">\n            <img src=\"../../assets/images/create-reservation-error.jpg\" class=\"rounded mx-auto d-block col-md-12 mt-2\" alt=\"Success_Image\">\n        </div>\n</div>"

/***/ }),

/***/ "./src/app/reservation-create-response/reservation-create-response.ts":
/*!****************************************************************************!*\
  !*** ./src/app/reservation-create-response/reservation-create-response.ts ***!
  \****************************************************************************/
/*! exports provided: ReservationCreateResponseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationCreateResponseComponent", function() { return ReservationCreateResponseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_models_Reservation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data-models/Reservation */ "./src/app/data-models/Reservation.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReservationCreateResponseComponent = /** @class */ (function () {
    function ReservationCreateResponseComponent(router) {
        this.router = router;
    }
    ReservationCreateResponseComponent.prototype.onBackClick = function () {
        this.router.navigateByUrl('reservation');
    };
    ReservationCreateResponseComponent.prototype.addZero = function (i) {
        if (i < 10) {
            i = '0' + i;
        }
        return i;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _data_models_Reservation__WEBPACK_IMPORTED_MODULE_1__["CreateReservation"])
    ], ReservationCreateResponseComponent.prototype, "reservation", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _data_models_Reservation__WEBPACK_IMPORTED_MODULE_1__["CreateReservationResponse"])
    ], ReservationCreateResponseComponent.prototype, "response", void 0);
    ReservationCreateResponseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reservation-create-response',
            template: __webpack_require__(/*! ./reservation-create-response.html */ "./src/app/reservation-create-response/reservation-create-response.html"),
            styles: [__webpack_require__(/*! ./reservation-create-response.css */ "./src/app/reservation-create-response/reservation-create-response.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ReservationCreateResponseComponent);
    return ReservationCreateResponseComponent;
}());



/***/ }),

/***/ "./src/app/reservation-create/reservation-create.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/reservation-create/reservation-create.component.ts ***!
  \********************************************************************/
/*! exports provided: ReservationCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationCreateComponent", function() { return ReservationCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_reservation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/reservation.service */ "./src/app/services/reservation.service.ts");
/* harmony import */ var _services_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/table.service */ "./src/app/services/table.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReservationCreateComponent = /** @class */ (function () {
    function ReservationCreateComponent(reservationService, tableService) {
        this.reservationService = reservationService;
        this.tableService = tableService;
        this.isDateAndTimeSet = false;
        this.isDateOnEdit = false;
        this.isReservationRequestSend = false;
        this.date = new Date();
        this.minDate = { year: this.date.getFullYear(), month: this.date.getMonth() + 1, day: this.date.getDate() };
        this.maxDate = { year: this.date.getFullYear() + 1, month: this.date.getMonth() + 1, day: this.date.getDate() };
        this.reservationTime = { date: undefined, hour: '', minute: '' };
        this.hours = [];
        this.minutes = ['00', '15', '30', '45'];
        this.reservation = {
            tableID: undefined, firstName: undefined, lastName: undefined, telephoneNumber: undefined,
            email: undefined, numberOfPersons: undefined, date: undefined,
            rest_id: 1, hour: undefined, minute: undefined,
        };
    }
    ReservationCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tables$ = this.tableService.getTables();
        for (var i = 14; i < 24; i++) {
            this.hours.push(i);
        }
        this.reservationService.getOpeningHours('1').subscribe(function (week) {
            var closedDays = _this.getClosedDays(week);
            _this.isDisabled = function (date, current) {
                var day = _this.getDate(date);
                var isClosed = false;
                closedDays.map(function (closedDay) {
                    if (day.getDay() === closedDay && !isClosed) {
                        isClosed = true;
                    }
                });
                return isClosed;
            };
        });
    };
    ReservationCreateComponent.prototype.getClosedDays = function (week) {
        var closedDays = [];
        if (week.monday.ruhetag) {
            closedDays.push(1);
        }
        else if (week.tuesday.ruhetag) {
            closedDays.push(2);
        }
        else if (week.wednesday.ruhetag) {
            closedDays.push(3);
        }
        else if (week.thursday.ruhetag) {
            closedDays.push(4);
        }
        else if (week.friday.ruhetag) {
            closedDays.push(5);
        }
        else if (week.saturday.ruhetag) {
            closedDays.push(6);
        }
        else if (week.sunday.ruhetag) {
            closedDays.push(0);
        }
        return closedDays;
    };
    ReservationCreateComponent.prototype.addZero = function (i) {
        if (i < 10) {
            i = '0' + i;
        }
        return i;
    };
    ReservationCreateComponent.prototype.onTableClicked = function (tableID) {
        if (this.reservation.tableID === tableID) {
            this.reservation.tableID = undefined;
        }
        else {
            this.reservation.tableID = tableID;
        }
    };
    ReservationCreateComponent.prototype.createReservation = function () {
        this.isReservationRequestSend = true;
        this.response$ = this.reservationService.createReservation(this.reservation);
    };
    ReservationCreateComponent.prototype.setDateAndTime = function () {
        this.isDateAndTimeSet = true;
        this.reservationTime.date = this.reservation.date;
        this.reservationTime.hour = this.reservation.hour;
        this.reservationTime.minute = this.reservation.minute;
        this.tables$ = this.tableService.getTablesByDateAndTime({
            rest_id: 1,
            date: this.reservation.date.year + '-' + this.addZero(this.reservation.date.month) + '-' + this.addZero(this.reservation.date.day),
            time: this.reservation.hour + ':' + this.reservation.minute,
        });
    };
    ReservationCreateComponent.prototype.onDateEditClick = function () {
        this.isDateOnEdit = true;
    };
    ReservationCreateComponent.prototype.backButtonClicked = function () {
        this.isDateOnEdit = false;
    };
    ReservationCreateComponent.prototype.setNewDateAndTime = function () {
        this.reservation.date = this.reservationTime.date;
        this.reservation.hour = this.reservationTime.hour;
        this.reservation.minute = this.reservationTime.minute;
        this.isDateOnEdit = false;
        this.tables$ = this.tableService.getTablesByDateAndTime({
            rest_id: 1,
            date: this.reservation.date.year + '-' + this.addZero(this.reservation.date.month) + '-' + this.addZero(this.reservation.date.day),
            time: this.reservation.hour + ':' + this.reservation.minute,
        });
    };
    ReservationCreateComponent.prototype.getDate = function (day) {
        var date = new Date();
        date.setDate(day.day);
        date.setMonth(day.month - 1);
        date.setFullYear(day.year);
        return date;
    };
    ReservationCreateComponent.prototype.disableTimeButton = function () {
        var isDisabled = true;
        if (this.reservation.hour && this.reservation.minute && this.reservation.date) {
            isDisabled = false;
        }
        return isDisabled;
    };
    ReservationCreateComponent.prototype.disableEditTimeButton = function () {
        var isDisabled = true;
        if (this.reservationTime.hour && this.reservationTime.minute && this.reservationTime.date) {
            isDisabled = false;
        }
        return isDisabled;
    };
    ReservationCreateComponent.prototype.disableReservationButton = function () {
        var isDisabled = true;
        if (this.reservation.date && this.reservation.email && this.reservation.email.length !== 0 &&
            this.reservation.firstName && this.reservation.firstName.length !== 0 && this.reservation.hour &&
            this.reservation.lastName && this.reservation.lastName.length !== 0 && this.reservation.minute &&
            this.reservation.numberOfPersons && this.reservation.rest_id && this.reservation.tableID &&
            this.reservation.telephoneNumber) {
            isDisabled = false;
        }
        return isDisabled;
    };
    ReservationCreateComponent.prototype.disableInputField = function () {
        var isDisabled = false;
        if (this.isDateOnEdit) {
            isDisabled = true;
        }
        return isDisabled;
    };
    ReservationCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reservation-create',
            template: __webpack_require__(/*! ./reservation-create.html */ "./src/app/reservation-create/reservation-create.html"),
            styles: [__webpack_require__(/*! ./reservation-create.css */ "./src/app/reservation-create/reservation-create.css")]
        }),
        __metadata("design:paramtypes", [_services_reservation_service__WEBPACK_IMPORTED_MODULE_1__["ReservationService"],
            _services_table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"]])
    ], ReservationCreateComponent);
    return ReservationCreateComponent;
}());



/***/ }),

/***/ "./src/app/reservation-create/reservation-create.css":
/*!***********************************************************!*\
  !*** ./src/app/reservation-create/reservation-create.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type='number'] {\n    -moz-appearance:textfield;\n}\n\ninput::-webkit-outer-spin-button,\ninput::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXJ2YXRpb24tY3JlYXRlL3Jlc2VydmF0aW9uLWNyZWF0ZS5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEI7Q0FDN0I7O0FBRUQ7O0lBRUkseUJBQXlCO0NBQzVCIiwiZmlsZSI6InNyYy9hcHAvcmVzZXJ2YXRpb24tY3JlYXRlL3Jlc2VydmF0aW9uLWNyZWF0ZS5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dFt0eXBlPSdudW1iZXInXSB7XG4gICAgLW1vei1hcHBlYXJhbmNlOnRleHRmaWVsZDtcbn1cblxuaW5wdXQ6Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24sXG5pbnB1dDo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/reservation-create/reservation-create.html":
/*!************************************************************!*\
  !*** ./src/app/reservation-create/reservation-create.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [role]=\"'Kunde'\" [title]=\"'Reservierung anlegen'\"></app-header>\n<ng-container *ngIf=\"tables$ | async as tables\">\n<div *ngIf=\"isReservationRequestSend\">\n    <ng-container *ngIf=\"response$ | async as response\">\n        <app-reservation-create-response [reservation]=\"reservation\" [response]=\"response\"></app-reservation-create-response>\n    </ng-container>\n</div>\n<div *ngIf=\"!isReservationRequestSend\">\n    <div class=\"row\">\n        <div class=\"col-md-7 ml-2\">\n            <app-tables [tableData]=\"tables?.table\" (tableClicked)=\"onTableClicked($event)\" [isClickable]=\"true\"></app-tables>\n        </div>\n        \n        <div class=\"col-md-4 ml-2 mr-2\" *ngIf=\"!isDateAndTimeSet\">                \n            <h4> Wählen Sie zunächst Datum und Uhrzeit der Reservierung aus.</h4>\n            <div class=\"row mt-3 col-md-9\">\n                <div class=\"input-group\">\n                    <input class=\"form-control\" placeholder=\"dd-mm-yyyy\"\n                            name=\"dp\" [(ngModel)]=\"reservation.date\" ngbDatepicker #d=\"ngbDatepicker\" [minDate]=\"minDate\" [maxDate]=\"maxDate\" [markDisabled]=\"isDisabled\">\n                    <div class=\"input-group-append\">\n                        <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\"></button>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group row mt-3 col-md-9\">\n                <select class=\"form-control col-md-3 selectpicker\" data-live-search=\"true\" id=\"hour\" [(ngModel)] = \"reservation.hour\">\n                    <option *ngFor='let hour of hours' [value]=\"hour\">\n                        {{hour}}\n                    </option>\n                </select>\n                <span class=\"ml-2 mr-2\">{{':'}}</span>\n                <select class=\"form-control col-md-3 selectpicker\" data-live-search=\"true\" id=\"minute\" [(ngModel)] = \"reservation.minute\">\n                    <option *ngFor='let minute of minutes' [value]=\"minute\">\n                        {{minute}}\n                    </option>\n                </select>\n                <label for=\"sel1\" class=\"ml-2\">Uhrzeit</label>\n            </div>\n            <button class=\"btn btn-primary btn-block container-fluid\" (click)=\"setDateAndTime()\" [disabled]=\"disableTimeButton()\">\n                Bestätigen\n            </button>\n        </div>\n        <div class=\"col-md-4\" *ngIf=\"isDateAndTimeSet\">\n            <h4> Wählen Sie nun auf der linken Seite einen Tisch aus und tragen Sie weiter Daten ein.</h4>\n            <div class = \"row mt-4 mb-4\" *ngIf=\"!isDateOnEdit\">\n                <h5 class=\"col-md-8\">Reservierung für den {{addZero(reservation?.date.day)}}-{{addZero(reservation?.date.month)}}-{{reservation?.date.year}} um {{reservation?.hour}}:{{reservation?.minute}}</h5>\n                <button class=\"btn btn-outline-primary col-md-2\" (click)=\"onDateEditClick()\">Ändern</button>\n            </div>\n            <div class=\"row mt-4 mb-4\" *ngIf=\"isDateOnEdit\">\n                <div class=\"col-md-9\">\n                    <div class=\"form-group row\">\n                        <div class=\"input-group\">\n                            <input class=\"form-control\" placeholder=\"dd-mm-yyyy\"\n                                    name=\"dp\" [(ngModel)]=\"reservationTime.date\" ngbDatepicker #d=\"ngbDatepicker\" [minDate]=\"minDate\" [maxDate]=\"maxDate\" [markDisabled]=\"isDisabled\">\n                            <div class=\"input-group-append\">\n                                <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\"></button>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <div class=\"col-md-6 row ml-\">\n                            <select class=\"form-control col-md-5 selectpicker\" data-live-search=\"true\" id=\"hour\" [(ngModel)] = \"reservationTime.hour\">\n                                <option *ngFor='let hour of hours' [value]=\"hour\">\n                                    {{hour}}\n                                </option>\n                            </select>\n                            <span class=\"ml-2 mr-2\">{{':'}}</span>\n                            <select class=\"form-control col-md-5 selectpicker\" data-live-search=\"true\" id=\"minute\" [(ngModel)] = \"reservationTime.minute\">\n                                <option *ngFor='let minute of minutes' [value]=\"minute\">\n                                    {{minute}}\n                                </option>\n                            </select>\n                        </div>\n                        <label for=\"sel1\" class=\"ml-2\">Uhrzeit</label>\n                    </div>\n                </div>\n                <div class=\"col-md-3\">\n                    <button class=\"btn btn-outline-primary\" (click)=\"backButtonClicked()\">\n                        Zurück\n                    </button>\n                    <button class=\"btn btn-outline-primary mt-3\" (click)=\"setNewDateAndTime()\" [disabled]=\"disableEditTimeButton()\">\n                        Bestätigen\n                    </button>\n                </div>\n            </div>\n            <div class=\"form-group row justify-content-between\">\n                <input type=\"text\" class=\"col-md-6  form-control\" id=\"firstname\" placeholder=\"Vorname\" [(ngModel)] = \"reservation.firstName\" required=\"true\" #firstname=\"ngModel\" [disabled]=\"disableInputField()\">\n                <input type=\"text\" class=\"col-md-6  form-control\" id=\"lastname\" placeholder=\"Nachname\" [(ngModel)] = \"reservation.lastName\" required=\"true\" #lastname=\"ngModel\" [disabled]=\"disableInputField()\">\n                <div *ngIf=\"(firstname.invalid && (firstname.dirty || firstname.touched)) || (lastname.invalid && (lastname.dirty || lastname.touched))\" class=\"alert alert-danger col-md-12\">\n                        Bitte geben Sie einen gültigen Vornamen oder Nachnamen ein!\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <input type=\"text\" class=\"col-md-12 form-control ml-\" id=\"telephone\" placeholder=\"Telefonnummer\" [(ngModel)] = \"reservation.telephoneNumber\" required=\"true\" #telephone=\"ngModel\" [disabled]=\"disableInputField()\">\n                <div *ngIf=\"telephone.invalid && (telephone.dirty || telephone.touched)\" class=\"alert alert-danger col-md-12\">\n                        Bitte geben Sie eine gültige Telefonnummer ein!\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <input type=\"email\" class=\"col-md-12 form-control ml-\" id=\"email\" placeholder=\"E-Mail\" [(ngModel)] = \"reservation.email\" required=\"true\" #email=\"ngModel\" [disabled]=\"disableInputField()\">\n                <div *ngIf=\"email.invalid && (email.dirty || email.touched)\" class=\"alert alert-danger col-md-12\">\n                        Bitte geben Sie eine gültige Email ein!\n                </div>\n            </div>\n            <div class=\"form-group row\">\n                <select class=\"form-control col-md-2\" id=\"sel1\" [(ngModel)] = \"reservation.numberOfPersons\" [disabled]=\"disableInputField()\">\n                    <option>1</option>\n                    <option>2</option>\n                    <option>3</option>\n                    <option>4</option>\n                </select>\n                <label for=\"sel1\" class=\"ml-2\">Personen</label>\n            </div>\n            <div class=\"row\">\n                <button class=\"btn btn-primary btn-block\" (click)=\"createReservation()\" [disabled]=\"disableReservationButton()\">\n                    Reservieren\n                </button>\n            </div>\n        </div>\n    </div>\n</div>\n</ng-container>"

/***/ }),

/***/ "./src/app/reservation-delete/reservation-delete.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/reservation-delete/reservation-delete.component.ts ***!
  \********************************************************************/
/*! exports provided: ReservationDeleteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationDeleteComponent", function() { return ReservationDeleteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_reservation_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/reservation.service */ "./src/app/services/reservation.service.ts");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Utils */ "./src/app/Utils.ts");
/* harmony import */ var _cancel_modal_cancel_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cancel-modal/cancel-modal.component */ "./src/app/cancel-modal/cancel-modal.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ReservationDeleteComponent = /** @class */ (function () {
    function ReservationDeleteComponent(reservationService, fb, modalService) {
        this.reservationService = reservationService;
        this.fb = fb;
        this.modalService = modalService;
        this.form = this.fb.group({
            reservationNumber: ['Reservierungsnummer', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    ReservationDeleteComponent.prototype.onSubmit = function () {
        this.onCancel(this.form.get('reservationNumber').value);
    };
    /**
     * fetch reservation and open reservation cancellation modal
     */
    ReservationDeleteComponent.prototype.onCancel = function (reservationNumber) {
        var _this = this;
        this.reservationService
            .getReservation(reservationNumber)
            .subscribe(function (reservationResponse) {
            try {
                var reservation = Object(_Utils__WEBPACK_IMPORTED_MODULE_4__["parseReservationResponse"])(reservationResponse);
                var modalRef = _this.modalService.open(_cancel_modal_cancel_modal_component__WEBPACK_IMPORTED_MODULE_5__["CancelModalComponent"]);
                modalRef.componentInstance.reservation = reservation;
            }
            catch (err) {
                _this.error = err;
            }
        });
    };
    ReservationDeleteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reservation-delete',
            template: __webpack_require__(/*! ./reservation-delete.html */ "./src/app/reservation-delete/reservation-delete.html"),
            styles: [__webpack_require__(/*! ./reservation-delete.css */ "./src/app/reservation-delete/reservation-delete.css")]
        }),
        __metadata("design:paramtypes", [_services_reservation_service__WEBPACK_IMPORTED_MODULE_3__["ReservationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], ReservationDeleteComponent);
    return ReservationDeleteComponent;
}());



/***/ }),

/***/ "./src/app/reservation-delete/reservation-delete.css":
/*!***********************************************************!*\
  !*** ./src/app/reservation-delete/reservation-delete.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2VydmF0aW9uLWRlbGV0ZS9yZXNlcnZhdGlvbi1kZWxldGUuY3NzIn0= */"

/***/ }),

/***/ "./src/app/reservation-delete/reservation-delete.html":
/*!************************************************************!*\
  !*** ./src/app/reservation-delete/reservation-delete.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [role]=\"'Kunde'\" [title]=\"'Reservierung löschen'\"></app-header>\n<div class=\"container container m-5 p-5\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <p>Bitte tragen Sie Ihre Reservierungsnummer ein, um eine Reservierung zu stornieren. Nach\n        Klick auf „Stornieren“ erscheint eine Kontrollseite, um die Richtigkeit Ihrer Stornierung\n        zu prüfen. Erst, wenn Sie dort die Stornierung erneut bestätigen, haben Sie Ihre\n        Reservierung erfolgreich storniert. </p>\n      <img class=\"img-fluid center-block\" alt=\"reservation\" src=\"../../assets/images/reservation-details-cancel.jpg\" />\n    </div>\n    <div class=\"col-md-6 p-5\">\n      <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n        <input class=\"col-md-10\" type=\"text\" formControlName=\"reservationNumber\" required>\n        <button class=\"btn btn-primary btn-block btn-mg col-md-2 float-right\" type=\"submit\"\n          [disabled]=\"!form.valid\">\n          Ok\n        </button>\n        <div *ngIf=\"form.get('reservationNumber').invalid &&\n                  (form.get('reservationNumber').dirty || form.get('reservationNumber').touched)\"\n          class=\"alert alert-danger\">\n          <div *ngIf=\"form.get('reservationNumber').errors.required\">\n            Bitte Reservierungsnummer eingeben\n          </div>\n        </div>\n        <div *ngIf=\"this.error\" class=\"alert alert-danger\">\n          {{error.message}}\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/reservation-details/reservation-details.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/reservation-details/reservation-details.component.ts ***!
  \**********************************************************************/
/*! exports provided: ReservationDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationDetailsComponent", function() { return ReservationDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_reservation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/reservation.service */ "./src/app/services/reservation.service.ts");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Utils */ "./src/app/Utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReservationDetailsComponent = /** @class */ (function () {
    function ReservationDetailsComponent(reservationService, fb) {
        this.reservationService = reservationService;
        this.fb = fb;
        this.form = this.fb.group({
            reservationNumber: ['Reservierungsnummer', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    ReservationDetailsComponent.prototype.onSubmit = function () {
        this.getReservation(this.form.get('reservationNumber').value);
    };
    ReservationDetailsComponent.prototype.getReservation = function (id) {
        var _this = this;
        this.error = null;
        this.reservationService.getReservation(id).subscribe(function (response) {
            try {
                _this.reservation = Object(_Utils__WEBPACK_IMPORTED_MODULE_3__["parseReservationResponse"])(response);
            }
            catch (err) {
                _this.error = err;
            }
        });
    };
    ReservationDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reservation-details',
            template: __webpack_require__(/*! ./reservation-details.html */ "./src/app/reservation-details/reservation-details.html"),
            styles: [__webpack_require__(/*! ./reservation-details.css */ "./src/app/reservation-details/reservation-details.css")]
        }),
        __metadata("design:paramtypes", [_services_reservation_service__WEBPACK_IMPORTED_MODULE_2__["ReservationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ReservationDetailsComponent);
    return ReservationDetailsComponent;
}());



/***/ }),

/***/ "./src/app/reservation-details/reservation-details.css":
/*!*************************************************************!*\
  !*** ./src/app/reservation-details/reservation-details.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jlc2VydmF0aW9uLWRldGFpbHMvcmVzZXJ2YXRpb24tZGV0YWlscy5jc3MifQ== */"

/***/ }),

/***/ "./src/app/reservation-details/reservation-details.html":
/*!**************************************************************!*\
  !*** ./src/app/reservation-details/reservation-details.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [role]=\"'Kunde'\" [title]=\"'Reservierung einsehen'\"></app-header>\n<div class=\"container m-5 p-5\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <p>Bitte tragen Sie auf der rechten Seite Ihre Reservierungsnummer ein, die Sie nach Ihrer\n        Reservierung vom Personal oder per Mail erhalten haben. Bestätigen Sie mit Klick auf „OK“.\n        Im Anschluss werden Ihnen die Daten Ihrer Reservierung angezeigt. </p>\n      <img class=\"img-fluid center-block\" alt=\"reservation\" src=\"../../assets/images/reservation-details-cancel.jpg\" />\n    </div>\n    <div class=\"col-md-6 p-5\">\n\n      <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\n        <input class=\"container-fluid\" type=\"text\" formControlName=\"reservationNumber\" required>\n        <div *ngIf=\"form.get('reservationNumber').invalid &&\n              (form.get('reservationNumber').dirty || form.get('reservationNumber').touched)\"\n          class=\"alert alert-danger\">\n          <div *ngIf=\"form.get('reservationNumber').errors.required\">\n            Bitte Reservierungsnummer eingeben\n          </div>\n        </div>\n        <div *ngIf=\"this.error\" class=\"alert alert-danger\">\n          {{error.message}}\n        </div>\n        <button class=\"btn btn-primary btn-mg col-md-2 mt-3 float-right\" type=\"submit\" [disabled]=\"!form.valid\">\n          Ok\n        </button>\n      </form>\n\n      <div class=\"mt-5 py-5 px-2 float-left\" *ngIf=\"reservation\">\n        <p>Name: {{reservation.person.name}}</p>\n        <p>Personen: {{reservation.number_of_person}}</p>\n        <p>Datum: {{reservation.res_day}}</p>\n        <p>Zeit: {{reservation.res_time}}</p>\n        <p>Minuten: {{reservation.timeduration}}</p>\n        <p>Tisch: {{reservation.table.table_id}}</p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/reservation-menu/reservation-menu.css":
/*!*******************************************************!*\
  !*** ./src/app/reservation-menu/reservation-menu.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".vertical-center {\n    display: flex;\n    align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVzZXJ2YXRpb24tbWVudS9yZXNlcnZhdGlvbi1tZW51LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC9yZXNlcnZhdGlvbi1tZW51L3Jlc2VydmF0aW9uLW1lbnUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZlcnRpY2FsLWNlbnRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/reservation-menu/reservation-menu.html":
/*!********************************************************!*\
  !*** ./src/app/reservation-menu/reservation-menu.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header [title]=\"'Willkommen'\"></app-header>\n<div class=\"container m-5 p-5\">\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <p>Willkommen!\n\n        Wir freuen uns, Sie in unserer Reservierungsanwendung begrüßen zu dürfen! Hier können Sie\n        eine Reservierung in unserem Restaurant vornehmen, Ihre bestehende Reservierung einsehen\n        oder eine Reservierung stornieren. </p>\n      <img class=\"img-fluid center-block\" alt=\"restaurant\" src=\"../../assets/images/restaurant.jpg\" />\n    </div>\n    <div class=\"col-md-6 p-5 d-flex justify-content-center align-items-center\">\n      <div class=\"btn-group-vertical btn-group-lg\">\n        <div class=\"container-fluid p-2\">\n          <a class=\"btn btn-primary btn-lg\" href=\"/reservation/create\">\n            Reservieren\n          </a>\n        </div>\n        <div class=\"container-fluid p-2\">\n          <a class=\"btn btn-primary btn-lg\" href=\"/reservation/details\">\n            Reservierung ansehen\n          </a>\n        </div>\n        <div class=\"container-fluid p-2\">\n          <a class=\"btn btn-primary btn-lg\" href=\"/reservation/delete\">\n            Reservierung stornieren\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/reservation-menu/reservation-menu.ts":
/*!******************************************************!*\
  !*** ./src/app/reservation-menu/reservation-menu.ts ***!
  \******************************************************/
/*! exports provided: ReservationMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationMenuComponent", function() { return ReservationMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ReservationMenuComponent = /** @class */ (function () {
    function ReservationMenuComponent() {
    }
    ReservationMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reservation-menu',
            template: __webpack_require__(/*! ./reservation-menu.html */ "./src/app/reservation-menu/reservation-menu.html"),
            styles: [__webpack_require__(/*! ./reservation-menu.css */ "./src/app/reservation-menu/reservation-menu.css")]
        })
    ], ReservationMenuComponent);
    return ReservationMenuComponent;
}());



/***/ }),

/***/ "./src/app/services/reservation.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/reservation.service.ts ***!
  \*************************************************/
/*! exports provided: ReservationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationService", function() { return ReservationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Config_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Config.js */ "./src/app/Config.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ReservationService = /** @class */ (function () {
    function ReservationService(http) {
        this.http = http;
    }
    ReservationService.prototype.getOpeningHours = function (id) {
        var url = _Config_js__WEBPACK_IMPORTED_MODULE_4__["baseURL"] + '/opening_hours.php?res_id=' + id;
        return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (response) { return response.weekdays; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("opening_hours.php?res_id=" + id, null)));
    };
    ReservationService.prototype.getReservation = function (id) {
        var url = _Config_js__WEBPACK_IMPORTED_MODULE_4__["baseURL"] + '/reservierung_einsehen.php?reser_id=' + id;
        return this.http
            .get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("getReservation id=" + id, null)));
    };
    ReservationService.prototype.delete = function (id) {
        var url = _Config_js__WEBPACK_IMPORTED_MODULE_4__["baseURL"] + '/reservierung_loeschen.php?reser_id=' + id;
        return this.http
            .get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("delete id=" + id, null)));
    };
    ReservationService.prototype.confirmArrival = function (res_pid) {
        var url = _Config_js__WEBPACK_IMPORTED_MODULE_4__["baseURL"] + '/angekommen.php?nr=' + res_pid;
        return this.http
            .get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("confirm id=" + res_pid, null)));
    };
    ReservationService.prototype.createReservation = function (payload) {
        var url = _Config_js__WEBPACK_IMPORTED_MODULE_4__["baseURL"] + '/reservierung_anlegen.php';
        var body = {
            rest_id: payload.rest_id,
            tableID: payload.tableID,
            firstName: payload.firstName,
            lastName: payload.lastName,
            telephoneNumber: payload.telephoneNumber,
            email: payload.email,
            numberOfPersons: payload.numberOfPersons,
            date: payload.date.year +
                '-' +
                this.addZero(payload.date.month) +
                '-' +
                this.addZero(payload.date.day),
            time: payload.hour + ':' + payload.minute
        };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.post(url, body, { headers: headers }).pipe(
        // TODO this throws an error for some reason, but it works for now
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("reservierung_anlegen")));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    ReservationService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // error handling per result and operation
            console.log('operation' + JSON.stringify(operation));
            console.log('error' + JSON.stringify(error));
            console.log('result' + JSON.stringify(result));
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        };
    };
    ReservationService.prototype.addZero = function (i) {
        if (i < 10) {
            i = '0' + i;
        }
        return i;
    };
    ReservationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ReservationService);
    return ReservationService;
}());



/***/ }),

/***/ "./src/app/services/table.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/table.service.ts ***!
  \*******************************************/
/*! exports provided: TableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableService", function() { return TableService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _Config_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Config.js */ "./src/app/Config.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var TableService = /** @class */ (function () {
    function TableService(http) {
        this.http = http;
    }
    TableService.prototype.getTables = function () {
        var url = _Config_js__WEBPACK_IMPORTED_MODULE_6__["baseURL"] + '/get_tables.php?res_id=1';
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["Headers"]({ 'Content - Type': 'application/json' });
        var options = new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ headers: headers });
        return this.http
            .get(url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("get_tables.php?res_id=1", options)));
    };
    TableService.prototype.getTablesByDateAndTime = function (payload) {
        var formattedDate;
        if (payload.date instanceof Date) {
            formattedDate = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(payload.date, 'yyyy-MM-dd', 'en_US');
        }
        else {
            formattedDate = payload.date;
        }
        var url = _Config_js__WEBPACK_IMPORTED_MODULE_6__["baseURL"] +
            '/tische_datum_uhrzeit.php?rest_id=' +
            payload.rest_id +
            '&date=' +
            formattedDate +
            '&time=' +
            payload.time;
        return this.http.get(url).pipe(
        // TODO this throws an error for some reason, but it works for now
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getTablesByDateAndTime" +
            '?rest_id=' +
            payload.rest_id +
            '&date=' +
            payload.date +
            '&time=' +
            payload.time)));
    };
    TableService.prototype.getTableStatus = function (date) {
        var url = _Config_js__WEBPACK_IMPORTED_MODULE_6__["baseURL"] + '/tische_datum_uhrzeit_personal.php';
        var rest_id = 1;
        var dateDay = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'yyyy-MM-dd', 'en_US');
        var dateTime = Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(date, 'HH:mm:ss', 'en_US');
        var data = {
            rest_id: rest_id,
            date: dateDay,
            time: dateTime
        };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        return this.http
            .post(url, data, { headers: headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getCurrentReservations")));
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.  // TODO extract handleError
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    TableService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    TableService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], TableService);
    return TableService;
}());



/***/ }),

/***/ "./src/app/staff/current-reservations/current-reservations.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/staff/current-reservations/current-reservations.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YWZmL2N1cnJlbnQtcmVzZXJ2YXRpb25zL2N1cnJlbnQtcmVzZXJ2YXRpb25zLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/staff/current-reservations/current-reservations.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/staff/current-reservations/current-reservations.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Input fields/ buttons... -->\n<div class=\"row m-2\">\n\n  <!-- Search field -->\n  <div class=\"col-md-5\">\n    <form [formGroup]=\"formQuery\" (ngSubmit)=\"onQuerySubmit()\">\n      <input class=\"form-control\" type=\"text\" formControlName=\"query\" placeholder=\"Suche\">\n    </form>\n  </div>\n\n  <!-- Date Time Picker -->\n  <div class=\"col-md-5\">\n    <form class=\"form-inline\" [formGroup]=\"formDate\" (ngSubmit)=\"onDateTimeSubmit()\">\n      <div class=\"form-group\">\n        <input type=\"date\" class=\"m-1\" formControlName=\"date\" required>\n        <input type=\"time\" class=\"m-1\" formControlName=\"time\" required>\n      </div>\n      <button class=\"btn btn-info\" (click)=\"onDateTimeSubmit()\">\n        Suchen\n      </button>\n    </form>\n  </div>\n\n  <!-- Form Validation destroys formatting, but oh well -->\n  <div *ngIf=\"formDate.get('date').invalid && (formDate.get('date').dirty || formDate.get('date').touched)\"\n    class=\"alert alert-danger\">\n    Bitte geben Sie ein gültiges Datum ein!\n  </div>\n  <div *ngIf=\"formDate.get('time').invalid && (formDate.get('time').dirty || formDate.get('time').touched)\"\n    class=\"alert alert-danger\">\n    Bitte geben Sie eine gültige Zeit ein!\n  </div>\n\n  <!-- Go to current time button -->\n  <div class=\"col-md-2 float-right\">\n    <button class=\"btn btn-info float-right\" (click)=\"jumpCurrent()\">\n      Kunden aktuell\n      <span class=\"p-1\">\n        <fa-icon icon=\"caret-up\"></fa-icon>\n      </span>\n    </button>\n  </div>\n</div>\n\n<!-- Aktual content (table) -->\n<div class=\"table-responsive table-bordered table-striped\">\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <td>Reserviert von</td>\n        <td>Tisch-Nr.</td>\n        <td>Personen</td>\n        <td>Reservierungsnr.</td>\n        <td>Datum</td>\n        <td>Uhrzeit</td>\n        <td>Stornieren</td>\n        <td>Angekommen?</td>\n      </tr>\n    </thead>\n    <tr *ngFor=\"let reservation of filtRes\">\n      <td>{{ reservation.person.name }}</td>\n      <td>{{ reservation.table.table_id }}</td>\n      <td>{{ reservation.number_of_person }}</td>\n      <td>{{ reservation.res_pid }}</td>\n      <td>{{ reservation.res_day }}</td>\n      <td>{{ reservation.res_time }}</td>\n      <td>\n        <button class=\"btn btn-info\" (click)=\"deleteRes(reservation)\">Stornieren</button>\n      </td>\n      <td *ngIf=\"reservation.angekommen==='1'\">Ja</td>\n      <td *ngIf=\"reservation.angekommen==='0'\">\n        <a (click)=\"confirmArrival(reservation)\">Ankunft bestätigen</a>\n      </td>\n    </tr>\n  </table>\n</div>\n\n<div class=\"row m-2\">\n  <div class=\"col-md-12\">\n    <button class=\"btn btn-info btn-block\" (click)=\"jumpNextHour()\">\n      Kunden nächste Stunde\n      <span class=\"p-1\">\n        <fa-icon icon=\"caret-down\"></fa-icon>\n      </span>\n    </button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/staff/current-reservations/current-reservations.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/staff/current-reservations/current-reservations.component.ts ***!
  \******************************************************************************/
/*! exports provided: StaffCurrentReservationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffCurrentReservationsComponent", function() { return StaffCurrentReservationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var src_app_services_table_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/table.service */ "./src/app/services/table.service.ts");
/* harmony import */ var src_app_services_reservation_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/reservation.service */ "./src/app/services/reservation.service.ts");
/* harmony import */ var _cancel_modal_cancel_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../cancel-modal/cancel-modal.component */ "./src/app/cancel-modal/cancel-modal.component.ts");
/* harmony import */ var _Utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Utils */ "./src/app/Utils.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var StaffCurrentReservationsComponent = /** @class */ (function () {
    function StaffCurrentReservationsComponent(tableService, reservationService, fb, modalService) {
        this.tableService = tableService;
        this.reservationService = reservationService;
        this.fb = fb;
        this.modalService = modalService;
        this.formDate = this.fb.group({
            date: Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en_US'),
            time: Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(new Date(), 'HH:mm', 'en_US')
        });
        this.formQuery = this.fb.group({
            query: ''
        });
    }
    StaffCurrentReservationsComponent.prototype.ngOnInit = function () {
        this.fetchReservations();
    };
    StaffCurrentReservationsComponent.prototype.onQuerySubmit = function () {
        this.filterReservations();
    };
    StaffCurrentReservationsComponent.prototype.onDateTimeSubmit = function () {
        this.fetchReservations();
    };
    StaffCurrentReservationsComponent.prototype.deleteRes = function (reservation) {
        var modalRef = this.modalService.open(_cancel_modal_cancel_modal_component__WEBPACK_IMPORTED_MODULE_6__["CancelModalComponent"]);
        modalRef.componentInstance.reservation = reservation;
    };
    StaffCurrentReservationsComponent.prototype.confirmArrival = function (reservation) {
        this.reservationService
            .confirmArrival(reservation.res_pid)
            .subscribe(function (resp) {
            if (resp.result === 'successful') {
                reservation.angekommen = '1';
            }
            else {
                alert(JSON.stringify(resp));
            }
        });
    };
    StaffCurrentReservationsComponent.prototype.jumpCurrent = function () {
        this.formDate
            .get('date')
            .setValue(Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(new Date(), 'yyyy-MM-dd', 'en_US'));
        this.formDate
            .get('time')
            .setValue(Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(new Date(), 'HH:mm', 'en_US'));
        this.fetchReservations();
    };
    StaffCurrentReservationsComponent.prototype.jumpNextHour = function () {
        // get current date from form into js date model
        var datestr = this.formDate.get('date').value + 'T' + this.formDate.get('time').value;
        var currentDate = new Date(datestr);
        var nextHour = new Date(currentDate.getTime() + 1000 * 60 * 60);
        this.formDate
            .get('date')
            .setValue(Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(nextHour, 'yyyy-MM-dd', 'en_US'));
        this.formDate.get('time').setValue(Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(nextHour, 'HH:mm', 'en_US'));
        this.formQuery.get('query').setValue('');
        this.fetchReservations();
    };
    StaffCurrentReservationsComponent.prototype.fetchReservations = function () {
        var _this = this;
        var datestr = this.formDate.get('date').value + 'T' + this.formDate.get('time').value;
        var date = new Date(datestr);
        this.tableService.getTableStatus(date).subscribe(function (response) {
            var tables = Object(_Utils__WEBPACK_IMPORTED_MODULE_7__["parseTablesResponse"])(response);
            var occTables = tables.filter(function (table) { return table.res; });
            // get all reservations from tables
            var reservations = [];
            for (var _i = 0, occTables_1 = occTables; _i < occTables_1.length; _i++) {
                var table = occTables_1[_i];
                var arrRes = table.res;
                if (arrRes) {
                    for (var _a = 0, arrRes_1 = arrRes; _a < arrRes_1.length; _a++) {
                        var res = arrRes_1[_a];
                        res.table = table;
                        reservations.push(res);
                    }
                }
            }
            _this.baseReservations = reservations;
            _this.filtRes = reservations;
        });
        this.filterReservations();
    };
    /**
     * filter baseReservations based on search query
     * filters progressively. That means that it first tries to filter by table nr.
     * then if that doesn't return anything by number of persons
     * ...name, date, time and reservationnumber
     *
     * This could probably be done in a better way, but oh well
     */
    StaffCurrentReservationsComponent.prototype.filterReservations = function () {
        // basically a massive if else ...
        var q = this.formQuery.get('query').value;
        if (q === '') {
            this.filtRes = this.baseReservations;
            return;
        }
        // name
        this.filtRes = this.baseReservations.filter(function (res) {
            return res.person.name.includes(q);
        });
        if (this.filtRes && this.filtRes.length > 0) {
            return;
        }
        // table id
        this.filtRes = this.baseReservations.filter(function (res) {
            return res.table.table_id.includes(q);
        });
        if (this.filtRes && this.filtRes.length > 0) {
            return;
        }
        // number of persons
        this.filtRes = this.baseReservations.filter(function (res) {
            return res.number_of_person.toString().includes(q);
        });
        if (this.filtRes && this.filtRes.length > 0) {
            return;
        }
        // reservationnumber
        this.filtRes = this.baseReservations.filter(function (res) { return res.res_pid.includes(q); });
        if (this.filtRes && this.filtRes.length > 0) {
            return;
        }
        // date
        this.filtRes = this.baseReservations.filter(function (res) {
            return res.res_day.toString().includes(q);
        });
        // time
        this.filtRes = this.baseReservations.filter(function (res) {
            return res.res_time.toString().includes(q);
        });
        if (this.filtRes && this.filtRes.length > 0) {
            return;
        }
        // nothing found
        this.filtRes = [];
    };
    StaffCurrentReservationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-current-reservations',
            template: __webpack_require__(/*! ./current-reservations.component.html */ "./src/app/staff/current-reservations/current-reservations.component.html"),
            styles: [__webpack_require__(/*! ./current-reservations.component.css */ "./src/app/staff/current-reservations/current-reservations.component.css")]
        }),
        __metadata("design:paramtypes", [src_app_services_table_service__WEBPACK_IMPORTED_MODULE_4__["TableService"],
            src_app_services_reservation_service__WEBPACK_IMPORTED_MODULE_5__["ReservationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModal"]])
    ], StaffCurrentReservationsComponent);
    return StaffCurrentReservationsComponent;
}());



/***/ }),

/***/ "./src/app/staff/menu/staff-menu.component.ts":
/*!****************************************************!*\
  !*** ./src/app/staff/menu/staff-menu.component.ts ***!
  \****************************************************/
/*! exports provided: StaffMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffMenuComponent", function() { return StaffMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StaffMenuComponent = /** @class */ (function () {
    function StaffMenuComponent() {
    }
    StaffMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./staff-menu.html */ "./src/app/staff/menu/staff-menu.html"),
            styles: [__webpack_require__(/*! ./staff-menu.css */ "./src/app/staff/menu/staff-menu.css")]
        })
    ], StaffMenuComponent);
    return StaffMenuComponent;
}());



/***/ }),

/***/ "./src/app/staff/menu/staff-menu.css":
/*!*******************************************!*\
  !*** ./src/app/staff/menu/staff-menu.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".vertical-center {\n    display: flex;\n    align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc3RhZmYvbWVudS9zdGFmZi1tZW51LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxvQkFBb0I7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC9zdGFmZi9tZW51L3N0YWZmLW1lbnUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnZlcnRpY2FsLWNlbnRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/staff/menu/staff-menu.html":
/*!********************************************!*\
  !*** ./src/app/staff/menu/staff-menu.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row d-flex align-items-center h-100 justify-content-center align-self-center\">\n  <div class=\"col-md-6\">\n    <div class=\"btn-group-vertical btn-group-lg container-fluid\">\n      <div class=\"m-2 container-fluid\">\n        <a class=\"btn btn-primary btn-block\" href=\"/staff/booking-plan\">\n          Belegungsplan\n        </a>\n      </div>\n      <div class=\"m-2 container-fluid\">\n        <a class=\"btn btn-primary btn-block\" href=\"/staff/current-reservations\">\n          Kundenübersicht\n        </a>\n      </div>\n      <div class=\"m-2 container-fluid\">\n        <a class=\"btn btn-primary btn-block\" href=\"/reservation/create\">\n          Reservieren\n        </a>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6\">\n    <div class=\"btn-group-vertical btn-group-lg container-fluid\">\n      <div class=\"m-2 container-fluid\">\n        <a class=\"btn btn-primary btn-block\" href=\"/reservation/details\">\n          Reservierung einsehen\n        </a>\n      </div>\n      <div class=\"m-2 container-fluid\">\n        <a class=\"btn btn-primary btn-block\" href=\"/reservation/delete\">\n          Stornieren\n        </a>\n      </div>\n      <div class=\"m-2 container-fluid\">\n        <a class=\"btn btn-primary btn-block\" href=\"/staff/tables\">\n          Tische bearbeiten\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"row dd-flex h-100\">\n  <div class=\"col-md-6 align-items-center justify-content-center align-self-center\">\n    <img class=\"img-fluid center-block p-5\" alt=\"restaurant\" src=\"../../assets/images/restaurant.jpg\" />\n  </div>\n  <div class=\"col-md-6\">\n    <p class=\"p-5\">\n      Im „Belegungsplan“ können Sie sich die aktuell belegten Tische anzeigen lassen. Die\n      „Kundenübersicht“ zeigt aktuell und in der nächsten Stunde erwartete Kunden an. In der\n      Reservierungsansicht unter „Reservieren“ können Sie für den Kunden Reservierungen vornehmen\n      und bereits getätigte Reservierungen in „Reservierung einsehen“ anzeigen lassen. Unter\n      „Stornieren“ können Sie Reservierungen stornieren. „Tische bearbeiten“ öffnet eine\n      Übersicht, in der der Saalplan mit der Tischaufstellung aktualisiert werden kann.\n    </p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/staff/staff-booking-plan/staff-booking-plan.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/staff/staff-booking-plan/staff-booking-plan.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YWZmL3N0YWZmLWJvb2tpbmctcGxhbi9zdGFmZi1ib29raW5nLXBsYW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/staff/staff-booking-plan/staff-booking-plan.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/staff/staff-booking-plan/staff-booking-plan.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"tables\">\n  <div class=\"container\">\n    <app-tables [tableData]=\"tables?.table\" [isClickable]=\"false\"></app-tables>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/staff/staff-booking-plan/staff-booking-plan.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/staff/staff-booking-plan/staff-booking-plan.component.ts ***!
  \**************************************************************************/
/*! exports provided: StaffBookingPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffBookingPlanComponent", function() { return StaffBookingPlanComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services_table_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/table.service */ "./src/app/services/table.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var StaffBookingPlanComponent = /** @class */ (function () {
    function StaffBookingPlanComponent(tableService) {
        this.tableService = tableService;
    }
    StaffBookingPlanComponent.prototype.ngOnInit = function () {
        var _this = this;
        var date = new Date();
        var body = {
            rest_id: 1,
            date: date.getFullYear() +
                '-' +
                this.addZero(date.getMonth() + 1) +
                '-' +
                this.addZero(date.getDate()),
            time: Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["formatDate"])(new Date(), 'HH:mm', 'en_US')
        };
        this.tableService.getTablesByDateAndTime(body).subscribe(function (tables) {
            _this.tables = tables;
        });
    };
    StaffBookingPlanComponent.prototype.addZero = function (i) {
        if (i < 10) {
            i = '0' + i;
        }
        return i;
    };
    StaffBookingPlanComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-staff-booking-plan',
            template: __webpack_require__(/*! ./staff-booking-plan.component.html */ "./src/app/staff/staff-booking-plan/staff-booking-plan.component.html"),
            styles: [__webpack_require__(/*! ./staff-booking-plan.component.css */ "./src/app/staff/staff-booking-plan/staff-booking-plan.component.css")]
        }),
        __metadata("design:paramtypes", [_services_table_service__WEBPACK_IMPORTED_MODULE_2__["TableService"]])
    ], StaffBookingPlanComponent);
    return StaffBookingPlanComponent;
}());



/***/ }),

/***/ "./src/app/templates/header/header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/templates/header/header.component.ts ***!
  \******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "role", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "title", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.html */ "./src/app/templates/header/header.html"),
            styles: [__webpack_require__(/*! ./header.css */ "./src/app/templates/header/header.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/templates/header/header.css":
/*!*********************************************!*\
  !*** ./src/app/templates/header/header.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RlbXBsYXRlcy9oZWFkZXIvaGVhZGVyLmNzcyJ9 */"

/***/ }),

/***/ "./src/app/templates/header/header.html":
/*!**********************************************!*\
  !*** ./src/app/templates/header/header.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ml-2 mr-2 mt-2 row\">\n    <h3 class=\"col-md-10 text-left\">Ansicht {{role}} \"{{title}}\"</h3>\n    <span class=\"col-md-2 text-right\">\n        <img src=\"../../../assets/images/eah.jpg\" class=\"img-fluid\">\n    </span>\n</div>\n<hr class=\"row ml-2 mr-2 mt-2\">"

/***/ }),

/***/ "./src/app/templates/tables/tables.component.ts":
/*!******************************************************!*\
  !*** ./src/app/templates/tables/tables.component.ts ***!
  \******************************************************/
/*! exports provided: TablesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TablesComponent", function() { return TablesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TablesComponent = /** @class */ (function () {
    function TablesComponent() {
        var _this = this;
        this.tableClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.columns = [1, 2, 3, 4, 5];
        this.onTableClick = function (element) {
            var srcElement = element.srcElement;
            var clickedReservations = document.getElementsByClassName('clicked');
            var img = new Image();
            if (clickedReservations.length !== 0 && clickedReservations[0].id === srcElement.id) {
                // set new reserved Img
                img.setAttribute('id', srcElement.id);
                if (element.srcElement.className.includes('table-1')) {
                    img.setAttribute('class', 'img-fluid table-1');
                    img.src = '../../../assets/images/Tisch1_weiß.png';
                }
                else {
                    img.setAttribute('class', 'img-fluid table-2');
                    img.src = '../../../assets/images/Tisch2_weiß.png';
                }
                srcElement.parentNode.append(img);
                srcElement.parentNode.removeChild(srcElement);
            }
            else {
                // reset old Img
                if (clickedReservations.length !== 0) {
                    var currentClicked = clickedReservations[0];
                    var oldImg = new Image();
                    oldImg.setAttribute('id', currentClicked.id);
                    if (currentClicked.className.includes('table-1')) {
                        oldImg.src = '../../../assets/images/Tisch1_weiß.png';
                        oldImg.setAttribute('class', 'img-fluid table-1');
                    }
                    else {
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
                }
                else {
                    img.src = '../../../assets/images/Tisch2_gruen.png';
                }
                srcElement.parentNode.append(img);
                srcElement.parentNode.removeChild(srcElement);
            }
            // emit tableID
            _this.tableClicked.emit(parseInt(srcElement.id, 10));
        };
    }
    TablesComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.tableData) {
            this.tableData.forEach(function (table) {
                var row = document.getElementById('row-' + table.row);
                if (row) {
                    var columns = row.getElementsByClassName('column-' + table.col);
                    if (columns.length === 1) {
                        var column = columns[0];
                        if (table.frei !== false && _this.isClickable) {
                            column.addEventListener('click', _this.onTableClick, false);
                        }
                        var img = new Image();
                        img.setAttribute('id', table.table_id);
                        if (table.type === '4') {
                            img.setAttribute('class', 'img-fluid table-1');
                            if (table.frei === false) {
                                img.src = '../../../assets/images/Tisch1_grau.png';
                            }
                            else {
                                img.src = '../../../assets/images/Tisch1_weiß.png';
                            }
                        }
                        else {
                            img.setAttribute('class', 'img-fluid table-2');
                            if (table.frei === false) {
                                img.src = '../../../assets/images/Tisch2_grau.png';
                            }
                            else {
                                img.src = '../../../assets/images/Tisch2_weiß.png';
                            }
                        }
                        column.appendChild(img);
                    }
                }
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], TablesComponent.prototype, "isClickable", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TablesComponent.prototype, "tableData", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TablesComponent.prototype, "tableClicked", void 0);
    TablesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tables',
            template: __webpack_require__(/*! ./tables.html */ "./src/app/templates/tables/tables.html"),
            styles: [__webpack_require__(/*! ./tables.css */ "./src/app/templates/tables/tables.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TablesComponent);
    return TablesComponent;
}());



/***/ }),

/***/ "./src/app/templates/tables/tables.css":
/*!*********************************************!*\
  !*** ./src/app/templates/tables/tables.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#table {\n    background-image: url('Hintergrund-updated1.png');\n    width: 100%;\n    background-repeat: no-repeat;\n    background-size: cover;\n    margin-right: 30px;\n}\n\n.borderless td, .borderless th {\n    border: none;\n}\n\n.column-1, .column-2, .column-3, .column-4 {\n    width: 20%;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVtcGxhdGVzL3RhYmxlcy90YWJsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0RBQXlFO0lBQ3pFLFlBQVk7SUFDWiw2QkFBNkI7SUFDN0IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSxXQUFXO0NBQ2QiLCJmaWxlIjoic3JjL2FwcC90ZW1wbGF0ZXMvdGFibGVzL3RhYmxlcy5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGFibGUge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvSGludGVyZ3J1bmQtdXBkYXRlZDEucG5nXCIpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG59XG5cbi5ib3JkZXJsZXNzIHRkLCAuYm9yZGVybGVzcyB0aCB7XG4gICAgYm9yZGVyOiBub25lO1xufVxuXG4uY29sdW1uLTEsIC5jb2x1bW4tMiwgLmNvbHVtbi0zLCAuY29sdW1uLTQge1xuICAgIHdpZHRoOiAyMCU7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/templates/tables/tables.html":
/*!**********************************************!*\
  !*** ./src/app/templates/tables/tables.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\">\n    <table class=\"table borderless\" id=\"table\">\n        <tr id=\"row-1\">\n            <td class=\"column-1\"></td>\n            <td class=\"column-2\"></td>\n            <td class=\"column-3\"></td>\n            <td class=\"column-4\"></td>\n            <td class=\"column-5\"></td>\n        </tr>\n        <tr id=\"row-2\">\n            <td class=\"column-1\"></td>\n            <td class=\"column-2\"></td>\n            <td class=\"column-3\"></td>\n            <td class=\"column-4\"></td>\n            <td class=\"column-5\"></td>\n        </tr>\n        <tr id=\"row-3\">\n            <td class=\"column-1\"></td>\n            <td class=\"column-2\"></td>\n            <td class=\"column-3\"></td>\n            <td class=\"column-4\"></td>\n            <td class=\"column-5\"></td>\n        </tr>\n    </table>\n</div>"

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/damian/pp/table-reservation-webapp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map