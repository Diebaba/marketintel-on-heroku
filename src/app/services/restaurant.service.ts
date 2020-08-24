import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/* Api Local
 const baseUrl = 'https://marketintelapi.herokuapp.com/resto_api/resto';
 */
// Api en ligne
const baseUrl = 'https://cors-anywhere.herokuapp.com/https://marketinteltest.herokuapp.com/resto_api/resto';



@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(baseUrl);
  }
}
        
