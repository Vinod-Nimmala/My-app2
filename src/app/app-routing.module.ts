import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StructuraldirectivesComponent } from './structuraldirectives/structuraldirectives.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { MarksComponent } from './marks/marks.component';
import { PipesComponent } from './pipes/pipes.component';
import { EventsComponent } from './events/events.component';
import { CarsComponent } from './cars/cars.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { AccountsComponent } from './accounts/accounts.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { FlipkartsComponent } from './flipkarts/flipkarts.component';
import { EmailsComponent } from './emails/emails.component';
import { ActivityComponent } from './activity/activity.component';
import { MemesComponent } from './memes/memes.component';
import { UserInfoService } from './user-info.service';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateVehiclesComponent } from './create-vehicles/create-vehicles.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { UserFormComponent } from './user-form/user-form.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { AuthenticationGuard } from './authentication.guard';

const routes: Routes = [
  //General routing path
  {path: 'login',component:LoginComponent},
  // {path:'structuraldirectives', component:StructuraldirectivesComponent},

  //Child  routing path 
  {path:'dashboard', canActivate:[AuthenticationGuard], component:DashboardComponent, children:[
     {path: 'structuraldirectives', component:StructuraldirectivesComponent},
      {path: 'login', component:LoginComponent},
      {path:'marks', component:MarksComponent},
      {path:'pipes', component:PipesComponent},
      {path:'events', component:EventsComponent},
      {path:'cars', component:CarsComponent},
      {path:'products',component:ProductsComponent},
      {path:'users',component:UsersComponent},
      {path:'accounts',component:AccountsComponent},
      {path:'vehicles', component:VehiclesComponent},
      {path:'flipkarts',component:FlipkartsComponent},
      {path:'emails',component:EmailsComponent},
      {path:'activity',component:ActivityComponent},
      {path:'memes',component:MemesComponent},
      {path:'userinfo',component:UserinfoComponent},
      {path:'create-user',component:CreateUserComponent},
      {path:'create-vehicles',component:CreateVehiclesComponent},
      {path:'create-account',component:CreateAccountComponent},
      {path:'user-form', component:UserFormComponent},
      {path:'student-form', component:StudentFormComponent}
  ]},

  //Empty routing path 
  {path: '',component:LoginComponent},

  //Wild routing path
  {path: '**', component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
