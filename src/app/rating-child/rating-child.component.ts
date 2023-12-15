import { Component, Input } from '@angular/core';
import { UserFormComponent } from '../user-form/user-form.component';

@Component({
  selector: 'app-rating-child',
  templateUrl: './rating-child.component.html',
  styleUrls: ['./rating-child.component.scss']
})
export class RatingChildComponent {
  // private LOGO = require("C:\Users\vinod.N\OneDrive\Desktop\UI\Angular\my-app2\Star-1.jpg");
  @Input() public rating:number= 0;

  
  constructor(){
   
  }
}
