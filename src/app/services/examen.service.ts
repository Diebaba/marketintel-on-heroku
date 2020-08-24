import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';




/* Api Local
 const baseUrl = 'http://127.0.0.1:8000/api/education_api/examen';
 */
// Api en ligne
const baseUrl = 'https://cors-anywhere.herokuapp.com/https://marketintelapi.herokuapp.com/education_api/examen';

@Injectable({
  providedIn: 'root'
})
export class ExamenService {

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(baseUrl);
  }
}
