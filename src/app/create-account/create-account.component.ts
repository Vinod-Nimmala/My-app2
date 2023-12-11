import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent {

  //Creating Forms varible to access the data from HTML using FormGroup
   public Accountform:FormGroup = new FormGroup({
     account_name:new FormControl(null, [Validators.required]),
     available_balance:new FormControl(null, [Validators.required]),
     account_number:new FormControl(null, [Validators.required]),
     city:new FormControl(null, [Validators.required]),
     profile_picture:new FormControl(null,[Validators.required])
   });

   constructor(private _AccountService:AccountService){}

   //Submit function call to store the data in 
   submit(){
      this._AccountService.createAccounts(this.Accountform.value).subscribe(
        (data:any)=>{
          alert("Account created Successfully");
        },
        (err:any)=>{
          alert("Internal Server Error");
        }
      )
   }
}
