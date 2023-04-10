import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Customers } from '../customers';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  customers : Customers = new Customers();

  constructor (private customersService : CustomersService, private router : Router){}
  ngOnInit() :void {}

  registerCustomers(){
    this.customersService.addCustomers(this.customers).subscribe(data=>{
      console.log(data);
      this.goToHome();
    },
    error => console.log(error));
  }

  goToHome(){
    this.router.navigate(["/login"]);
  }
  
  onSubmit(){
    console.log(this.customers);
    this.registerCustomers();
  }
}
