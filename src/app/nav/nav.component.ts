import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  public count:number = 0;
  constructor(private _commonService:CommonService){

    _commonService.getValue().subscribe(
      (data:any)=>{
        this.count = data;
      }
    )
  }
}
