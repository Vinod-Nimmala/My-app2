import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account-details',
  templateUrl: './account-details.component.html',
  styleUrls: ['./account-details.component.scss']
})
export class AccountDetailsComponent {

  //Creating variable to sore the data of the Id
    public account:any={};
  constructor(private _activatedRoute:ActivatedRoute, private _accountService:AccountService){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        // console.log(data.id);
        _accountService.getAccount(data.id).subscribe(
          (data:any)=>{
            this.account=data;
          },
          (err:any)=>{
            alert("Internal Server Error");
          }
        )
      }
    );
  }
}
