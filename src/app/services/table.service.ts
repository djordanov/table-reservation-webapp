import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../Config.js';

@Injectable({
  providedIn: 'root'
})
export class TableService {
  constructor(private http: HttpClient) {}

  getCurrentTableStatus(): Observable<any> {
    const url = baseURL + '/tische_datum_uhrzeit_personal.php';
    const rest_id = 1;
    const now = new Date();
    const today =
      now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
    const time =
      now.getHours() +
      ':' +
      (now.getMinutes() < 10 ? now.getMinutes() : '0' + now.getMinutes());

    const data = {
      rest_id: rest_id,
      date: today,
      time: time
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
