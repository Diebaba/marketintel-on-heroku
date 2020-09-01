import { Component, OnInit } from '@angular/core';
import { UnivPubliqueService } from 'src/app/services/univ-publique.service';
import * as Chart from 'chart.js';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

declare var google: any;
@Component({
  selector: 'app-univ-publique',
  templateUrl: './univ-publique.component.html',
  styleUrls: ['./univ-publique.component.css']
})
export class UnivPubliqueComponent implements OnInit {
  searchText
  universite: any [] = [];
  currentUniversite = null;
  tab: any[];
  page = 1;
  pageSize =10;
  
  constructor(private univPubliqueService: UnivPubliqueService ) { }

  ngOnInit(): void {
    this.retrieveUniversitePublique();
  }
  retrieveUniversitePublique(): void {


    this.univPubliqueService.get()
      .subscribe(
        data => {
          this.universite = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
 


   /* chart() {
    const items = this.universite.map(item => {
      console.log("item", item);
      return [item.nom,item.type_univ, ]
    });
      google.charts.load("current", { packages: ["corechart"] });
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['nom','type']
        ].concat(items));
          
       

          var options = {
            title: 'My Daily Activities',
            is3D: false,
          };
  
        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
      }

    

  }  */


 
}


