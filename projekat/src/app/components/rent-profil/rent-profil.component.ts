import { Component, OnInit } from '@angular/core';
import { RentACarProfilService } from 'src/app/services/rent-a-car-profil.service';
import { RentACarProfil } from 'src/app/entities/rentacarProfil';

@Component({
  selector: 'app-rent-profil',
  templateUrl: './rent-profil.component.html',
  styleUrls: ['./rent-profil.component.css']
})
export class RentProfilComponent implements OnInit {

  allProfiles: Array<RentACarProfil>;

  
  constructor(private rentACarServis: RentACarProfilService) { 
    this.allProfiles = new Array<RentACarProfil>();
  }

  ngOnInit(): void {
    this.loadRentProfile();
  }

  loadRentProfile(): void {
    this.allProfiles = this.rentACarServis.loadRentACarProfil();
  }

}
