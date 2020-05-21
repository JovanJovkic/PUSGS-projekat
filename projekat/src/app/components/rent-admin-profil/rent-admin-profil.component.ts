import { Component, OnInit } from '@angular/core';
import { RentACarService } from 'src/app/services/rent-a-car/rent-a-car.service';
import { RentACarServis } from 'src/app/entities/rentacar/rentacar';

@Component({
  selector: 'app-rent-admin-profil',
  templateUrl: './rent-admin-profil.component.html',
  styleUrls: ['./rent-admin-profil.component.css']
})
export class RentAdminProfilComponent implements OnInit {

  allRentACarServis: Array<RentACarServis>;

  constructor(private rentACarService: RentACarService) { 
    this.allRentACarServis = new Array<RentACarServis>();    
  }

  ngOnInit(): void {
    this.loadRentServis();
  }

  /*
  loadRentServis(): void {
    this.allRentACarServis = this.rentACarService.loadRentACar();
     this.rentACarService.ucitajRentACarServise();
  }*/

  loadRentServis() {
    this.rentACarService.ucitajRentACarServise().subscribe(
    (res: any) => {
      //console.log(res);
      if (res != null ) {
        var temp = res;
        temp.forEach(element => {
          console.log(element);
          const ak5 = new RentACarServis(element.id,element.naziv,element.adresa,element.promotivniOpis, 4);
          this.allRentACarServis.push(ak5);
        });

      } else {
      }
    },
    err => {
      console.log('greska');
      console.log(err);
    }
    );
  }
}
