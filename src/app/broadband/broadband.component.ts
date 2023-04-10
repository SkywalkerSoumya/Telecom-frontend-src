import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Plans } from '../plans';
import { PlansService } from '../plans.service';

@Component({
  selector: 'app-broadband',
  templateUrl: './broadband.component.html',
  styleUrls: ['./broadband.component.css']
})
export class BroadbandComponent {

  plans : Plans[];

  constructor(private plansService : PlansService, private router : Router){}

  isLogin = false;

  ngOnInit(): void {
    if(localStorage.getItem("token")){
      this.isLogin = true;
    }
    this.getAllPlans();
  }

  private getAllPlans(){
      this.plansService.getAllPlans().subscribe(data=>{
        this.plans = data;
      });
  }

  updateBroadbandRecharge(broadbandPlanId : number, planCost : string){
    localStorage.setItem("plan-cost",planCost)
    this.router.navigate(['payment',broadbandPlanId])
  }
  goToRegister(){
    this.router.navigateByUrl("/signup")
  }
}
