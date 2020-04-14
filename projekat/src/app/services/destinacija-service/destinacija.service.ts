import { Injectable } from '@angular/core';
import { Destinacija } from 'src/app/entities/destinacija/destinacija'


@Injectable({
  providedIn: 'root'
})
export class DestinacijaService {

  constructor() { }

  loadDestinacija() {
    console.log('Učitavanje vozila...');
    return this.mockedDestinacija();
  }


  mockedDestinacija(): Array<Destinacija> {
    let allDestinacija = new Array<Destinacija>();

    const dest1 = new Destinacija(1,'21.9.2020 13:25', '11.9.2020 10:10', '7h', '850km', 1, 'Istanbul', '40000.00rsd');
    const dest2 = new Destinacija(2,'4.7.2020 16:45', '30.6.2020 20:20', '4h', '520km', 0, '-', '33000.00rsd');
    const dest3 = new Destinacija(3,'16.5.2020 6:55', '11.5.2020 17:05', '3h', '350km', 0, '-', '19000.00rsd');
    const dest4 = new Destinacija(4, '26.12.2020 3:20', '20.12.2020 6:30', '6h', '670km', 1, 'Bratislava', '36000.00rsd')

    allDestinacija.push(dest1);
    allDestinacija.push(dest2);
    allDestinacija.push(dest3);
    allDestinacija.push(dest4);

    return allDestinacija;
  }
}