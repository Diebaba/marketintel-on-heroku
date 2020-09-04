import { Component, OnInit } from '@angular/core';

import * as Chart from 'chart.js';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Color, BaseChartDirective, Label } from 'ng2-charts';
declare var google: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
 
  constructor( ) { }
 ngOnInit() {
   this.chart();

 }
  
  /* current = 0;
  img_list = [
    'https://picsum.photos/600/400/?image=0',
    'https://picsum.photos/600/400/?image=1',
    'https://picsum.photos/600/400/?image=2',
  ];

  ngOnInit() {
    setInterval(() => {
      this.current = ++this.current % this.img_list.length;
    }, 2000);
  } */
  
  chart() {
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Taux d admission', 'Taux d echec'],
        ['Admis',     35.9],
        ['Ajornés',   64.1]
      ]);

      var options = {
        title: 'Taux d admission et d echec du bac 2018',
        pieHole: 0.4,
      };

      var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
      chart.draw(data, options);
    }

    

  } 

}
