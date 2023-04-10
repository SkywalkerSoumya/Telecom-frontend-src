import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customers } from '../customers';
import { PaymentService } from '../payment.service';
import { Plans } from '../plans';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.css']
})
export class PaymentPageComponent implements OnInit{

  userToken : string;
  customer : Customers = new Customers();
  plans : Plans;
  tempCost : string;

  constructor(private paymentService: PaymentService,private route: ActivatedRoute,private router: Router){}
  
  ngOnInit(): void {
     this.customer.rechargePlanId = this.route.snapshot.params['planId'];
     this.userToken = localStorage.getItem("token");
     this.tempCost = localStorage.getItem("plan-cost");
  }

  onSubmit(){
      // this.customer.rechargePlanId = this.route.snapshot.params['planId'];
      // this.userNumberId = localStorage.getItem("contact_number");
      this.paymentService.rechargeUpdate(this.userToken, this.customer).subscribe(data =>{
        //this.goToProfile();
        }, error => console.log(error));
  }

  goToProfile(){
    this.router.navigate(["/profile"]);
  }
}
