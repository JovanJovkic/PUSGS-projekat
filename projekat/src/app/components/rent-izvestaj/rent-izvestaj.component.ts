import { Component, OnInit } from '@angular/core';
import { ChartsModule, WavesModule } from 'angular-bootstrap-md'
import { ActivatedRoute } from '@angular/router';
import { RentACarService } from 'src/app/services/rent-a-car/rent-a-car.service';
import {animate, trigger, state, style, transition} from '@angular/animations';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-rent-izvestaj',
  templateUrl: './rent-izvestaj.component.html',
  styleUrls: ['./rent-izvestaj.component.css']
})
export class RentIzvestajComponent implements OnInit {
  id: number;
  rezultat: string;

  constructor(private route: ActivatedRoute,private rentServis: RentACarService) { 
    this.rezultat = "Rezultat: ______";
    route.params.subscribe(params => { this.id = params['id']; });
      for(var i=0;i<53;i++)
      {
        this.chartLabelsNedeljni.push(i);
      }

      this.ucitajIzvestajMesecni();
      this.ucitajIzvestajNedeljni();  
      this.ucitajIzvestajDnevni();
  }

  ngOnInit(): void {
    //this.ucitajIzvestajMesecni();
   
  }

  //  mesecni 

  ucitajIzvestajMesecni()
  {
    this.rentServis.mesecniIzvestaj(this.id).subscribe(
      (res: any) => {
        res.forEach(element => {
            this.chartDatasetsMesecni[0].data.push(element);
          });
      }
      );
  }

  ucitajIzvestajNedeljni()
  {
    this.rentServis.nedeljniIzvestaj(this.id).subscribe(
      (res: any) => {
        res.forEach(element => {
            this.chartDatasetsNedeljni[0].data.push(element);
          });
              }
      );
  }

  ucitajIzvestajDnevni()
  {
    this.rentServis.dnevniIzvestaj(this.id).subscribe(
      (res: any) => {
        res.forEach(element => {
            this.chartDatasetsDnevni[0].data.push(element);
          });
              }
      );
  }

  public chartType: string = 'line';

  public chartDatasetsMesecni: Array<any> = [
    { data: [], label: 'Broj rezervacija' }
  ];

  public chartDatasetsNedeljni: Array<any> = [
    { data: [], label: 'Broj rezervacija' }
  ];

  public chartDatasetsDnevni: Array<any> = [
    { data: [], label: 'Broj rezervacija' }
  ];

  public chartLabelsMesecni: Array<any> = ['Januar', 'Februar', 'Mart', 'April', 'Maj', 'Jun', 'Jul', 'Avgust', 'Septembar', 'Oktobar','Novembar','Decembar'];

  public chartLabelsNedeljni: Array<any> = [];//'1', '2' , '3', '4' ,'5','6'];

  public chartLabelsDnevni: Array<any> = ['ponedeljak', 'utorak' , 'sreda', 'cetvrtak' ,'petak','subota', 'nedelja'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(105, 0, 132, .2)',
      borderColor: 'rgba(200, 99, 132, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(0, 137, 132, .2)',
      borderColor: 'rgba(0, 10, 130, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true,
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  OdrediPrihode():void{
    let odV = (<HTMLInputElement> document.getElementById("vremeFilterOd")).value;
    let doV = (<HTMLInputElement> document.getElementById("vremeFilterDo")).value;

    this.rentServis.odrediPrihode(this.id,odV,doV).subscribe(
      (res: any) => {
        
          this.rezultat = "Rezultat: " + res;
         
        }
      );
  }
}
