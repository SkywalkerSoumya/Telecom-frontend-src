import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customers } from './customers';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  private signupURL = "http://localhost:9020/api/v1/user/signup";
  private loginURL = "http://localhost:9020/api/v1/user/login";
  private updateProfileURL = "http://localhost:9020/api/v1/user/updateprofile";
  private profileURL = "http://localhost:9020/api/v1/user";
  constructor(private httpClient : HttpClient) { }

  addCustomers(customers : Customers): Observable<Object>{
    return this.httpClient.post(`${this.signupURL}`,customers,{responseType:'text'});
  }

  updateCustomer(id : String, customers : Customers): Observable<Object>{
    return this.httpClient.put(`${this.updateProfileURL}/${id}`,customers,{responseType:'text'});
  }

  loginCustomer(customers : Customers){
    return this.httpClient.post(`${this.loginURL}`,customers,{responseType:"text"});
  }

  loginuser(data:any){
    return this.httpClient.post(`${this.loginURL}`,data);
  }

  getUserById(): Observable<Customers>{
    const token=localStorage.getItem("token");
    const header=new HttpHeaders({"Authorization":"Bearer "+token});
    return this.httpClient.get<Customers>(`${this.profileURL}/${token}`,{headers:header,responseType:'json'})
  }
}
