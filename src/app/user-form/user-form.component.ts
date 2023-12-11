import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, FormGroupName, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent {

  //Creating a variable to store and control the form data
    public userForm :FormGroup = new FormGroup({
      name:new FormControl( null, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]),
      age: new FormControl(null, [Validators.required,Validators.min(0), Validators.max(100)]),
      phone: new FormControl(null, [ Validators.required, Validators.min(1000000000), Validators.max(9999999999)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      address: new FormGroup({
        city: new FormControl(null, Validators.required),
        pincode: new FormControl(null, [Validators.required, Validators.min(100000), Validators.max(999999)]),
      }),
      //creating array to store the  multiple card detiails in array
      cards: new FormArray([]),
      
      //Creating type controls
      type: new FormControl(),
      busfee:new FormControl(null, [Validators.required]),
      hostelfee: new FormControl(null, [Validators.required]),
    });

    //Get method to cards array
    get cardsFormArray(){
      return this.userForm.get('cards') as FormArray;
    }
      //Add function call to store the Card details
      add(){
        this.cardsFormArray.push(
          new FormGroup({
            no: new FormControl(null, [Validators.required]),
            expiry: new FormControl(null, [Validators.required]),
            cvv: new FormControl(null, [Validators.required])
          })
        )
      }

      //Delete Method call 
      delete(i:number){
        this.cardsFormArray.removeAt(i);
      }

    submit(){
      console.log(this.userForm);
    }
}
