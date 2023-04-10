import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customers } from '../customers';
//import * as jQuery from 'jquery';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  customers : Customers = new Customers();
  isLogin : Boolean = false;

  constructor(private router : Router){
    /**************/
  }

  ngOnInit(): void {
    if(localStorage.getItem("token")){
      this.isLogin = true;
    }
  }

  onLogout(){
    localStorage.removeItem("token");
    localStorage.removeItem("contact_number");
    this.router.navigateByUrl("/home");
    this.isLogin=false;
    localStorage.clear();
  }

}
