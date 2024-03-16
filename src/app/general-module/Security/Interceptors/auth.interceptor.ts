import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private router: Router) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    if(!sessionStorage.getItem('acces_token')){

      if(request.url.split('/').includes('clientes')){
        let authReq = request;
        return next.handle(authReq);
      }
      else{
      this.router.navigate(['/client/login']);
      }
    }


    return next.handle(this.addAccessToken(request));
  }

  addAccessToken(request: HttpRequest<unknown>): HttpRequest<unknown> {

    let authToken = sessionStorage.getItem('acces_token')
    let newRequest = request;

    if (authToken) {
      return newRequest.clone({
        headers: newRequest.headers.append('Authorization', 'Bearer ' + authToken)
    });
    }
    return newRequest;
  }
}
