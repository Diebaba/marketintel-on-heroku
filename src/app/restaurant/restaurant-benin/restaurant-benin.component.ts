import { Component, OnInit } from '@angular/core';
import { RestaurantBeninService } from 'src/app/services/restaurant-benin.service';

@Component({
  selector: 'app-restaurant-benin',
  templateUrl: './restaurant-benin.component.html',
  styleUrls: ['./restaurant-benin.component.css']
})
export class RestaurantBeninComponent implements OnInit {
  searchText;

  restaurant: any [] = [];
  currentrestaurantbenin = null;
  tab: any[];
  constructor(private restaurantBeninService: RestaurantBeninService) { }

  ngOnInit(): void {
    this.retrieveRestaurant();
  }

  retrieveRestaurant(): void {


    this.restaurantBeninService.get()
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


