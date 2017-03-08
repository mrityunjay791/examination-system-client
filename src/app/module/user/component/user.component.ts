import { Component, OnInit } from '@angular/core';
import { DemoServiceService } from '../../../service/demo-service.service';
import { UserDetails,LoginDetails } from '../../../model/user.model';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

   private userDetails: UserDetails = {
    userName: '',
    password: ''
  };

   private loginDetails: LoginDetails = {
    email: '',
    password: ''
  };
  constructor(private demoService:DemoServiceService,
              private router: Router){

  }
  private clickMe(){
    this.demoService.getUsers().subscribe((data)=>{
    console.log(data);
    });
  }

  public checkCredential():void {
    //  let resposeData: any = {};
     this.loginDetails.email = this.userDetails.userName;
     this.loginDetails.password = this.userDetails.password;
      this.demoService.checkCredential(this.loginDetails).subscribe((data)=>{
        console.log(data);
          this.router.navigate(['']);
      });
      // alert('hello mrityunjay');
  }

}
