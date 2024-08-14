import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  

  bannerResult?: any = [];
  topRatedResult?: any = [];

  
  constructor(private moviesService : MovieService) { }

  ngOnInit(): void {
    this.bannerData();
    this.topRatedMovies();
  }

  bannerData () {
    this.moviesService.sliderMovies().subscribe((result) => {
      console.log(result)
      this.bannerResult = result.results;
    });
  }
   
  topRatedMovies(){
    this.moviesService.getTopRated().subscribe((result) => {
      this.topRatedResult = result.results;
      console.log('topRatedResult',result)
    });
  }

}
