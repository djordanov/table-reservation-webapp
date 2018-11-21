import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import {
  CreateReservation,
  TableReservedRequestPayload
} from '../data-models/Reservation';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { RequestOptions, Headers } from '@angular/http';
import { baseURL } from '../Config.js';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  constructor(private http: HttpClient) {}

  getReservation(id: String): Observable<any> {
    const url = baseURL + '/reservierung_einsehen.php?reser_id=' + id;
    return this.http
      .get<any>(url)
      .pipe(catchError(this.handleError<any>(`getReservation id=${id}`, null)));
  }

  getTables(): Observable<any> {
    const url = baseURL + '/get_tables.php?res_id=1';
    const headers = new Headers({ 'Content - Type': 'application/json' });
    const options = new RequestOptions({ headers: headers });
    return this.http
      .get(url)
      .pipe(
        catchError(this.handleError<any>(`get_tables.php?res_id=1`, options))
      );
  }

  getTablesByDateAndTime(payload: TableReservedRequestPayload): Observable<any> {
    const url = baseURL + '/tische_datum_uhrzeit.php?rest_id=' + payload.rest_id +
      '&date=' + payload.date + '&time=' + payload.time;
    return this.http.get(url)
    .pipe(  // TODO this throws an error for some reason, but it works for now
      catchError(this.handleError<any>(`getTablesByDateAndTime` + '?rest_id=' + payload.rest_id +
        '&date=' + payload.date + '&time=' + payload.time))
    );
  }

  delete(id: String): Observable<any> {
    const url = baseURL + '/reservierung_loeschen.php?reser_id=' + id;
    return this.http.get<any>(url).pipe(
      // TODO this throws an error for some reason, but it works for now
      catchError(this.handleError<any>(`delete id=${id}`, null))
    );
  }

  createReservation(body: CreateReservation): Observable<any> {
    const url = baseURL + '/reservierung_anlegen.php';
    const headers = new HttpHeaders({ 'Content-Type' : 'application/json' });
    return this.http.post(url, body, {headers})
    .pipe(  // TODO this throws an error for some reason, but it works for now
      catchError(this.handleError<any>(`reservierung_anlegen`))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // error handling per result and operation
      console.log('operation' + JSON.stringify(operation));
      console.log('error' + JSON.stringify(error));
      console.log('result' + JSON.stringify(result));

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
