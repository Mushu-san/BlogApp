import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

const headers = new HttpHeaders({
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': 'http://localhost:4200',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
  'Access-Control-Allow-Headers':
    'Origin, Content-Type, X-Requested-With, Accept',
  'Access-Control-Allow-Credentials': 'true',
});

@Injectable({
  providedIn: 'root',
})
export class NoticiasService {
  baseUrl = environment.apiUrl + 'noticias';

  constructor(private http: HttpClient) {}

  getNews(): Observable<any> {
    return this.http.get(this.baseUrl.concat('/getNews'), {
      headers: headers,
    });
  }

  getNewsById(id: any): Observable<any> {
    return this.http.get(this.baseUrl.concat('/getNews/' + id), { headers: headers });
  }
}
