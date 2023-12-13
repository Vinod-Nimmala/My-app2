import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  //Creating variable to use the URL multiple times

  private baseURL="https://6128991386a213001729f9df.mockapi.io/test/v1/principals";

  constructor(private _httpClient:HttpClient) { }
  //Get method to get the data from API
  getAccounts():Observable<any>{
    return this._httpClient.get(this.baseURL);
  }
//Get method to get the specified account data from the  API
  getAccount(id:number):Observable<any>{
    return this._httpClient.get(this.baseURL+"/"+id)
  }

  //Get method to get the filtered data
  getFilteredAccounts(term:string):Observable<any>{
    return this._httpClient.get(this.baseURL+"?filter="+term);
  }

  //Get method for sorting API data

  getSortedAccounts(column:string, order:string):Observable<any>{
    return this._httpClient.get(this.baseURL+"?sortBy="+column+"&order="+order);
  }

  //Method call for delete 
  deletedAccounts(id:string):Observable<any>{
    return this._httpClient.delete(this.baseURL+"/"+id);
  }

  //Pagination call 
  getPagedUsers(pageno:number):Observable<any>{
    return this._httpClient.get(this.baseURL+"?limit=10&page="+pageno);
  }

  //Posting the Data  collected from User in APi

  createAccounts(data:any):Observable<any>{
    return this._httpClient.post(this.baseURL+"/",data);
  }
}
