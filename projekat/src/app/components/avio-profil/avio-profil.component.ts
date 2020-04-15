import { Component, OnInit } from '@angular/core';
import { AircompaniesService } from 'src/app/services/aircompanies-service/aircompanies.service';
import { AirCompanies } from 'src/app/entities/aircompanies/aircompanies';
import { ActivatedRoute } from '@angular/router';
import { Destinacija } from 'src/app/entities/destinacija/destinacija';
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
  
  constructor(private airCompaniesServis: AircompaniesService,private route: ActivatedRoute) { 
    this.allProfiles = new Array<AirCompanies>();
    route.params.subscribe(params => { this.id = params['id']; });
  }

  ngOnInit(): void {
    this.loadAvioCompanies();
  }

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

  resetFilter(): void {
    this.filteredDestinacija = this.allDestinacija;
  }

}
