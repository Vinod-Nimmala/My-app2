import { Component } from '@angular/core';
import { UserInfoService } from '../user-info.service';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.scss']
})
export class UserinfoComponent {
    public userdetails: any = [];
    constructor(private _userService:UserInfoService){
      _userService.getUserinfo().subscribe(
        (data:any)=>{
          this.userdetails= data.users;
        },
        (err:any)=>{
          alert("internal server error");
        }
      )
    }
}
