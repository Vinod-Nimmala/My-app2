import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //Creating variable for Url to easy the access of URL in all API  methods
  private baseUrl:string = "https://6128991386a213001729f9df.mockapi.io/test/v1/student";

  constructor(private _httpClient:HttpClient) { }
  
  //Get method to observe the all users from API
  getUsers():Observable<any>{
    return this._httpClient.get(this.baseUrl);
  }

  //Get method to observe the only single user
  getUser(i:number):Observable<any>{
    return this._httpClient.get(this.baseUrl+"/"+i);
  }


  //Get method to observe the Filtered users
  getFilteredUsers(term:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?filter="+term);
  }

  getSortedUsers(column:string, order:string):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?sortBy="+column+"&order="+order);
  }
  getPagedUsers(pageno:number):Observable<any>{
    return this._httpClient.get(this.baseUrl+"?limit=10&page="+pageno);
  }


  deletUsers(id:string):Observable<any>{
    return this._httpClient.delete(this.baseUrl+"/"+id);
  }

  //Post method to get the data from userforms and  storing it in API
  createUsers(data:any):Observable<any>{
    return this._httpClient.post(this.baseUrl+"/",data);
  }

  //Put method for Editted users 
  editUser(id:any, data:any):Observable<any>{
    return this._httpClient.put(this.baseUrl+"/"+id,data);
  }
}
