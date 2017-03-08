import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LOGIN_ROUTING_MODULE } from './login-routing.module';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LOGIN_ROUTING_MODULE
  ],
  declarations: [LoginComponent]
})
export class LoginModule { }
