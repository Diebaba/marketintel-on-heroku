
import { Component, OnInit } from '@angular/core';
import {OffredemploiService } from 'src/app/services/offredemploi.service';

declare var google: any;
@Component({
  selector: 'app-offre',
  templateUrl: './offre.component.html',
  styleUrls: ['./offre.component.css']
})
export class OffreComponent implements OnInit {

  searchText;
  offre: any [] = [];
  currentoffreemploi = null;
  tab: any[];
  page = 1;
  pageSize =10;

  constructor(private offredemploiService: OffredemploiService) { }

  ngOnInit(): void {
    this.retrieveOffre();
  }

  retrieveOffre(): void {


    this.offredemploiService.get()
      .subscribe(
        data => {
          this.offre = data;
         // this.chart();
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}





 
  


