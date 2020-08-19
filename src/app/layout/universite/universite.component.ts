import { Component, OnInit } from '@angular/core';
import { UniversiteService } from 'src/app/universite.service';
import * as Chart from 'chart.js';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';

declare var google: any;
@Component({
  selector: 'app-universite',
  templateUrl: './universite.component.html',
  styleUrls: ['./universite.component.css']
})
export class UniversiteComponent implements OnInit {
  universite: any [] = [];
  currentUniversite = null;
  tab: any[];
  constructor(private universiteService: UniversiteService) { }

  ngOnInit(): void {
    this.retrieveUniversite();
  }
  retrieveUniversite(): void {


    this.universiteService.get()
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
