import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { StructuraldirectivesComponent } from './structuraldirectives/structuraldirectives.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MarksComponent } from './marks/marks.component';
import { PipesComponent } from './pipes/pipes.component';
import { EventsComponent } from './events/events.component';
import { CarsComponent } from './cars/cars.component';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import {HttpClientModule } from '@angular/common/http';
import { AccountsComponent } from './accounts/accounts.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { FlipkartsComponent } from './flipkarts/flipkarts.component';
import { EmailsComponent } from './emails/emails.component';
import { ActivityComponent } from './activity/activity.component';
import { MemesComponent } from './memes/memes.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateVehiclesComponent } from './create-vehicles/create-vehicles.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { UserFormComponent } from './user-form/user-form.component';
import { StudentFormComponent } from './student-form/student-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    StructuraldirectivesComponent,
    MarksComponent,
    PipesComponent,
    EventsComponent,
    CarsComponent,
    ProductsComponent,
    UsersComponent,
    AccountsComponent,
    VehiclesComponent,
    FlipkartsComponent,
    EmailsComponent,
    ActivityComponent,
    MemesComponent,
    UserinfoComponent,
    CreateUserComponent,
    CreateVehiclesComponent,
    CreateAccountComponent,
    UserFormComponent,
    StudentFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
