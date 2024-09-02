import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

 
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://ec2-3-130-101-156.us-east-2.compute.amazonaws.com:3001/api';
  // public userData!: User;
 
  constructor(private http: HttpClient) { }
 
  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/user/getAllUsers`);
  }
 
  getAllSubscriptions(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/subscription/getAllSubscription`);
  }
 
  getAllPermissible(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/nocas/getAllPermissible`);
  }
 
 
  getAllOfServices(): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3001/api/request/getAllServiceRequest`);
  }
}