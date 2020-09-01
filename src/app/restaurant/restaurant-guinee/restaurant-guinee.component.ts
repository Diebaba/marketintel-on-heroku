
import { Component, OnInit } from '@angular/core';
import {RestaurantGuineeService } from 'src/app/services/restaurant-guinee.service';

declare var google: any;

@Component({
  selector: 'app-restaurant-guinee',
  templateUrl: './restaurant-guinee.component.html',
  styleUrls: ['./restaurant-guinee.component.css']
})
export class RestaurantGuineeComponent implements OnInit {
  searchText;
  restaurant: any [] = [];
  currentrestauranttogo = null;
  tab: any[];
  page = 1;
  pageSize =10;

  constructor(private restaurantGuineeService: RestaurantGuineeService) { }

  ngOnInit(): void {
    this.retrieveRestaurant();
  }

  retrieveRestaurant(): void {


    this.restaurantGuineeService.get()
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





 
  

