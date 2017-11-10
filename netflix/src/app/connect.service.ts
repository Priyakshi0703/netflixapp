import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class ConnectService {

  constructor(public httpService: Http) { }
 getUsers='http://localhost:2000/api/v1/users';
 postUsers='http://localhost:2000/api/v1/users';
 loginUrl='http://localhost:2000/api/v1/login';
 //postAttendances='http://localhost:1996/api/attendance';

  login(): Observable<any> {
    return this.httpService.get(this.getUsers).map(
      (res: Response) => res.json());
  }

  //To save users data
  postUser(Data): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    let options = new RequestOptions({ headers: headers });
    console.log(Data);
    return this.httpService.post(this.postUsers, Data, options).map(
      data => data.json());
  }
  
  loginUser(Data): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    let options = new RequestOptions({ headers: headers });
    console.log(Data);
    return this.httpService.post(this.loginUrl, Data, options).map(
      data => data.json());
  }
}