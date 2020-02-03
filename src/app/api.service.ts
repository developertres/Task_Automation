import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Policy } from './policy';
import { UserAccess } from './useraccess';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  PHP_API_SERVER = "http://localhost:8080";

  constructor(private httpClient: HttpClient) {

  }

  createPolicy(policy: Policy): Observable<Policy> {
    return this.httpClient.post<Policy>(`${this.PHP_API_SERVER}/Angular/insert.php`, policy);
  }

  readPolicies(): Observable<Policy[]> {
    return this.httpClient.get<Policy[]>(`${this.PHP_API_SERVER}/Angular/getusers.php`);
  }

  deletePolicy(id: number) {
    return this.httpClient.delete<Policy>(`${this.PHP_API_SERVER}/Angular/delete.php/?id=${id}`);
  }

  updatePolicy(policy: Policy){
    return this.httpClient.put<Policy>(`${this.PHP_API_SERVER}/Angular/update.php`, policy);   
  }



}