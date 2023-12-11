import { Component } from '@angular/core';
import { ActivityService } from '../activity.service';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})

export class ActivityComponent {
  public items:any = {};
  constructor(private _activitySerive:ActivityService){
    _activitySerive.getActivity().subscribe(
      (data:any)=>{
        this.items =data;
      },
      (error:any)=>{
        alert("Internal sever error");
      }
       
    )
  }
  refresh(){
    this._activitySerive.getActivity().subscribe(
      (data:any)=>{
        this.items =data;
      },
      (error:any)=>{
        alert("Internal sever error");
      }
       
    )
  }
}
