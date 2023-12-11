import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent {

  public studentForm:FormGroup = new FormGroup({
    name:new FormControl(null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
    class:new  FormControl(null, [Validators.required, Validators.min(1), Validators.max(2)]),
    fatherName: new FormControl( null,[Validators.required, Validators.minLength(5), Validators.maxLength(15)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    dob: new FormControl(null, [Validators.required]),
    address:new  FormGroup({
      addressLine:new FormControl(null,[Validators.required]),
      city: new FormControl(null, [Validators.required]),
      state: new FormControl(null, [Validators.required]),
      pincode:new FormControl(null, [Validators.required, Validators.min(111111), Validators.max(999999)]),
    }),

    //Creating empty formarray  for marks array to store the array of objects
    marks: new FormArray([]),

    //Creating form control for Dynamic forms and crearting the formvalidators
    type: new FormControl(),
    busfee: new FormControl(null, [Validators.required, Validators.min(100000), Validators.max(999999)]),
    hostelfee: new FormControl(null, [Validators.required, Validators.min(100000), Validators.max(999999)]),
    
  });
  
  //marksFormarray method  to  store objects/create the object  
  get marksFormArray(){
    return this.studentForm.get('marks') as FormArray;
  }
  
 //Method call for addclick and fromcontrols 
  addMarks(){
    this.marksFormArray.push(
      new FormGroup({
        class: new FormControl(),
        year:new FormControl(),
        percentage:new FormControl(null, [Validators.required,]),
      })
    )
  }
  delete(i:number){
    this.marksFormArray.removeAt(i);
  }
  submit(){
    console.log(this.studentForm);
  }
}
