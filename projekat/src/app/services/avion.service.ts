import { Injectable } from '@angular/core';
import { Avion } from '../entities/avion';

@Injectable({
  providedIn: 'root'
})
export class AvionService {

  constructor() { }

  loadAvion() {
    console.log('Učitavanje aviona...');
    return this.mockedAvio();
  }


  mockedAvio(): Array<Avion> {
    let allAvion = new Array<Avion>();

    const ak1 = new Avion('AirSerbia', 'Novi Beograd', 'Avio kompanija iz Srbije', 'Spisak destinacija', 'Letovi','Karte sa popustom', 'Konfiguracija segmenta', 'Cenovnik', 'Prtljag');

    allAvion.push(ak1);

    return allAvion;
  }
}
