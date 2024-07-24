import { Injectable } from '@angular/core';
import { User } from '../Models/users';
import { Subscription } from '../Models/subscription';
import { Nocas } from '../Models/nocas';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3003/api';
  public userData!: User;
  public subscriptionData!: Subscription
  public nocasData!: Nocas

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

}

