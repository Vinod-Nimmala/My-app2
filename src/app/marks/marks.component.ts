import { Component } from '@angular/core';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.scss']
})
export class MarksComponent {
 public students: any = [
  {name:'a', marks:100, grade:'a'},
  {name:'b', marks:70, grade:'b'},
  {name:'c', marks:60, grade:'c'},
  {name:'d', marks:30, grade:'fail'}
 ]
}
