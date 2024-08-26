import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { CardComponent } from './card/card.component';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { ShortenPipe } from '../shared/shorten.pipe';
import { SharedModule } from '../shared/shared.module';
import { MovieService } from '../services/movie.service';

const routes: Routes = [
  {
    path: '',
  component: HomeComponent,
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    SliderComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    SharedModule
  ],
  entryComponents: [
    ShortenPipe,
    SharedModule
  ],
  exports: [RouterModule],
  providers: [MovieService],
})
export class HomeModule { }
