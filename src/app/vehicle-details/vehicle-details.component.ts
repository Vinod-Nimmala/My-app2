import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../vehicle.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.scss']
})
export class VehicleDetailsComponent {
     public vehicle:any={};
  constructor(private _activatedRoute:ActivatedRoute, private _vehicleService:VehicleService){
    //ActivatedRoute subcribe 
    _activatedRoute.params.subscribe(
      (data:any)=>{
        //Subcribing the vehicle service
        _vehicleService.getVehicle(data.id).subscribe(
          (data:any)=>{
            this.vehicle=data;
          },
          (err:any)=>{
            alert("internal server error");
          }
        )
      }
    );
  }
}
