import { Component, OnInit } from '@angular/core';
import {RestaurantService } from 'src/app/services/restaurant.service';



declare var google: any;

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
 
  restaurant: any [] = [];
  currentrestaurant = null;
  tab: any[];
  constructor(private restaurantService: RestaurantService) { }

  ngOnInit(): void {
    this.retrieveRestaurant();
  }

  retrieveRestaurant(): void {


    this.restaurantService.get()
      .subscribe(
        data => {
          this.restaurant = data;
         // this.chart();
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  /* chart(){
    const items = this.restaurant.map(item => {
      console.log("item", item);
      return [item.pays, item.nom, ]
    });
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
      var data = google.visualization.arrayToDataTable([
        ['Pays','Nom']
      ].concat(items));

      var options = {
        title: 'My Daily Activities',
        pieHole: 0.4,
      };

      var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
      chart.draw(data, options);
    }

  } */
}
