import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';





/* Api Local
 const baseUrl = 'http://127.0.0.1:8000/api/education_api/ecole';
 */
// Api en ligne
const baseUrl = 'https://cors-anywhere.herokuapp.com/https://marketinteltest.herokuapp.com/education_api/type_univ/prive';


@Injectable({
  providedIn: 'root'
})
export class EcoleService {

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(baseUrl);
  }

  
}
