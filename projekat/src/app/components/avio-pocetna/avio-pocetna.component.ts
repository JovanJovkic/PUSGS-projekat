import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
//import { Avion } from 'src/app/entities/avion/avion';
//import { AvionService } from 'src/app/services/avion/avion.service';
import { TransformVisitor } from '@angular/compiler/src/render3/r3_ast';
import { Destinacija } from 'src/app/entities/destinacija/destinacija';
import { DestinacijaService } from 'src/app/services/destinacija-service/destinacija.service';
import { AircompaniesService } from 'src/app/services/aircompanies-service/aircompanies.service';
import { AirCompanies } from 'src/app/entities/aircompanies/aircompanies';
import { BrzaRezervacijaDestinacije } from 'src/app/entities/brzaRezervacijaDestinacije/brzaRezervacijaDestinacije';
import { BrzaRezervacijaDestinacijeService } from 'src/app/services/brzaRezervacijaDestinacije/brza-rezervacija-destinacije.service'


@Component({
  selector: 'app-avio-pocetna',
  templateUrl: './avio-pocetna.component.html',
  styleUrls: ['./avio-pocetna.component.css']
})
export class AvioPocetnaComponent implements OnInit {

  avioPocetnaForma : FormGroup;

  allAvion: Array<AirCompanies>;
  avionToEdit: AirCompanies;
  destinacijaToEdit: AirCompanies;
  destinacijaEdit: Destinacija;
  destinacijeZaBrzuRezervaciju: Array<Destinacija>;
  idZaBrzuRezervaciju;
  brzeRez: Array<BrzaRezervacijaDestinacije>;

  constructor(private avionService: AircompaniesService, private destinacijaService: DestinacijaService, private brzaRezDesService: BrzaRezervacijaDestinacijeService) {
    //alert("Upravo se pozvao konstruktor komponente Avion");
    this.allAvion = new Array<AirCompanies>();
    //this.avionToEdit = new Avion("", "", "", "", "", "", "", "", "");
  }

  ngOnInit(): void {
    this.loadAvion();
    this.ucitajSveBrzeRezervacije();
    //alert("Upravo se pozvala OnInit metoda komponente Avion");
  }

  //loadAvion(): void {
  //  this.allAvion = this.avionService.loadAirCompanies();
  //}
/*
  editAvioModal(avion: AirCompanies): void {
    this.avionToEdit = avion;
  }
  */

  editAirCompanyInfo(): void {
    let nazivAvioKompanije = (<HTMLInputElement> document.getElementById("nazivAvioKompanije")).value;
    let adresa = (<HTMLInputElement> document.getElementById("adresa")).value;
    let promotivniOpis = (<HTMLInputElement> document.getElementById("promotivniOpis")).value;
    let destNaKojimPosluje = (<HTMLInputElement> document.getElementById("destNaKojimPosluje")).value;
    //let letovi = (<HTMLInputElement> document.getElementById("letovi")).value;
    let spisakKarataSaPopustomZaBrzuRez = (<HTMLInputElement> document.getElementById("spisakKarataSaPopustomZaBrzuRez")).value;
    let konfigSegMesta = (<HTMLInputElement> document.getElementById("konfigSegMesta")).value;
    let cenovnik = (<HTMLInputElement> document.getElementById("cenovnik")).value;
    let infoPrtljag = (<HTMLInputElement> document.getElementById("infoPrtljag")).value;
    //this.updateAvio(nazivAvioKompanije, adresa, promotivniOpis, letovi, destNaKojimPosluje, spisakKarataSaPopustomZaBrzuRez, konfigSegMesta, cenovnik, infoPrtljag);

    this.avionToEdit.nazivAvioKompanije = nazivAvioKompanije;
    this.avionToEdit.adresa = adresa;
    this.avionToEdit.promotivniOpis = promotivniOpis;
    this.avionToEdit.destNaKojimPosluje = destNaKojimPosluje;
    this.avionToEdit.spisakKarataSaPopustomZaBrzuRez = spisakKarataSaPopustomZaBrzuRez;
    this.avionToEdit.konfigSegMesta = konfigSegMesta;
    this.avionToEdit.cenovnik = cenovnik;
    this.avionToEdit.infoPrtljag = infoPrtljag;

    this.avionService.izmeniAirCompany(this.avionToEdit).subscribe(
      (res: any) => {
        if (res != null ) {
          alert("Vasa izmena je sacuvana!");
          this.loadAvion();
          (<HTMLInputElement> document.getElementById("naslovEditEdit")).value = "Vasa izmena je sacuvana!";
        }
      }
    );
    this.avionToEdit = null;
  }

  odobri(servis:AirCompanies):void{
    this.avionService.odobri(servis.id).subscribe(
      (res: any) => {
        this.loadAvion();
      },
      err => {
        alert('Morate popuni sve podatke o rent-a-car servisu!')

      }
    );
  }

  EditAirCompany(avion: AirCompanies): void {
    this.avionToEdit = avion;
  }

