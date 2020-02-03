import { Injectable } from '@angular/core';
import { HttpClient,HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { User } from '../app/Model/user';
import { ApiResponse } from '../app/Model/api-response';
import {map, catchError} from 'rxjs/operators';
@Injectable({
    providedIn:'root'
})
export class ServicesService {
    cars: User[];
    constructor(private http:HttpClient){}
    baseUrl = 'http://localhost:8080/Angular';

    // Add a Record
    store(car: User): Observable<User[]> {
    return this.http.post(`${this.baseUrl}/insert.php`, { data: car })
    .pipe(map((res) => {
        this.cars.push(res['data']);
        return this.cars;
        }),
        catchError(this.handleError));
    } 

      private handleError(error: HttpErrorResponse) {
        console.log(error);
    
        // return an observable with a user friendly message
        return throwError('Error! something went wrong.');
      } 
}