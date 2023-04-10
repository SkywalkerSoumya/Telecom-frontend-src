import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Plans } from '../plans';
import { PlansService } from '../plans.service';

@Component({
  selector: 'app-viewplans',
  templateUrl: './viewplans.component.html',
  styleUrls: ['./viewplans.component.css']
})
export class ViewplansComponent implements OnInit{

  plans : Plans[];

  constructor(private plansService : PlansService, private router : Router){}

  ngOnInit(): void {
    this.getAllPlans();
  }

  private getAllPlans(){
      this.plansService.getAllPlans().subscribe(data=>{
        this.plans = data;
      });
  }

  updatePrepaidRecharge(rechargePlanId : number, planCost : string){
    localStorage.setItem("plan-cost",planCost)
    this.router.navigate(['payment',rechargePlanId])
  }
}
