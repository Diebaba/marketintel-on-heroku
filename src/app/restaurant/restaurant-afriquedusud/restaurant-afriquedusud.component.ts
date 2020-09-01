import { Component, OnInit } from '@angular/core';
import {RestaurantAfriqueService } from 'src/app/services/restaurant-afrique.service';

declare var google: any;
@Component({
  selector: 'app-restaurant-afriquedusud',
  templateUrl: './restaurant-afriquedusud.component.html',
  styleUrls: ['./restaurant-afriquedusud.component.css']
})
export class RestaurantAfriquedusudComponent implements OnInit {
  searchText;
  restaurant: any [] = [];
  currentrestaurantafriquedusud = null;
  tab: any[];
  page = 1;
  pageSize =10;

  constructor(private restaurantAfriqueService: RestaurantAfriqueService) { }

  ngOnInit(): void {
    this.retrieveRestaurant();
  }

  retrieveRestaurant(): void {


    this.restaurantAfriqueService.get()
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





 
  


