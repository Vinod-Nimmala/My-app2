import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemeService {

  constructor(private _httpClient:HttpClient) { }

  getMemes():Observable<any>{
    return this._httpClient.get("https://api.imgflip.com/get_memes");

  }
}
