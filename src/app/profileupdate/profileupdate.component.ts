import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customers } from '../customers';
import { CustomersService } from '../customers.service';

@Component({
  selector: 'app-profileupdate',
  templateUrl: './profileupdate.component.html',
  styleUrls: ['./profileupdate.component.css']
})
export class ProfileupdateComponent {

  customers : Customers = new Customers();

  constructor (private customersService : CustomersService,
              private router : Router,
              private route: ActivatedRoute){}


  ngOnInit() :void {}

  updateProfile(){
    const idNumber=localStorage.getItem("contact_number");
    this.customersService.updateCustomer(idNumber, this.customers).subscribe(data=>{
      console.log(data);
      this.goToProfile();
    },
    error => console.log(error));
  }

  goToProfile(){
    this.router.navigate(["/profile"]);
  }
  
  onSubmit(){
    console.log(this.customers);
    this.updateProfile();
  }
}
