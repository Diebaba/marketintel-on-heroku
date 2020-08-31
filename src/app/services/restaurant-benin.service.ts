import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl = 'https://cors-anywhere.herokuapp.com/https://marketinteltest.herokuapp.com/resto_api/resto_pays/benin';



@Injectable({
  providedIn: 'root'
})
export class RestaurantBeninService {

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(baseUrl);
  }
}
