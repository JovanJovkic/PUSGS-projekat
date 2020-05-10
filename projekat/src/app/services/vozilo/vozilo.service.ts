import { Injectable } from '@angular/core';
import { Vozilo } from '../../entities/vozilo/vozilo';

@Injectable({
  providedIn: 'root'
})
export class VoziloService {

  constructor() { }

  loadVozilo() {
    console.log('Učitavanje vozila...');
    return this.mockedVozilo();
  }


  mockedVozilo(): Array<Vozilo> {
    let allAvion = new Array<Vozilo>();

    const ak1 = new Vozilo(1,'vozilo1','BMW','12',2012,5,'automobil');
    const ak2 = new Vozilo(2,'vozilo2','BMW','09',2015,5,'automobil');
    const ak3 = new Vozilo(3,'vozilo3','BMW','11',2010,5,'automobil');

    allAvion.push(ak1);
    allAvion.push(ak2);
    allAvion.push(ak3);

    return allAvion;
  }
}
