import { Component, OnInit } from '@angular/core';
import { VoitureService} from 'src/app/services/voiture.service';

@Component({
  selector: 'app-voiture',
  templateUrl: './voiture.component.html',
  styleUrls: ['./voiture.component.css']
})
export class VoitureComponent implements OnInit {
  searchText;
  voiture: any [] = [];
  currentvoiture = null;
  tab: any[];
  filteredVoiture: any;
  filterString: any;
  page = 1;
  pageSize =10;
  

  constructor(private voitureService: VoitureService) {
    
   }


  ngOnInit(): void {
    this.retrieveVoiture();
  }
  retrieveVoiture(): void {


    this.voitureService.get()
      .subscribe(
        data => {
          this.voiture = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}
