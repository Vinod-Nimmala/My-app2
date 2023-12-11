import { Component } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.scss']
})
export class EmailsComponent {
  public items: any = [];
 constructor(_emailServices:EmailService){
  _emailServices.getUsers().subscribe(
    (data:any)=>{
      this.items = data;
    },
    (error:any)=>{
      alert("Internal Server Error");
    }
  )
  
 }
}
