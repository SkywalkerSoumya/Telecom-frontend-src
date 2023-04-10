import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customers } from '../customers';
import { CustomersService } from '../customers.service';
//import * as jQuery from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginsuccess: string = '';
  loginerror: string = '';

  ngOnInit(): void { }

  constructor(private customersService: CustomersService, private router: Router) { }
  customers: Customers = new Customers();

  displayAlert() {
    this.loginsuccess = "Login Successful";
  }

  wrongPasswordAlert() {
    this.loginerror = "Bad Credential";
  }

  doLogin(customers: Customers) {
    let resp = this.customersService.loginCustomer(customers);
    resp.subscribe(data => {
      if (data == "User not authenticated") {
        alert(data);

      }
      else if (data == "phone no or password doesn't match") {
        this.wrongPasswordAlert();
      }
      else if (data == "Error!!!") {
        alert(data);
      }
      else {
        localStorage.setItem("token", data);
        localStorage.setItem("contact_number", customers.userNumber);
        console.log(data);
        location.reload();
        //this.router.navigateByUrl("/home");
        //this.goToHome();
      }
    });
    
  }

  goToHome(){
    this.router.navigateByUrl("/home");
  }
}

