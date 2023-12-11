import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent {
 public UserName:string = '';
 public names: string[] = [];

 submit(){
  this.names.push(this.UserName)
  this.UserName=''
 }
 delete(){
  this.names.pop()
 }
}
