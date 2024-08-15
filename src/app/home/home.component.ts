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
  actionResult?:any = [];
  comedyResult?:any = [];
  adventureResult?:any = [];
  sciResult?:any = [];
  documentResult?:any = [];
  constructor(private moviesService : MovieService) { }

  ngOnInit(): void {
    this.bannerData();
    this.getTrendingMovies();
    this.getActionMovies();
    this.getComdeyMovies();
    this.getAdventureMovies();
    this.getSCiMovies();
    this.getDocumentariesMovies();
  }

  bannerData () {
    this.moviesService.sliderMovies().subscribe((result) => {
      console.log(result)
      this.bannerResult = result.results;
    });
  }
   
  getTrendingMovies(){
    this.moviesService.getTrendingMovies().subscribe((result) => {
      this.topRatedResult = result.results;
      console.log('topRatedResult',result)
    });
  }

  getActionMovies(){
    this.moviesService.getActionMovies().subscribe((res) => {
      this.actionResult = res.results;
      console.log('topRatedResult111',res)

    });
  }


  getComdeyMovies(){
    this.moviesService.getComedyMovies().subscribe((res) => {
      this.comedyResult = res.results;
      console.log("res",res)
    });
  }

  getAdventureMovies(){
    this.moviesService.getAdventureMovies().subscribe((res) => {
      this.adventureResult = res.results;

    });
  }

  getSCiMovies(){
    this.moviesService.getScienceFictionMovies().subscribe((res) => {
      this.sciResult = res.results;
    });
  }

  getDocumentariesMovies(){
    this.moviesService.getDocumentaries().subscribe((res) => {
      this.documentResult = res.results;
    });
  }
}
