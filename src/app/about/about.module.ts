import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { AboutCeoComponent } from './about-ceo/about-ceo.component';



@NgModule({
  declarations: [
    AboutCompanyComponent,
    AboutCeoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AboutCompanyComponent
  ]
})
export class AboutModule { }
