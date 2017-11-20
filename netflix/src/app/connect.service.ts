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
 postMoviesUrl='http://192.168.12.93:2000/api/v1/movies';
 getMoviesUrl='http://192.168.12.93:2000/api/v1/movies';
 updateMoviesUrl='http://192.168.12.93:2000/api/v1/movies/update/';
 deleteMovieUrl='http://192.168.12.93:2000/api/v1/movies/update/';
 searchMoviesUrl='http://192.168.12.93:2000/api/v1/movies/update/';
 searchCategoryUrl='http://192.168.12.93:2000/api/v1/movies/category/';

  login(): Observable<any> {
    return this.httpService.get(this.getUsers).map(
      (res: Response) => res.json());
  }

  //To save users data
  postUser(Data): Observable<any> {
    var token = localStorage.getItem("mytoken");
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
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
    var token = localStorage.getItem("mytoken");
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });
    return this.httpService.post(this.postMoviesUrl, Data, options).map(
      data => data.json());
  }
  getMovies(): Observable<any> {
    var token = localStorage.getItem("mytoken");
    console.log(token)
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });
    return this.httpService.get(this.getMoviesUrl,options).map(
      (res: Response) => res.json());
  }
updateMovie(Data):Observable<any>{
  var token = localStorage.getItem("mytoken");
  let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
    let options = new RequestOptions({ headers: headers });
    return this.httpService.put(this.updateMoviesUrl +Data.name, Data, options).map(
      data => data.json());
  }
  deleteMovie(movie): Observable<any> { 
    var token = localStorage.getItem("mytoken");
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
      let options = new RequestOptions({ headers: headers });
    return this.httpService.delete(this.deleteMovieUrl +movie,options).map(
      (res: Response) => res.json());
  }
  searchMovies(movie): Observable<any> {
    var token = localStorage.getItem("mytoken");
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
      let options = new RequestOptions({ headers: headers });
    return this.httpService.get(this.searchMoviesUrl +movie,options).map(
      (res: Response) => res.json());
  }
  searchMoviesByCategory(category): Observable<any> {
    var token = localStorage.getItem("mytoken");
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token });
      let options = new RequestOptions({ headers: headers });
    return this.httpService.get(this.searchCategoryUrl +category,options).map(
      (res: Response) => res.json());
  }
}