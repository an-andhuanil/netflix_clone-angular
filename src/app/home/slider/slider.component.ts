import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  bannerResult?: any = [];

  
  constructor(private moviesService : MovieService) { }

  ngOnInit(): void {
    this.bannerData();
  }

  bannerData () {
    this.moviesService.sliderMovies().subscribe((result) => {
      console.log(result)
      this.bannerResult = result.results;
    });
  }
}
