import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { ShortenPipe } from './shared/shorten.pipe';
import { SliderComponent } from './home/slider/slider.component';
import { CardComponent } from './home/card/card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MovieService } from './services/movie.service';




@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ShortenPipe,
    SliderComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  exports:[
    ShortenPipe
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
