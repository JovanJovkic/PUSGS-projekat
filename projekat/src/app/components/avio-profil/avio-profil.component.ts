import { Component, OnInit } from '@angular/core';
import { AircompaniesService } from 'src/app/services/aircompanies-service/aircompanies.service';
import { AirCompanies } from 'src/app/entities/aircompanies/aircompanies';
import { ActivatedRoute } from '@angular/router';
import { Destinacija } from 'src/app/entities/destinacija/destinacija';
import { DestinacijaService } from 'src/app/services/destinacija-service/destinacija.service';
import { AbstractFilterParam } from 'src/app/entities/abstract-filter-param/abstract-filter-param';
import { StringFilterParam } from 'src/app/entities/string-filter-param/string-filter-param';
import { NumberFilterParam } from 'src/app/entities/number-filter-param/number-filter-param';

@Component({
  selector: 'app-avio-profil',
  templateUrl: './avio-profil.component.html',
  styleUrls: ['./avio-profil.component.css']
})
export class AvioProfilComponent implements OnInit {

  allProfiles: Array<AirCompanies>;
  profil:AirCompanies;
  id: number;

  allDestinacija:Array<Destinacija>;
  filteredDestinacija:Array<Destinacija>;
  
  constructor(private airCompaniesServis: AircompaniesService,private route: ActivatedRoute, private destinacijaService:DestinacijaService) { 
    this.allProfiles = new Array<AirCompanies>();
    route.params.subscribe(params => { this.id = params['id']; });
    this.profil = new AirCompanies(0, "", "", "", "", "", "", "", "", "");
  }

  ngOnInit(): void {
  //  this.loadAvioCompanies();
    this.loadAirCompanies();
  }

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
        
        const ak = new AirCompanies(temp.id,temp.nazivAvioKompanije,temp.adresa,temp.promotivniOpis, temp.destNaKojimPosluje, temp.letovi, temp.spisakKarataSaPopustomZaBrzuRez, temp.konfigSegMesta, temp.cenovnik, temp.infoPrtljag);
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

}
