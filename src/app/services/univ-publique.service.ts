import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


/* Api Local
 */
// Api en ligne
const baseUrl = 'https://cors-anywhere.herokuapp.com/https://marketinteltest.herokuapp.com/education_api/type_univ/public';



@Injectable({
  providedIn: 'root'
})
export class UnivPubliqueService {

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(baseUrl);
  }
}
        


