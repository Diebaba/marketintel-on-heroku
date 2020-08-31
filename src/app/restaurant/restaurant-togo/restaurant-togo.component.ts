import { Component, OnInit } from '@angular/core';
import {RestaurantTogoService } from 'src/app/services/restaurant-togo.service';



declare var google: any;
@Component({
  selector: 'app-restaurant-togo',
  templateUrl: './restaurant-togo.component.html',
  styleUrls: ['./restaurant-togo.component.css']
})
export class RestaurantTogoComponent implements OnInit {
  searchText;
  restaurant: any [] = [];
  currentrestauranttogo = null;
  tab: any[];
  constructor(private restaurantTogoService: RestaurantTogoService) { }

  ngOnInit(): void {
    this.retrieveRestaurant();
  }

  retrieveRestaurant(): void {


    this.restaurantTogoService.get()
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





 
  


