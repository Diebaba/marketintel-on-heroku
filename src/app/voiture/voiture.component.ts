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
  apiNameList: any;
  filterString: any;
 
  

  constructor(private voitureService: VoitureService) { }

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

 
  transformPlus(event) {
    console.log(event);
  }

  /* getFilteredModele() {
    this.filteredVoiture = this.apiNameList.filter(voiture => voiture.modele.toLowerCase().indexOf(this.filterString.toLowerCase()) > -1);
  } */

  


}
