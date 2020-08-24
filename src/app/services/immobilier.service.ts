import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



const baseUrl= 'https://cors-anywhere.herokuapp.com/https://marketinteltest.herokuapp.com/immo_api/immo';
@Injectable({
  providedIn: 'root'
})
export class ImmobilierService {
  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(baseUrl);
  }
}
