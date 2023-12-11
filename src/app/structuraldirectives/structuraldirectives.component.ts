import { Component } from '@angular/core';

@Component({
  selector: 'app-structuraldirectives',
  templateUrl: './structuraldirectives.component.html',
  styleUrls: ['./structuraldirectives.component.scss']
})
export class StructuraldirectivesComponent {
  public names : string[] = ['vinod', 'ajay', 'pavan', 'naveen', 'rajesh']
  public states : string[] = ['Telangana', 'Andra', 'Tamilnadu', 'Kerala']

  public products :any =[
    {name: 'pen', price:30},
    {name: 'ball', price:100},
    {name: 'book', price:250}
  ]
  public num: number =0;
}
