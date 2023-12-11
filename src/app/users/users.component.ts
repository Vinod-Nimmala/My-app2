import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  
  //Creating variable to store the data which is retrived from API  
  public users:any = [];


  //Creating variable for Filter method//
  public term:string ='';
  
  //Creating variables for Sorting method//
  public column:string='';
  public order :string='';

  //Creating variable for pagination 
  public  pageno:number=0;

  constructor(private _userService:UserService){
    
    // Code for getiing the API Data from service
    _userService.getUsers().subscribe(
      (data:any)=>{
        this.users = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

  //Filtering function call
  getFilteredUsers(){
    this._userService.getFilteredUsers(this.term).subscribe(
      (data:any)=>{
        this.users = data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

  //Sort function call 
  sort(){
    this._userService.getSortedUsers(this.column, this.order).subscribe(
      (data:any)=>{
        this.users=data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

  //Paginarion function call 
  page(){
      this._userService.getPagedUsers(this.pageno).subscribe(
        (data:any)=>{
          this.users=data;
        },
        (err:any)=>{
          alert("Internal server error");
        }
      )
  }

  //Deleting Code for server data  
  delete(id:string){
    this._userService.deletUsers(id).subscribe(
      (data:any)=>{
        alert("Deleted succesfully");
        //Reload the page after deleting the required id
        location.reload();
      },
      (error:any)=>{
        alert("Internal server error");
      }
    )
  }
}
