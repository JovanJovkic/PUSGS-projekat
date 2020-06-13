import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AircompaniesService } from 'src/app/services/aircompanies-service/aircompanies.service';
import { AirCompanies } from 'src/app/entities/aircompanies/aircompanies';
import { ActivatedRoute, Router } from '@angular/router';
import { Destinacija } from 'src/app/entities/destinacija/destinacija';
import { DestinacijaService } from 'src/app/services/destinacija-service/destinacija.service';
import { AbstractFilterParam } from 'src/app/entities/abstract-filter-param/abstract-filter-param';
import { StringFilterParam } from 'src/app/entities/string-filter-param/string-filter-param';
import { NumberFilterParam } from 'src/app/entities/number-filter-param/number-filter-param';
import { environment }  from 'src/environments/environment';
import { RezervacijaDestinacije } from 'src/app/entities/rezervacijaDestinacije/rezervacijaDestinacije';
import { RezervacijaDestinacijeService } from 'src/app/services/rezervacijaDestinacije/rezervacija-destinacije.service';
import { RentACarService } from 'src/app/services/rent-a-car/rent-a-car.service';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-avio-profil',
  templateUrl: './avio-profil.component.html',
  styleUrls: ['./avio-profil.component.css']
})
export class AvioProfilComponent implements OnInit {

  allProfiles: Array<AirCompanies>;
  profil:AirCompanies;
  id: number;

  rezervacija:RezervacijaDestinacije;
  uloga = environment.uloga;

  allDestinacija:Array<Destinacija>;
  filteredDestinacija:Array<Destinacija>;
  
  constructor(private airCompaniesServis: AircompaniesService, private rentService: RentACarService,private route: ActivatedRoute, private destinacijaService:DestinacijaService, private rezervacijaServis:RezervacijaDestinacijeService, private fb: FormBuilder,private router: Router) { 
    this.allProfiles = new Array<AirCompanies>();
    route.params.subscribe(params => { this.id = params['id']; });
    this.profil = new AirCompanies(0, "", "", "", "", "", "", "", "", "", "");
  }

  ngOnInit(): void {
  //  this.loadAvioCompanies();
    this.loadAirCompanies();
  }

  /*
  Getuloga():string{
    return environment.uloga;
  }*/

  /*
  loadAvioCompanies(): void {
    this.allProfiles = this.airCompaniesServis.loadAirCompanies();
    this.allProfiles.forEach(element => {
      if(element.id==this.id)
      {
        this.profil=element;
        this.allDestinacija = this.profil.destinacija;
        this.filteredDestinacija = this.allDestinacija;
      }
    });
  }
  */

 loadAirCompanies() {
  this.airCompaniesServis.ucitajOdredjenuAirCompany(this.id).subscribe(
  (res: any) => {
    //console.log(res);
    if (res != null ) {
      var temp = res;
      //temp.forEach(element => {
        
        const ak = new AirCompanies(temp.id,temp.nazivAvioKompanije,temp.adresa,temp.promotivniOpis, temp.destNaKojimPosluje, temp.letovi, temp.spisakKarataSaPopustomZaBrzuRez, temp.konfigSegMesta, temp.cenovnik, temp.infoPrtljag, temp.admin);
        console.log(temp);
        
        if(temp.destinacija!=null)
        {
          if(temp.destinacija.length!=0)
          {
            console.log(ak.destinacija);
            ak.destinacija=temp.destinacija;
          }
        }
       
        this.profil=ak;
     // });

      this.loadDestinacija();

    } else {
    }
  },
  err => {
    console.log('greska');
    console.log(err);
  }
  );
}

loadDestinacija()
{
  this.destinacijaService.ucitajDestinacijaZaAviokompanijuOdredjenu(this.id).subscribe(
    (res: any) => {
      res.forEach(element => {
            this.profil.destinacija.push(element);
        });
    }
    );
}

  resetFilter(): void {
    this.filteredDestinacija = this.allDestinacija;
  }

  Getuloga(){
    return NavbarComponent.uloga
  }

  rezervisi(destinacija:Destinacija):void{ 
    console.log(destinacija);
    console.log(this.rezervacija);
    this.rezervacija = new RezervacijaDestinacije(1,1,1,"1",1,"2020-05-05","2020-06-06",destinacija);
    this.rezervacija.idDestinacije = destinacija.id;
    this.rezervacija.idKlijenta = localStorage.getItem('userName');
    this.rezervacija.destinacija = destinacija;
    this.rezervacijaServis.rezervisiDestinaciju(this.rezervacija).subscribe(
      (res: any) => {
       /* res.forEach(element => {
          // ovde mu treba ponuditi neki servis za brzu rezervaciju      
            
          });*/
          console.log(res);
          //alert("Uspesno ste rezervisali destinaciju!");

          if (confirm('Da li zelite da rezervisete i rent-a-car vozilo?')) {
            // Ponudi rent-a-car servis
            this.pronadjiRentACar(this.rezervacija.destinacija.nazivDestinacije,this.rezervacija.pocetniDatum);
          } else {
            // Vrati na pocetnu stranu  
            this.router.navigateByUrl('homepage-forma');
          }
      },
      err => {
        if (err.status == 400)
        {
          alert("Doslo je do konflikta, osvezite podatke i probajte ponovo!");
        }
      }
      );
    }   
    
    
  pronadjiRentACar(lokacija:string,datum:string)
  {
  this.rentService.rentACarPosleAvio(lokacija,datum).subscribe(
    (res: any) => {
     // res.forEach(element => {
            // prebaci na stranicu to rent-a-car servisa
            this.router.navigateByUrl("ren-a-car/" + res.id +  "/detalji");
      //  });
    }
    );
  }

}
