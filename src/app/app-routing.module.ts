import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BroadbandComponent } from './broadband/broadband.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileupdateComponent } from './profileupdate/profileupdate.component';
import { RegistrationComponent } from './registration/registration.component';
import { ViewplansComponent } from './viewplans/viewplans.component';

const routes: Routes = [
  {path: 'home', component: HomepageComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: RegistrationComponent},
  {path: 'viewplans', component: ViewplansComponent},
  {path: 'broadband', component: BroadbandComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'updateProfile', component: ProfileupdateComponent},
  {path: 'payment/:planId', component: PaymentPageComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
  //defining an empty path means it will redirect to all task
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
