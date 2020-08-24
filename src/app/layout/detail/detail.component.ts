import { Component, OnInit } from '@angular/core';
import { AdmissionService } from 'src/app/services/admission.service';
import { ScolarisationService } from 'src/app/services/scolarisation.service';
import { NiveauEtudeService } from 'src/app/services/niveau-etude.service';
import * as Chart from 'chart.js';

declare var google: any;
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  admission: [];
  currentAdmission = null;
  currentIndex = -1;
  region = '';
  scolarisation: any[] = [];
  currentScolarisation = null;
  niveau_etude: [];
  currentNiveauEtude = null;
  tab: any[];

  constructor(private admissionService: AdmissionService, private scolarisationService: ScolarisationService, private niveauEtudeService: NiveauEtudeService) { }

  ngOnInit(): void {
    this.retrieveAdmission();
    this.retrieveScolarisation();
    this.retrieveNiveauEtude();
    //this.chart();
  }

  retrieveAdmission(): void {


    this.admissionService.get()
      .subscribe(
        data => {
          this.admission = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  retrieveScolarisation(): void {


    this.scolarisationService.get()
      .subscribe(
        data => {
          this.scolarisation = data;
          this.chart();
          // console.log(this.tab);
        },
        error => {
          console.log(error);
        });
  }


  retrieveNiveauEtude(): void {


    this.niveauEtudeService.get()
      .subscribe(
        data => {
          this.niveau_etude = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  chart() {
    const items = this.scolarisation.map(item => {
      console.log("item", item);
      return [item.region,item.garcon,item.fille, ]
    });
      google.charts.load("current", { packages: ["corechart"] });
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['regions','garcons', 'filles']
        ].concat(items));
          
        var view = new google.visualization.DataView(data);
        view.setColumns([0, 1,
          {
            calc: "stringify",
            sourceColumn: 1,
            type: "string",
            role: "annotation"
          },
          2]);

        var options = {
          title: "le nombre de garçons et filles scolarisés par région",
          width: 600,
          height: 400,
          bar: { groupWidth: "55%" },
          legend: { position: 'top', maxLines: 3 },
          isStacked: true

        };
        var chart = new google.visualization.ColumnChart(document.getElementById("chart_div"));
        chart.draw(view, options);
      }
    

  }

 
  /* chart1() {
    const items = this.scolarisation.map(item => {
      console.log("item", item);
      return [item.region,item.indice_de_parite, ]
    });
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart1);
    function drawChart1() {
        var data = google.visualization.arrayToDataTable([
          ['regions','indice_de_parite']
        ].concat(items));
    var options = {
      title: 'My Daily Activities'
    };
        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
      }
    

  } */
chart1() {
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart1);

  function drawChart1() {

    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ]);

    var options = {
      title: 'My Daily Activities'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
  }

}
   
}


  
  

  

  


