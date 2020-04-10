import { Component, OnInit } from '@angular/core';
import { RentACarService } from 'src/app/services/rent-a-car.service';
import { RentACarServis } from 'src/app/entities/rentacar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rent-profil',
  templateUrl: './rent-profil.component.html',
  styleUrls: ['./rent-profil.component.css']
})
export class RentProfilComponent implements OnInit {

  allProfiles: Array<RentACarServis>;
  profil:RentACarServis;
  id: number;
  
  constructor(private rentACarServis: RentACarService,private route: ActivatedRoute) { 
    this.allProfiles = new Array<RentACarServis>();
    route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit(): void {
    this.loadRentProfile();
  }

  loadRentProfile(): void {
    this.allProfiles = this.rentACarServis.loadRentACar();
    this.allProfiles.forEach(element => {
      if(element.id==this.id)
      {
        this.profil=element;
      }
    });
  }

}
