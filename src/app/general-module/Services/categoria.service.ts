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
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl = environment.apiUrl + 'categorias';

  constructor(private http: HttpClient) {}

  getCategories(): Observable<any> {
    return this.http.get(this.baseUrl.concat('/getCats'), {
      headers: headers,
    });
  }

  getNewsByCategory(id: any): Observable<any> {
    return this.http.get(this.baseUrl.concat('/getNews/' + id), { headers: headers });
  }

}
