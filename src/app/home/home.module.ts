import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HOME_ROUTING_MODULE } from './home-routing.module';
@NgModule({
  imports: [
    CommonModule,
    HOME_ROUTING_MODULE
  ],
  declarations: [HomeComponent]
})
export class HomeModule { }
