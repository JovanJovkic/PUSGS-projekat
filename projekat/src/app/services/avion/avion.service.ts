import { Injectable } from '@angular/core';
import { Avion } from '../../entities/avion/avion';

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

    //const ak1 = new Avion('AirSerbia', 'Beograd', 'Avio kompanija iz Srbije', 'Atina, Brisel, Varšava, Istanbul, Jerusalim, Ljubljana, Madrid, Moskva,  ...' ,'Jerusalim, Ljubljana, Sofija, Pariz','Sofija', 'Sedišta: 1-10, 11-20, 21-30, 31-40, 41-50, 51-60, 71-80, 81-90, 91-100', '190000rsd-40000rsd', 'Ručni prtljag - besplatan');

    //allAvion.push(ak1);

    return allAvion;
  }
}
