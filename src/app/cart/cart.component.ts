import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {

  public count:number = 0;
  constructor(private _commonService:CommonService){

    _commonService.getValue().subscribe(
      (data:any)=>{
        this.count = data;
      }
    )
    
  }
}
