import { Component, OnInit } from '@angular/core';
import { ImmobilierService} from 'src/app/services/immobilier.service'


@Component({
  selector: 'app-immobilier',
  templateUrl: './immobilier.component.html',
  styleUrls: ['./immobilier.component.css']
})
export class ImmobilierComponent implements OnInit {
  
  
  immobilier: any [] = [];
  currentimmobilier = null;
  tab: any[];

  constructor(private immobilierService: ImmobilierService) { }

  ngOnInit(): void {
    this.retrieveImmobilier();
  }
  retrieveImmobilier(): void {


    this.immobilierService.get()
      .subscribe(
        data => {
          this.immobilier = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
