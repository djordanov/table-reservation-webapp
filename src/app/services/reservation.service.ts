import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { CreateReservation } from '../data-models/Reservation';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../Config.js';
import { Week } from '../data-models/Restaurant';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  constructor(private http: HttpClient) {}

  getOpeningHours(id: String): Observable<Week> {
    const url = baseURL + '/opening_hours.php?res_id=' + id;
    return this.http.get<any>(url).pipe(
      map(response => response.weekdays),
      catchError(this.handleError<any>(`opening_hours.php?res_id=${id}`, null))
    );
  }

  getReservation(id: String): Observable<any> {
    const url = baseURL + '/reservierung_einsehen.php?reser_id=' + id;
    return this.http
      .get<any>(url)
      .pipe(catchError(this.handleError<any>(`getReservation id=${id}`, null)));
  }

  delete(id: String): Observable<any> {
    const url = baseURL + '/reservierung_loeschen.php?reser_id=' + id;
    return this.http
      .get<any>(url)
      .pipe(catchError(this.handleError<any>(`delete id=${id}`, null)));
  }

  createReservation(payload: CreateReservation): Observable<any> {
    const url = baseURL + '/reservierung_anlegen.php';
    const body = {
      rest_id: payload.rest_id,
      tableID: payload.tableID,
      firstName: payload.firstName,
      lastName: payload.lastName,
      telephoneNumber: payload.telephoneNumber,
      email: payload.email,
      numberOfPersons: payload.numberOfPersons,
      date:
        payload.date.year +
        '-' +
        this.addZero(payload.date.month) +
        '-' +
        this.addZero(payload.date.day),
      time: payload.hour + ':' + payload.minute
    };
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(url, body, { headers }).pipe(
      // TODO this throws an error for some reason, but it works for now
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

  private addZero(i): string {
    if (i < 10) {
      i = '0' + i;
    }
    return i;
  }
}
