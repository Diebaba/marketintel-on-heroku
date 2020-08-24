import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



/* Api Local
 const baseUrl = 'http://127.0.0.1:8000/api/scolarisation';
 */
// Api en ligne
const baseUrl = 'https://cors-anywhere.herokuapp.com/https://marketintelapi.herokuapp.com/education_api/scolarisation';

@Injectable({
  providedIn: 'root'
})
export class ScolarisationService {

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(baseUrl);

  }

}
