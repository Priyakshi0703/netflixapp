import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-newuser',
  templateUrl: './newuser.component.html',
  styleUrls: ['./newuser.component.css']
})
export class NewuserComponent implements OnInit {

  constructor(private connectService: ConnectService, private router: Router) { }

  ngOnInit() {
  }
  search:any;
  moviesButton = 0;
  showMovieImageFlag = 0;
  showMoviesFlag = 0;
  movies:any;

  searchMovies(){
    this.connectService.searchMovies(this.search).subscribe(res => {
      console.log(this.search)
      console.log(res);
      this.showMovieImageFlag = 0;
      this.showMoviesFlag = 1;
      this.movies = res;

    });
}
   showMovies() {
    this.showMovieImageFlag = 0;
    if(this.showMoviesFlag==0){
      this.showMoviesFlag=1;
    }
    else{
      this.showMoviesFlag=0;
    }

    this.connectService.getMovies().subscribe(res => {
      this.movies = res;
      console.log(this.movies);

    });
  }
  select:any;
  showMovieImage(movie) {
    this.showMoviesFlag = 0;
    this.showMovieImageFlag = 1;
    this.select = movie;

  }
 

  }
  


