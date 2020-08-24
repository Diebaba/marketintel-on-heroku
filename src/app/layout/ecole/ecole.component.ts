import { Component, OnInit } from '@angular/core';
import { EcoleService } from 'src/app/services/ecole.service';
 
@Component({
  selector: 'app-ecole',
  templateUrl: './ecole.component.html',
  styleUrls: ['./ecole.component.css']
})
export class EcoleComponent implements OnInit {
  ecole: [];
  currentEcole = null;
  currentIndex = -1;
  tab: any[];


  constructor(private ecoleService: EcoleService) { }

  ngOnInit(): void {
    this.retrieveEcole();
  }


  retrieveEcole(): void {


    this.ecoleService.get()
      .subscribe(
        data => {
          this.ecole = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
