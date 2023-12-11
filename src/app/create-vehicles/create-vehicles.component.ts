import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-create-vehicles',
  templateUrl: './create-vehicles.component.html',
  styleUrls: ['./create-vehicles.component.scss']
})
export class CreateVehiclesComponent {


  public VehiclesForm:FormGroup = new FormGroup({
    Vehicle: new FormControl(null, [Validators.required]),
    manufacturer: new FormControl(null, [Validators.required]),
    model: new FormControl(null, [Validators.required]),
    type: new FormControl(null, [Validators.required]),
    fuel: new FormControl(null, [Validators.required]),
    color: new FormControl(null, [Validators.required]),
    image: new FormControl(null, [Validators.required]),
  });
  constructor(private _vehicleService:VehicleService){}
  submit(){
    //to print the output after the submit clicked
    console.log(this.VehiclesForm);

    this._vehicleService.createVehicles(this.VehiclesForm.value).subscribe(
      (data:any)=>{
        alert("Vehicle Data Entered Successfully");
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }
}
