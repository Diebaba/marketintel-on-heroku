
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/* Api Local
 const baseUrl = 'http://127.0.0.1:8000/api/education_api/universite';
 */
// Api en ligne
const baseUrl = 'https://cors-anywhere.herokuapp.com/https://marketinteltest.herokuapp.com/voiture_api/cars';

@Injectable({
  providedIn: 'root'
})
export class VoitureService {

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(baseUrl)
    .pipe(
      map((voiture: any) => {
        return voiture.map(voiture => { 
          return {
            modele: voiture.modele, 
            constructeur: voiture.constructeur, 
            annee: voiture.annee,
            prix: voiture.prix
          }
        })
      })
    );
  }


  
}
        