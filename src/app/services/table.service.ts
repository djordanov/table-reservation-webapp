import { Injectable } from '@angular/core';
import { formatDate } from '@angular/common';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { RequestOptions, Headers } from '@angular/http';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { baseURL } from '../Config.js';
import { TableReservedRequestPayload } from '../data-models/Reservation';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  constructor(private http: HttpClient) {}

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

  getTablesByDateAndTime(
    payload: TableReservedRequestPayload
  ): Observable<any> {
    let formattedDate;
    if (payload.date instanceof Date) {
      formattedDate = formatDate(payload.date, 'yyyy-MM-dd', 'en_US');
    } else {
      formattedDate = payload.date;
    }

    const url =
      baseURL +
      '/tische_datum_uhrzeit.php?rest_id=' +
      payload.rest_id +
      '&date=' +
      formattedDate +
      '&time=' +
      payload.time;
    return this.http.get(url).pipe(
      // TODO this throws an error for some reason, but it works for now
      catchError(
        this.handleError<any>(
          `getTablesByDateAndTime` +
            '?rest_id=' +
            payload.rest_id +
            '&date=' +
            payload.date +
            '&time=' +
            payload.time
        )
      )
    );
  }

  getTableStatus(date: Date): Observable<any> {
    const url = baseURL + '/tische_datum_uhrzeit_personal.php';
    const rest_id = 1;
    const dateDay = formatDate(date, 'yyyy-MM-dd', 'en_US');
    const dateTime = formatDate(date, 'HH:mm:ss', 'en_US');

    const data = {
      rest_id: rest_id,
      date: dateDay,
      time: dateTime
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http
      .post<any>(url, data, { headers: headers })
      .pipe(catchError(this.handleError<any>(`getCurrentReservations`)));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.  // TODO extract handleError
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
