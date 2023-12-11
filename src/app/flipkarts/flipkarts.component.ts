import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-flipkarts',
  templateUrl: './flipkarts.component.html',
  styleUrls: ['./flipkarts.component.scss']
})
export class FlipkartsComponent {
  public flipkartitems:any = [];
  constructor(private _filkartService:FlipkartService) {
    _filkartService.getflipkart().subscribe(
      (data:any)=>{
        this.flipkartitems = data;
      },
      (err:any)=>{
        alert("Internaal server Error");
      }
      
    )
}
}