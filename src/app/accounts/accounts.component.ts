import { Component } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent {

  public accounts:any=[];
//Creating variable for filter 
 public term :string='';

 //Creating variables for sorting process
 public column:string = '';
 public order :string = '';

 //Creating variable for pagination
 public pageno:number=0;

  constructor(private _accountService:AccountService){
    _accountService.getAccounts().subscribe(
      (data:any)=>{
        this.accounts =data;
      },
      (err:any)=>{
        alert("Internal Server Error");
      }
    )
  }
  //Get method call for filter function
  getFilteredAccounts(){
    this._accountService.getFilteredAccounts(this.term).subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }
  //Get method call for sorting function

  sort(){
    this._accountService.getSortedAccounts(this.column, this.order).subscribe(
      (data:any)=>{
        this.accounts = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

  //Delete function call  for deleting 
  delete(id:string){
    this._accountService.deletedAccounts(id).subscribe(
      (data:any)=>{
        alert("Deleted Successfully");
        location.reload();
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

  //Method call for pagination
  page(){
    this._accountService.getPagedUsers(this.pageno).subscribe(
      (data:any)=>{
        this.accounts= data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }
}
