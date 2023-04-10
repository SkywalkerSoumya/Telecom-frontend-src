import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customers } from '../customers';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userDetails : Customers = new Customers();

  constructor(private cService : CustomersService, private router : Router) { }

  ngOnInit() : void{
    this.userProfile();
   //  this.dateTime = new Date();
 }

  private userProfile(){
    this.cService.getUserById().subscribe(data =>{
      this.userDetails = data;
    });
  }

  updateProfile(){
    this.router.navigate(["/updateProfile"]);
  }
}