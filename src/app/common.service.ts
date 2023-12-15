import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  //Creating variable to use the common service to use the "Subject" API Features
  public countSub: BehaviorSubject<any> = new BehaviorSubject(0);

  public count:number = 0;

  //GetMethod to get the value  from items

  getValue(){
    return this.countSub.asObservable();
  }

  //Set Method to set the value in nav and cart components

  setValue(){

    this.count ++;
    this.countSub.next(this.count);
  }
}
