import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NbCardModule,NbListModule,NbMenuModule } from '@nebular/theme';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    NbCardModule,
    NbMenuModule,
    NbListModule
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
