import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ShortenPipe } from './shorten.pipe';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavBarComponent,
    ShortenPipe,
    FooterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ShortenPipe,
    NavBarComponent,
    FooterComponent
  ],
})
export class SharedModule { }
