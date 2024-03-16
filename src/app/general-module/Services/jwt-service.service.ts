import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JwtServiceService {

  constructor() { }

  tokenExpired() {
    if(!sessionStorage.getItem('acces_token')){
      return true
    }

    else{
      const token: string = sessionStorage.getItem('acces_token') as string;

      const expiry = (JSON.parse(atob(token.split('.')[1]))).exp;
      const isExpired = (Math.floor((new Date).getTime() / 1000)) >= expiry
      if(isExpired){
        sessionStorage.removeItem('acces_token');
      }
     return isExpired;
    }
  }
}
