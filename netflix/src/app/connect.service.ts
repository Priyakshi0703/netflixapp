import { Injectable } from '@angular/core';
import { Http, RequestOptions, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
@Injectable()
export class ConnectService {

  constructor(public httpService: Http) { }
 getUsers='http://192.168.12.93:2000/api/v1/users';
 postUsers='http://192.168.12.93:2000/api/v1/users';
 loginUrl='http://192.168.12.93:2000/api/v1/login';
 postMovieUrl='http://192.168.12.93:2000/api/v1/movies';
 getMoviesUrl='http://192.168.12.93:2000/api/v1/movies';
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
  postMovie(Data):Observable<any>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    let options = new RequestOptions({ headers: headers });
    return this.httpService.post(this.postMovieUrl, Data, options).map(
      data => data.json());
  }
  getMovies(): Observable<any> {
    return this.httpService.get(this.getMoviesUrl).map(
      (res: Response) => res.json());
  }
updateMovie(Data):Observable<any>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json')
    let options = new RequestOptions({ headers: headers });
    return this.httpService.put('http://192.168.12.93:2000/api/v1/movies/update/'+Data.name, Data, options).map(
      data => data.json());
  }
  deleteMovie(movie): Observable<any> { 
    return this.httpService.delete('http://192.168.12.93:2000/api/v1/movies/update/'+movie).map(
      (res: Response) => res.json());
  }
  searchMovies(movie): Observable<any> {
    return this.httpService.get('http://192.168.12.93:2000/api/v1/movies/update/'+movie).map(
      (res: Response) => res.json());
  }
  searchMoviesByCategory(category): Observable<any> {
    return this.httpService.get('http://192.168.12.93:2000/api/v1/movies/category/'+category).map(
      (res: Response) => res.json());
  }
}