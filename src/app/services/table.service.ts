import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../Config.js';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) { }

  getCurrentTableStatus(): Observable<any> {
    const url = baseURL + '/tische_datum_uhrzeit_personal.php';
    const data = { // TODO improve
      'rest_id': 1,
      'date': '2018-11-09',
      'time': '18:00'
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post<any>(url, data, {headers: headers})
      .pipe(
        catchError(this.handleError<any>(`getCurrentReservations`))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.  // TODO extract handleError
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
