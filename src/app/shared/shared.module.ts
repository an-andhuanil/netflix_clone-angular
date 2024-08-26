import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ShortenPipe } from './shorten.pipe';



@NgModule({
  declarations: [
    NavBarComponent,
    ShortenPipe,
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ShortenPipe,
    NavBarComponent
  ],
})
export class SharedModule { }
