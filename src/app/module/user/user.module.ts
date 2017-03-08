import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './component/user.component';
import { USER_ROUTING_MODULE } from './user-routing.module';
import { HttpModule } from '@angular/http';
import { HomeModule } from '../../home/home.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    // HttpModule,
    // HomeModule,
    USER_ROUTING_MODULE
  ],
  declarations: [UserComponent]
})
export class UserModule { }
