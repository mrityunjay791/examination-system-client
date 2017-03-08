import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { UserDetails,LoginDetails } from './../model/user.model';
@Injectable()
export class DemoServiceService {

  constructor(private http: Http) { }


public getUsers(){
    return this.http.get('http://localhost:8080/users');
}

public checkCredential(loginDetails: LoginDetails){
  console.log(loginDetails);
  return this.http.post('http://localhost:8080/users',loginDetails);
}

}
