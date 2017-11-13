import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private connectService: ConnectService, private router: Router) { }

  ngOnInit() {
  }
  moviesButton = 0;
  addMovieFlag = 0;
  showMovieFlag = 0;
  movies:any;
  showMoviesFlag=0;
  showCategory(category) {
    this.connectService.searchMoviesByCategory(category).subscribe(res => {
      this.showMoviesFlag=1;
      this.movies=res;
    });
  }
  showMovieImageFlag = 0;
  select: any;
  showMovieImage(movie) {
    this.showMoviesFlag = 0;
    this.showMovieImageFlag = 1;
    this.select = movie;

  }
  close(){
    this.showMoviesFlag=0;
    this.showMovieImageFlag = 0;


  }
  
  logout() {
    localStorage.setItem("loginStatus", "0");
    this.router.navigate(['/login']);
  }
  showMovies() {
    this.showMovieImageFlag = 0;
    this.addMovieFlag = 0;
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

}
