import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { ActivatedRoute } from '@angular/router';

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
     profie_picture:new FormControl(null,[Validators.required])
   });

   // Creating variable to store the id which is got from edit button click
   public id:any= "";
   constructor(private _accountService:AccountService, private _activatedRoute:ActivatedRoute){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        this.id=data.id;
        if(this.id){
          _accountService.getAccount(data.id).subscribe(
            (data:any)=>{
              this.Accountform.patchValue(data);
            },

            (err:any)=>{
              alert("Internal server error");
            }
          );
        }
      }
    );
   }

   //Submit function call to store the data in 
   submit(){
      if(this.id){
        //Edid the account
        this._accountService.editAccount(this.id, this.Accountform.value).subscribe(
          (data:any)=>{
            alert("Account Updated Successfully");
          },

          (err:any)=>{
            alert("Internal Server error");
          }
        )
      }
      else{
        //Create-user
      //Calling the createusers method from userservice to post the data whcich is received from Edit button click
        this._accountService.createAccounts(this.Accountform.value).subscribe(
          (data:any)=>{
            alert("Account created Successfully");
          },
          (err:any)=>{
            alert("Internal Server Error");
          }
        )
      }
   }
}
