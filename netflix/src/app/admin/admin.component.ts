import { Component, OnInit } from '@angular/core';
import { ConnectService } from '../connect.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private connectService: ConnectService, private router: Router) { }

  ngOnInit() {
  }
  private base64 = "";
  
    handleFileSelect(evt) {
      var files = evt.target.files;
      var file = files[0];
  
      if (files && file) {
        var reader = new FileReader();
  
        reader.onload = this._handleReaderLoaded.bind(this);
  
        reader.readAsBinaryString(file);
        
        console.log(file.name)
        var str = file.name.split('.');
        this.movie.extension=str[1];
      }
    }
  
    _handleReaderLoaded(readerEvt) {
      var binaryString = readerEvt.target.result;
      this.base64 = btoa(binaryString);
      this.movie.path = this.base64;
    }
  search:any;
  moviesButton = 0;
  addMovieFlag = 0;
  showMovieFlag = 0;
  searchMovies(){
    this.connectService.searchMovies(this.search).subscribe(res => {
      console.log(this.search)
      console.log(res);
      this.showMovieImageFlag = 0;
      this.addMovieFlag = 0;
      this.showMovieFlag = 0;
            this.showMoviesFlag = 1;
            this.movies = res;
      
          });
  }
  showMoviesFunction() {
    this.showMoviesFlag = 0;
    this.showMovieImageFlag = 0;
    this.addMovieFlag = 0;
    this.showMovieFlag = 0;
    if (this.moviesButton == 0) {
      this.moviesButton = 1;
    }
    else {
      this.moviesButton = 0
    }
  }
  addMovies() {
    this.showMoviesFlag = 0;
    this.showMovieImageFlag = 0;
    this.showMovieFlag = 0;
    if (this.addMovieFlag == 0) {
      this.addMovieFlag = 1;
    }
    else {
      this.addMovieFlag = 0
    }
  }
  movie = {
    name: "",
    category: "",
    path: "",
    extension:""
  };

  addMovieToDB() {
    this.connectService.postMovie(this.movie).subscribe(res => {
      if (res.success == true) {
        this.addMovieFlag = 0;

        alert("Movie Added Successfully");
      }
      else {
        alert(res);
      }
    });
  }
  showMoviesFlag = 0;
  showMovieImageFlag = 0;
  movies: any;
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
  select: any;
  showMovieImage(movie) {
    this.showMoviesFlag = 0;
    this.showMovieImageFlag = 1;
    this.select = movie;

  }
  updateMovieFlag = 0;
  updateMovie = {
    name: "",
    newName: ""
  };
  updateMoviesFlag() {
    if (this.updateMovieFlag == 0) {
      this.updateMovieFlag = 1;
    }
    else {
      this.updateMovieFlag = 0;
    }

  }
  updateMovies(){
    this.updateMovie.name=this.select.name;
    this.connectService.updateMovie(this.updateMovie).subscribe(res => {
      if (res.success != false) {
        this.addMovieFlag = 0;
        this.updateMovieFlag=0;
        alert("Movie Updated Successfully");
      }
      else {
        alert(res.message);
      }
    });
  }
  deleteMovies(){
    this.connectService.deleteMovie(this.select.name).subscribe(res => {
      if (res.success != false) {
        this.addMovieFlag = 0;
        this.updateMovieFlag=0;
        alert("Movie Deleted Successfully");
      }
      else {
        alert(res.message);
      }
    });
  }
  

}