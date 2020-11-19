import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  movie:Movie;
  movies: string[];
  givenRating:number[];

  movieForm = new FormGroup({
    userName: new FormControl(),
    selectedGender:new FormControl(),
    selectedMovie:new FormControl(),
    selectedRating:new FormControl(),
  });
  
  constructor() { 
    this.movie = new Movie();
  }

  ngOnInit(): void {
    this.movies =["Bad Boys", "Laxmii Bomb", "Avengers", "Inception"];
    this.givenRating=[1,2,3,4,5];

  }

  doProcess()
  {
    this.movie.userName =this.movieForm.get('userName').value;
    this.movie.selectedGender =this.movieForm.get('selectedGender').value;
    this.movie.selectedMovie =this.movieForm.get('selectedMovie').value;
    this.movie.selectedRating =this.movieForm.get('selectedRating').value;
    alert("Hello, "+ this.movie.userName
    +"- your selected movie: "+ this.movie.selectedMovie
    +", and given rating: "+this.movie.selectedRating);
  }
}
