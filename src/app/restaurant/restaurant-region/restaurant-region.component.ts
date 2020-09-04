import { Component, OnInit } from '@angular/core';

import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurant-region',
  templateUrl: './restaurant-region.component.html',
  styleUrls: ['./restaurant-region.component.css']
})
export class RestaurantRegionComponent implements OnInit {
  searchText;
  restaurant: any [] = [];
  currentrestaurant = null;
  tab: any[];
  page = 1;
  pageSize =10;

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
}





 
  