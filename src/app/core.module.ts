import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptorService } from "./auth/auth-interceptor.service";
import { MovieService } from "./services/movie.service";

@NgModule({
    providers: [
      MovieService,
        {
          provide : HTTP_INTERCEPTORS,
          useClass : AuthInterceptorService,
          multi : true
        },
      ],
})
export class CoreModule{

}