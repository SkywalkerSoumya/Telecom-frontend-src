import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Plans } from './plans';

@Injectable({
  providedIn: 'root'
})
export class PlansService {
 
  private showPlansURL = "http://localhost:9030/api/v1/plans/all";

  constructor(private httpClient : HttpClient) { }

  getAllPlans() : Observable<Plans[]>{
    return this.httpClient.get<Plans[]>(`${this.showPlansURL}`);
  }


}
