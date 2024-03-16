import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Authorization } from '../Data/Interfaces/authorization';
import { Observable } from 'rxjs';
import { SignUpInterface } from '../Data/Interfaces/sign-up-interface';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': 'http://localhost:4200',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Requested-With, Accept',
  'Access-Control-Allow-Credentials': 'true'
});

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl = environment.apiUrl + 'clientes';


  constructor(private http: HttpClient) { }

  authorize(body: Authorization): Observable<any> {
    return this.http.post(this.baseUrl.concat("/authenticate"), body, {
      headers: headers
    });
  }

  signUp(body: SignUpInterface): Observable<any>{
    return this.http.post(this.baseUrl + '/register', body, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
      })
    });
  }


}
