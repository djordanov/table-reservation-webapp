import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Reservation, CreateReservation, TableReservedRequestPayload } from '../data-models/Reservation';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions, Headers } from '@angular/http';
import { baseURL } from '../Config.js';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http: HttpClient) { }

  getReservation(id: String): Observable<any> {
    const url = baseURL + '/reservierung_einsehen.php?reser_id=' + id;
    return this.http.get<any>(url)
      .pipe(
        catchError(this.handleError<any>(`getReservation id=${id}`))
      );
  }

  getTables(): Observable<any> {
    const url = baseURL + '/get_tables.php?res_id=1';
    const headers = new Headers({ 'Content - Type' : 'application/json' });
    const options = new RequestOptions({ headers : headers });
    return this.http.get(url)
      .pipe(
        catchError(this.handleError<any>(`get_tables.php?res_id=1`, options))
      );
  }

  getTablesByDateAndTime(payload: TableReservedRequestPayload) {
    const url = baseURL + '/php/tische_datum_uhrzeit.php';
  }

  delete(id: String): Observable<any> {
    const url = baseURL + '/reservierung_loeschen.php?reser_id=' + id;
    return this.http.get<any>(url)
    .pipe(  // TODO this throws an error for some reason, but it works for now
      catchError(this.handleError<any>(`delete id=${id}`))
    );
  }

  createReservation(payload: CreateReservation): Observable<void> {
    return of(alert('Reservation Create not implemented yet \n\n payload: ' + payload));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
