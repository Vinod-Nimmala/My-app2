import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  //creating  a variable to use the URl for multiple times
  private baseURL:string = "https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction";

  constructor(private _httpClient:HttpClient) { }
    //Get method to get the all data from API
  getVehicles():Observable<any>{
    return this._httpClient.get(this.baseURL);
  }

  //Get Method to get the specified vehicle data from the API
  getVehicle(id:number):Observable<any>{
    return this._httpClient.get(this.baseURL+"/"+id);
  } 
  
  //Get method to filter  the data, which is received from the API
  getFilteredVehicles(term:string):Observable<any>{
    return this._httpClient.get(this.baseURL+"?filter="+term);
  }
    //Get method for sorting the data, which is recieved from the API
  getSortedVehicles(column:string, order:string):Observable<any>{
    return this._httpClient.get(this.baseURL+"?sortBy="+column+"&order="+order);
  }

  //Get method to delet the data, which is recieved from the API

  DeletedVehicles(id:string):Observable<any>{
    return this._httpClient.delete(this.baseURL+"/"+id)
  }

  //Get method for pagination 
  getPagedUser(pageno:number):Observable<any>{
    return this._httpClient.get(this.baseURL+"?limit=10&page="+pageno);
  }

  //Post method to get the data from user an post/store it on  the API
   createVehicles(data:any):Observable<any>{
    return this._httpClient.post(this.baseURL+"/",data);
   }
}