  loadAvion() {
    this.allAvion = new Array<AirCompanies>();  
    
    this.avionService.ucitajAirCompanies().subscribe(
    (res: any) => {
      //console.log(res);
      if (res != null ) {
        var temp = res;
        temp.forEach(element => {
          //console.log(element);
          const ak = new AirCompanies(element.id, element.nazivAvioKompanije, element.adresa, element.promotivniOpis, element.destNaKojimPosluje
            , element.letovi, element.spisakKarataSaPopustomZaBrzuRez, element.konfigSegMesta, element.cenovnik, element.infoPrtljag, element.admin);
          ak.cenaPrviDan = element.cenaPrviDan;
          ak.cenaSledeciDan = element.cenaSledeciDan;
          ak.odobreno = element.odobreno;
            //console.log(element);
          if(ak.destinacija.length!=0)
          {
            //console.log(ak.destinacija);
            ak.destinacija=element.destinacija;
          }
         
          this.allAvion.push(ak);
        });

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

  dodajDestinacijuZaAvioKompaniju(destinacija: AirCompanies): void{

    this.destinacijaToEdit = destinacija;

  }

  dodajDestinacijuInfo():void
  {
    let nazivDest = (<HTMLInputElement> document.getElementById("destNaziv")).value;
    let datumVremeSl = (<HTMLInputElement> document.getElementById("datVremeSl")).value;
    let datumVremePol = (<HTMLInputElement> document.getElementById("datVremePol")).value;
    let vremePutov = (<HTMLInputElement> document.getElementById("vremePut")).value;
    let duzinaPutov = (<HTMLInputElement> document.getElementById("duzinaPut")).value;
    let brojPresed = (<HTMLInputElement> document.getElementById("brojPresed")).value;
    let lokacPresed = (<HTMLInputElement> document.getElementById("lokacPresed")).value;
    let cenaKarte = (<HTMLInputElement> document.getElementById("kartaCena")).value;

    var temp = new Destinacija(5,nazivDest,datumVremeSl,datumVremePol,vremePutov,duzinaPutov,+brojPresed,lokacPresed,cenaKarte);
    temp.airCompanyId = this.destinacijaToEdit.id;
    this.destinacijaToEdit.destinacija.push(temp);

    this.destinacijaService.dodajDestinaciju(temp).subscribe(
      (res: any) => {
        if (res != null ) {
        }
      }
    );
    
    this.avionService.izmeniAirCompany(this.destinacijaToEdit).subscribe(
      (res: any) => {
        if (res != null ) {
          alert("Vasa izmena je sacuvana!");
          this.loadAvion();
          (<HTMLInputElement> document.getElementById("naslovEditEdit")).value = "Vasa izmena je sacuvana!";
        }
      }
    );
  }

  loadDestinacija()
  {
    this.destinacijaService.ucitajDestinacija().subscribe(
      (res: any) => {
        res.forEach(element => {

          //console.log(element);
          this.allAvion.forEach(item => {
           // console.log(element);
            if(element.airCompanyID == item.id)
            {
              item.destinacija.push(element);
            }

            //console.log(this.allAvion);

          });

        });
      }
      );
  }

  obrisiDestinaciju(destinacija:Destinacija): void {

    this.destinacijaService.obrisiDestinaciju(destinacija.id).subscribe(
      (res: any) => {
        this.loadAvion();
      }
    );
  }

  editDestinaciju(destinacija:Destinacija): void {
    this.destinacijaEdit=destinacija;
  }

  izmeniDestinacijuInfo():void{

    let nazivDest = (<HTMLInputElement> document.getElementById("destNazivIzm")).value;
    let datumVremeSl = (<HTMLInputElement> document.getElementById("datVremeSlIzm")).value;
    let datumVremePol = (<HTMLInputElement> document.getElementById("datVremePolIzm")).value;
    let vremePutov = (<HTMLInputElement> document.getElementById("vremePutIzm")).value;
    let duzinaPutov = (<HTMLInputElement> document.getElementById("duzinaPutIzm")).value;
    let brojPresed = (<HTMLInputElement> document.getElementById("brojPresedIzm")).value;
    let lokacPresed = (<HTMLInputElement> document.getElementById("lokacPresedIzm")).value;
    let cenaKarte = (<HTMLInputElement> document.getElementById("kartaCenaIzm")).value;

    this.destinacijaEdit.nazivDestinacije=nazivDest;
    this.destinacijaEdit.datumVremeSletanja=datumVremeSl;
    this.destinacijaEdit.datumVremePoletanja=datumVremePol;
    this.destinacijaEdit.vremePutovanja=vremePutov;
    this.destinacijaEdit.duzinaPutovanja=duzinaPutov;
    this.destinacijaEdit.brojPresedanja=+brojPresed;
    this.destinacijaEdit.lokacijaPresedanja=lokacPresed;
    this.destinacijaEdit.cenaKarte=cenaKarte;

    this.destinacijaService.izmeniDestinaciju(this.destinacijaEdit).subscribe(
      (res: any) => {
        if (res != null ) {
          this.loadAvion();
        }
      }
    );
  }


  destinacijaZaOdredjenuAvioKompaniju(aircompany:AirCompanies):void{

    var id = aircompany.id ;
    this.idZaBrzuRezervaciju =id;

    this.destinacijeZaBrzuRezervaciju = new Array<Destinacija>();

    this.destinacijaService.ucitajDestinacijaZaAviokompanijuOdredjenu(id).subscribe(
      (res: any) => {

        if (res != null ) {
          //pravimo destinacije i stavljamo u neku listu
          res.forEach(element => {
              console.log(element);
            this.destinacijeZaBrzuRezervaciju.push(element);
          });
         
        }

      }
    );

  }

  izmeniCenovnikInfo():void{
    let cenaPrviDan = (<HTMLInputElement> document.getElementById("cenaPrviDanFo")).value;
    let cenaSledeciDan = (<HTMLInputElement> document.getElementById("cenaSledeciDanFo")).value;

    this.avionToEdit.cenaPrviDan = +cenaPrviDan;
    this.avionToEdit.cenaSledeciDan = +cenaSledeciDan;

    this.avionService.izmeniAirCompany(this.avionToEdit).subscribe(
      (res: any) => {
        if (res != null ) {
          alert("Vasa izmena je sacuvana!");
          this.loadAvion();
          //this.loadVozila();
          //(<HTMLInputElement> document.getElementById("naslovEditEdit")).value = "Vasa izmena je sacuvana!";
        }
      }
    );
    this.avionToEdit = null;

  }

  pogledajCenovnik(servis:AirCompanies):void{
    this.avionToEdit = servis;
  }

  dodajBrzuRezervaciju():void{

    let destinacijaNazivFo = (<HTMLInputElement> document.getElementById("destinacijaNazivFo")).value;
    let pocetniDatFo = (<HTMLInputElement> document.getElementById("pocetniDatFo")).value;
    let krajnjiDatFo = (<HTMLInputElement> document.getElementById("krajnjiDatFo")).value;
    let popustFo = (<HTMLInputElement> document.getElementById("popustFo")).value;

    var idRent = this.idZaBrzuRezervaciju;
    var email = '';
    //console.log(destinacijaNazivFo);
    var rez = new BrzaRezervacijaDestinacije(0,idRent,+destinacijaNazivFo,email,+popustFo,0,0,pocetniDatFo,krajnjiDatFo,[]);

    this.brzaRezDesService.dodajBrzuRez(rez).subscribe(
      (res: any) => {

        if (res != null ) {
 
        }

      }
    );
  } 

  ucitajSveBrzeRezervacije(){
   
    this.brzaRezDesService.ucitajSveBrzeRez().subscribe(
    (res: any) => {
      if (res != null) {

        this.brzeRez =  new Array<BrzaRezervacijaDestinacije>();  

        res.forEach(element => {

          element.krajnjiDatum =  element.krajnjiDatum.split('T')[0];
          element.pocetniDatum =  element.pocetniDatum.split('T')[0];
          this.brzeRez.push(element);
          
        });
       
      } else {
        res.errors.forEach(element => {
          switch (element.code) {
            default:
              break;
          }
        });
      }
    },
    err => {
      console.log('greska');
      console.log(err);
    }
    
  );

  



  /*
  updateAvio(nazivAvioKompanije: string, adresa: string, promotivniOpis:string, destNaKojimPosluje:string, letovi:string, spisakKarataSaPopustomZaBrzuRez: string, konfigSegMesta:string, cenovnik: string, infoPrtljag: string  ): void {
    let index = this.allAvion.indexOf(this.avionToEdit);
    let promena: boolean = false;
    if(nazivAvioKompanije != "")
    {
      this.allAvion[index].nazivAvioKompanije = nazivAvioKompanije;
      promena = true;
    }
    if(adresa != "")
    {
      this.allAvion[index].adresa = adresa;
      promena = true;
    }
    if(promotivniOpis != "")
    {
      this.allAvion[index].promotivniOpis = promotivniOpis;
      promena = true;
    }
    if(destNaKojimPosluje != "")
    {
      this.allAvion[index].destNaKojimPosluje = destNaKojimPosluje;
      promena = true;
    }
    if(letovi != "")
    {
      this.allAvion[index].letovi = letovi;
      promena = true;
    }
    if(spisakKarataSaPopustomZaBrzuRez != "")
    {
      this.allAvion[index].spisakKarataSaPopustomZaBrzuRez = spisakKarataSaPopustomZaBrzuRez;
      promena = true;
    }
    if(konfigSegMesta != "")
    {
      this.allAvion[index].konfigSegMesta = konfigSegMesta;
      promena = true;
    }
    if(cenovnik != "")
    {
      this.allAvion[index].cenovnik = cenovnik;
      promena = true;
    }
    if(infoPrtljag != "")
    {
      this.allAvion[index].infoPrtljag = infoPrtljag;
      promena = true;
    }
    
    if(promena == true)
    {
      alert('Vaša izmena je sačuvana!');
    }
  }
  */

}
}