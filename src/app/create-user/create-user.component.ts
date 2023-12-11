import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  
  //Creating formGroup  to store the data recieved from the Html Form
  public userForm:FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(5),Validators.maxLength(15)]),
    phone: new FormControl(null, [Validators.required, Validators.min(1000000000), Validators.max(9999999999)] ),
    city: new FormControl(null, [Validators.required]),
    image: new FormControl(null, [Validators.required])
  });
   //Creating private variable in Constructor to access the userService
  constructor(private _userService:UserService){}

  Submit(){
    console.log(this.userForm);

    //Calling the createusers method from userservice to post the data whcich is received from from
    this._userService.createUsers(this.userForm.value).subscribe(
      (data:any)=>{
        alert("User data created successfully  Thankyou");
      },
      (err:any)=>{
        alert("Internal server error");
      }

    )
  }

}
