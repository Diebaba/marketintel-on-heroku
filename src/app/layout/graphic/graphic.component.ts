import { Component, OnInit } from '@angular/core';
import { ExamenService } from 'src/app/services/examen.service';
import { InvestissementService } from 'src/app/services/investissements.service';

declare var google : any;
@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
export class GraphicComponent implements OnInit {
  examen: any[] = [];
  currentExamen = null;
  tab: any[];
  investissement: any[] = [];
  currentInvestissement
  

  
  constructor(private examenService: ExamenService, private investissementService: InvestissementService) { }

  ngOnInit(): void  { 
    this.retrieveExamen();
    this.retrieveInvestissement();
  }
    
   /* 
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Year', 'Visitations', { role: 'style' } ],
          ['', 30, 'color: gray; opacity: 0.8'],
          ['', 40, 'color: gray; opacity: 0.8'],
          ['', 60, 'color: gray; opacity: 0.8'],
          ['', 30, 'color: gray; opacity: 0.8'],
          ['', 45, 'color: gray; opacity: 0.8'],
          ['', 40, 'color: gray; opacity: 0.8'],
          ['', 28, 'color: gray; opacity: 0.8']

        ]);
    
      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1,
                       { calc: "stringify",
                         sourceColumn: 1,
                         type: "string",
                         role: "annotation" },
                       2]);
    
      var options = {
        width: 600,
        height: 400,
        bar: {groupWidth: "55%"},
        legend: { position: "left" }
       
      };
      var chart = new google.visualization.ColumnChart(document.getElementById("chart_div"));
      chart.draw(view, options);
    }

   

     
      google.charts.load("current", {
        "packages":["map"],
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        "mapsApiKey": "AIzaSyASQhB3bPOU5_8I2VFaV9mW0WIFgKZJqpg"
      });
      google.charts.setOnLoadCallback(drawChart4);
      function drawChart4() {
        var data = google.visualization.arrayToDataTable([
          ['Lat', 'Long', 'Name'],
          [14.7405626, -17.4387363, 'Volkeno']
          
         
        ]);

        var map = new google.visualization.Map(document.getElementById('map_div'));
        map.draw(data, {
          showTooltip: true,
          showInfoWindow: true
        });
      }

      

} */

retrieveExamen(): void {


  this.examenService.get()
    .subscribe(
      data => {
        this.examen = data;
        this.chart();
        this.chart1();

        // console.log(this.tab);
      },
      error => {
        console.log(error);
      });
}
chart() {
  const items = this.examen.map(item => {
    console.log("item", item);
    return [item.annee, item.taux_admission, ]
  });
  google.charts.load('current', {'packages':['corechart']});
  google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Années','Taux admission']
    ].concat(items));

    var options = {
      title: 'Admission au baccalairéat de 2015 à 2019',
      curveType: 'function',
      legend: { position: 'bottom' }
    };

    var chart = new google.visualization.LineChart(document.getElementById('curve_chart'));

    chart.draw(data, options);
  }
   
  

}

chart1() {
  const items = this.examen.map(item => {
    console.log("item", item);
    return [item.annee, item.mention_tres_bien, item.mention_bien, item.mention_Assez_bien, item.mention_Passable ]
  });
    google.charts.load("current", { packages: ["corechart"] });
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['années','Très bien', 'Bien', 'Asez bien', 'Passable']
      ].concat(items));
        
      var view = new google.visualization.DataView(data);
      view.setColumns([0, 1, 2, 3, 4]);

      var options = {
        title: "Le nombre admis au bac de 2015 à 2019 selon les mentions",
        width: 600,
        height: 400,
        bar: { groupWidth: "55%" },
        legend: { position: 'top', maxLines: 5 },
        isStacked: false

      };
      var chart = new google.visualization.ColumnChart(document.getElementById("chart_div1"));
      chart.draw(view, options);
    }
  

}
retrieveInvestissement(): void {


  this.investissementService.get()
    .subscribe(
      data => {
        this.investissement = data;
        this.chart2();
        

        // console.log(this.tab);
      },
      error => {
        console.log(error);
      });
}
chart2 () {
  const items = this.investissement.map(item => {
    console.log("item", item);
    return [item.annee, item.depense_pour_education_en_m, ]
  });
  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {
    var data = google.visualization.arrayToDataTable([
      ['Années','Investissement']
    ].concat(items));
      
    var view = new google.visualization.DataView(data);
    view.setColumns([0, 1,
      {
        calc: "stringify",
        sourceColumn: 1,
        type: "string",
        role: "annotation"
      },
      ]);

    var options = {
      title: "Investissement de l Etat dans l education de 2010 à 2018 en milion de Franc CFA",
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
 





  

}
