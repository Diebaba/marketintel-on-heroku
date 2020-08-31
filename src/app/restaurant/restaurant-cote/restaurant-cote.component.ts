import { Component, OnInit } from '@angular/core';
import {RestaurantCoteService} from 'src/app/services/restaurant-cote.service';

@Component({
  selector: 'app-restaurant-cote',
  templateUrl: './restaurant-cote.component.html',
  styleUrls: ['./restaurant-cote.component.css']
})
export class RestaurantCoteComponent implements OnInit {

  restaurant: any [] = [];
  currentrestaurantcote = null;
  tab: any[];
  constructor(private restaurantCoteService: RestaurantCoteService) { }

  ngOnInit(): void {
    this.retrieveRestaurant();
  }

  retrieveRestaurant(): void {


    this.restaurantCoteService.get()
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

