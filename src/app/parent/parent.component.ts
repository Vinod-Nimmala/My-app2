import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
 public ap:string= " ";

 public bp:string = "";

 //Catch Method call
  catch(value:any){
  this.bp=value;
 }

 constructor(){ }
}
