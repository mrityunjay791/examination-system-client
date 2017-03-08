import {Component, ViewEncapsulation} from '@angular/core';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { DemoServiceService } from './service/demo-service.service';
import { UserDetails } from './model/user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  private userDetails: UserDetails = {
    userName: '',
    password: ''
  };
  constructor(private demoService:DemoServiceService){

  }
  // private clickMe(){
  //   this.demoService.getUsers().subscribe((data)=>{
  //   console.log(data);
  //   });
  // }

  // public setUser():void {
  //     this.demoService.checkCredential(this.userDetails).subscribe((data)=>{
  //       console.log(data);
  //     });
  //     alert('hello mrityunjay');
  // }
}
