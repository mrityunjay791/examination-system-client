import { Component, OnInit } from '@angular/core';
import { DemoServiceService } from '../../../service/demo-service.service';
import { UserDetails,LoginDetails } from '../../../model/user.model';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
 
 ngOnInit() {
    console.log("hello");
  }

  private clickMe(){
    this.demoService.getUsers().subscribe((data)=>{
    console.log(data);
    });
  }

  /**
   * Checking credential for login users..
   * 
   * @private
   * @returns
   * @memberOf LoginComponent
   */
  private checkCredential():void {
    //  let resposeData: any = {};
     this.loginDetails.email = this.userDetails.userName;
     this.loginDetails.password = this.userDetails.password;
      this.demoService.checkCredential(this.loginDetails).subscribe((data)=>{
        console.log(data);
          this.router.navigate(['user']);
      });
      // alert('hello mrityunjay');
  }

}
