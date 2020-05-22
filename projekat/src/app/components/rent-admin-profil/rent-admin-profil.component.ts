import { Component, OnInit } from '@angular/core';
import { RentACarService } from 'src/app/services/rent-a-car/rent-a-car.service';
import { RentACarServis } from 'src/app/entities/rentacar/rentacar';
import { TransformVisitor } from '@angular/compiler/src/render3/r3_ast';
import { Vozilo } from 'src/app/entities/vozilo/vozilo';
import { VoziloService } from 'src/app/services/vozilo/vozilo.service';

@Component({
  selector: 'app-rent-admin-profil',
  templateUrl: './rent-admin-profil.component.html',
  styleUrls: ['./rent-admin-profil.component.css']
})
export class RentAdminProfilComponent implements OnInit {

  allRentACarServis: Array<RentACarServis>;
  servisToEdit:RentACarServis;
  servisZaVozilo:RentACarServis;

  constructor(private rentACarService: RentACarService,private voziloService: VoziloService) { 
    this.allRentACarServis = new Array<RentACarServis>();    
  }

  ngOnInit(): void {
    this.loadRentServis();
    //this.loadVozila();
  }

  dodajVoziloZaRentACar(servis: RentACarServis): void {
    this.servisZaVozilo = servis;
  }

  dodajVoziloInfo():void{
    let nazivVoz = (<HTMLInputElement> document.getElementById("nazivVoz")).value;
    let markaVoz = (<HTMLInputElement> document.getElementById("markaVoz")).value;
    let modelVoz = (<HTMLInputElement> document.getElementById("modelVoz")).value;
    let godinaVoz = (<HTMLInputElement> document.getElementById("godinaVoz")).value;
    let brojSedVoz = (<HTMLInputElement> document.getElementById("brojSedVoz")).value;
    let tipVoz = (<HTMLInputElement> document.getElementById("tipVoz")).value;

    var temp = new Vozilo(5,nazivVoz,markaVoz,modelVoz,+godinaVoz,+brojSedVoz,tipVoz);
    temp.rentACarId = this.servisZaVozilo.id;
    this.servisZaVozilo.vozila.push(temp);

    this.voziloService.dodajVozilo(temp).subscribe(
      (res: any) => {
        if (res != null ) {
          //alert("Vasa izmena je sacuvana!");
          //this.loadRentServis();
          //(<HTMLInputElement> document.getElementById("naslovEditEdit")).value = "Vasa izmena je sacuvana!";
        }
      }
    );
    
    this.rentACarService.izmeniRentACarServis(this.servisZaVozilo).subscribe(
      (res: any) => {
        if (res != null ) {
          alert("Vasa izmena je sacuvana!");
          this.loadRentServis();
          //this.loadVozila();
          (<HTMLInputElement> document.getElementById("naslovEditEdit")).value = "Vasa izmena je sacuvana!";
        }
      }
    );

  }

  editRentACar(servis: RentACarServis): void {
    this.servisToEdit = servis;
  }

  editRentACarInfo(): void {
    let naziv = (<HTMLInputElement> document.getElementById("naziv")).value;
    let adresa = (<HTMLInputElement> document.getElementById("adresa")).value;
    let opis = (<HTMLInputElement> document.getElementById("opis")).value;

    this.servisToEdit.naziv = naziv;
    this.servisToEdit.adresa = adresa;
    this.servisToEdit.promotivniOpis = opis;

    this.rentACarService.izmeniRentACarServis(this.servisToEdit).subscribe(
      (res: any) => {
        if (res != null ) {
          alert("Vasa izmena je sacuvana!");
          this.loadRentServis();
          //this.loadVozila();
          (<HTMLInputElement> document.getElementById("naslovEditEdit")).value = "Vasa izmena je sacuvana!";
        }
      }
    );
    this.servisToEdit = null;
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
          
          const ak = new RentACarServis(element.id,element.naziv,element.adresa,element.promotivniOpis, 4);
          console.log(element);
          if(ak.vozila.length!=0)
          {
            console.log(ak.vozila);
            ak.vozila=element.vozila;
          }
         
          this.allRentACarServis.push(ak);
        });

        this.loadVozila();

      } else {
      }
    },
    err => {
      console.log('greska');
      console.log(err);
    }
    );
  }

  loadVozila()
  {
    this.voziloService.ucitajVozila().subscribe(
      (res: any) => {
        res.forEach(element => {

          console.log(element);
          this.allRentACarServis.forEach(item => {

            if(element.rentACarServisID == item.id)
            {
              item.vozila.push(element);
            }

          });

        });
      }
      );
  }
}
