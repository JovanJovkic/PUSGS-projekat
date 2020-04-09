import { Component, OnInit } from '@angular/core';
import { RentACarService } from 'src/app/services/rent-a-car.service';
import { RentACarServis } from 'src/app/entities/rentacar';

@Component({
  selector: 'app-rent-pocetna',
  templateUrl: './rent-pocetna.component.html',
  styleUrls: ['./rent-pocetna.component.css']
})
export class RentPocetnaComponent implements OnInit {

  allRentACarServis: Array<RentACarServis>;

  constructor(private rentACarService: RentACarService) { 
    this.allRentACarServis = new Array<RentACarServis>();
    
  }

  ngOnInit(): void {
    this.loadRentServis();
  }

  loadRentServis(): void {
    this.allRentACarServis = this.rentACarService.loadRentACar();
    
    this.allRentACarServis.forEach(element => {
      console.log(element.naziv);
    });
    
  }

}
