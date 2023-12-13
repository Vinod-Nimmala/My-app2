import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.scss']
})
export class VehiclesComponent {

  //Creating the variable to store the data received from the API using Get method
  public vehicles:any =[];

  //Creating variable to store the filtered data
  public term:string = '';

  //creating variables to sttore the sorted data
   public column:string = '';
   public order:string = '';

   //Creating variable for pagination 
   public pageno:number=0;

  constructor(private _vehicleService:VehicleService, private _router:Router){
    _vehicleService.getVehicles().subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (error:any)=>{
        alert("Internal server error")
      }
    )
  }

  //Get method fuction code
  getfilteredVehicles(){
    this._vehicleService.getFilteredVehicles(this.term).subscribe(
      (data:any)=>{
        this.vehicles =data;
      },
      (erro:any)=>{
        alert("Internal server error");
      }
    )
  }

  //Function call for sort method
  sort(){
    this._vehicleService.getSortedVehicles(this.column, this.order).subscribe(
      (data:any)=>{
        this.vehicles = data;
      },
      (error:any)=>{
        alert("Internal server error");
      }
    )
  }
  //Function call for Delete method
  delete(id:string){
  this._vehicleService.DeletedVehicles(id).subscribe(
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

  //Method call for Pagination
  page(){
    this._vehicleService.getPagedUser(this.pageno).subscribe(
      (data:any)=>{
        this.vehicles=data;
      },
      (err:any)=>{
        alert("Internal server error");
      }
    )
  }

  //Method call for view button
  view(id:number){
    this._router.navigateByUrl("/dashboard/vehicle-details/"+id);
  }

}
