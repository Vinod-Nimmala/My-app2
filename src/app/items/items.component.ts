import { Component } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent {
 


  constructor(private _commonService:CommonService){}

  add(){
   
    this._commonService.setValue();
  }
}
