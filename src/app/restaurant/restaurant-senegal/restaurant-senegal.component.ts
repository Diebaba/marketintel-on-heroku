import { Component, OnInit } from '@angular/core';
import {RestaurantSenService } from 'src/app/services/restaurant-sen.service';

declare var google: any;

@Component({
  selector: 'app-restaurant-senegal',
  templateUrl: './restaurant-senegal.component.html',
  styleUrls: ['./restaurant-senegal.component.css']
})
export class RestaurantSenegalComponent implements OnInit {

  searchText;
  restaurant: any [] = [];
  currentrestaurantsen = null;
  tab: any[];
  page = 1;
  pageSize =10;

  constructor(private restaurantSenService: RestaurantSenService) { }

  ngOnInit(): void {
    this.retrieveRestaurant();
  }

  retrieveRestaurant(): void {


    this.restaurantSenService.get()
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
}





 
  
