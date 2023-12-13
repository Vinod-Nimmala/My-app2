import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { VehicleService } from '../vehicle.service';
import { ActivatedRoute } from '@angular/router';

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

  //Creating variable to store the  id got from the edit click method
    public id:any="";

  constructor(private _vehicleService:VehicleService, private _activatedRoute:ActivatedRoute){
    _activatedRoute.params.subscribe(
      (data:any)=>{
        this.id=data.id;
        if(this.id){
          _vehicleService.getVehicle(data.id).subscribe(
            (data:any)=>{
              this.VehiclesForm.patchValue(data);
            },
            (err:any)=>{
              alert("Internal server error");
            }
          );
        }
      }
    );
  }
  submit(){
    //to print the output after the submit clicked
    console.log(this.VehiclesForm);
    if(this.id){
      //Edit the Vehicles
      this._vehicleService.editVehicle(this.id, this.VehiclesForm.value).subscribe(
        (data:any)=>{
          alert("Vehicle  Updated Successfully");
        },
        (err:any)=>{
          alert("Internal server error");
        }
      )
    }
    else{
      //Create-Vehicles
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
}
