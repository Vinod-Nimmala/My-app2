import { Component } from '@angular/core';
import { MemeService } from '../meme.service';

@Component({
  selector: 'app-memes',
  templateUrl: './memes.component.html',
  styleUrls: ['./memes.component.scss']
})
export class MemesComponent {
  public items:any =[];
 
  constructor(_memersService:MemeService){
    _memersService.getMemes().subscribe(
      (memesdata:any)=>{
       this.items= memesdata.data.memes;
      },
     (error:any)=>{
      alert("Internal server error");
     } 
    )
    

  }

}
