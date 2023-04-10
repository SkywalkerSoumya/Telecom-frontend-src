import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customers } from './customers';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private rechargeUpdateURL = "http://localhost:9020/api/v1/user/update-rechargeplan"

  constructor(private httpClient: HttpClient) { }

  rechargeUpdate(id: string, customer : Customers): Observable<Object>{
    return this.httpClient.put(`${this.rechargeUpdateURL}/${id}`,customer);
  }
}
