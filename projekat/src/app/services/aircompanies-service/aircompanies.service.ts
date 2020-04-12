import { Injectable } from '@angular/core';
import { AirCompanies } from 'src/app/entities/aircompanies/aircompanies';
import { AbstractFilterParam } from 'src/app/entities/abstract-filter-param/abstract-filter-param';
import { StringFilterParam } from 'src/app/entities/string-filter-param/string-filter-param';
import { NumberFilterParam } from 'src/app/entities/number-filter-param/number-filter-param';
import { FilterParam } from 'src/app/entities/filter-param/filter-param';


@Injectable({
  providedIn: 'root'
})
export class AircompaniesService {

  constructor() { }

  loadAirCompanies() {
    console.log('Učitavanje avio-kompanija...');
    return this.mockedAirCompanies();
  }

  filterAirCompanies(allCompanies: AirCompanies[], filterParams: AbstractFilterParam[]): AirCompanies[] {
    let filteredAirCompanies = new Array<AirCompanies>();
    for (const aircompany of allCompanies) {
      let addAirCompany = true;
      for (const filterParam of filterParams) {
        if (this.checkAirCompaniesBrandFilter(aircompany, filterParam)) {
          addAirCompany = false;
            console.log(aircompany.nazivAvioKompanije + ' ' + aircompany.gradAvioKompanije + ' ne zadovoljava vrednost polja airCompanyBrandFilter');
            break;
        }

        if (this.checkAirCompaniesMaxPerDayPriceFilter(aircompany, filterParam)) {
          addAirCompany = false;
          console.log(aircompany.nazivAvioKompanije + ' ' + aircompany.gradAvioKompanije + ' ne zadovoljava vrednost polja checkAirCompaniesMaxPerDayPriceFilter');
          break;
        }
      }

      if (addAirCompany)
        filteredAirCompanies.push(aircompany);
    }

    return filteredAirCompanies;
  }

  checkAirCompaniesBrandFilter(aircompany: AirCompanies, filterParam: AbstractFilterParam): boolean {
    return filterParam instanceof StringFilterParam && filterParam.getFilterParamName() === 'airCompanyBrandFilter' && !aircompany.nazivAvioKompanije.toLowerCase().includes(filterParam.getFilterParamValue().toLowerCase());
  }

  checkAirCompaniesMaxPerDayPriceFilter(aircompany: AirCompanies, filterParam: AbstractFilterParam): boolean {
    return filterParam instanceof NumberFilterParam && filterParam.getFilterParamName() === 'airCompanyMaxPerDayPriceFilter' && (aircompany.cenaKarte > filterParam.getFilterParamValue());
  }

  mockedAirCompanies(): Array<AirCompanies> {
    let allCompanies = new Array<AirCompanies>();

    const aircom1 = new AirCompanies('AirSerbia','Beograd', 100);
    const aircom2 = new AirCompanies('QatarAirways', 'Doha', 220);
    const aircom3 = new AirCompanies('WizzAir', 'Budapest', 70);
    const aircom4 = new AirCompanies('RyanAir', 'Dublin', 50);
    const aircom5 = new AirCompanies('Emirates', 'Dubai', 400);

    allCompanies.push(aircom1);
    allCompanies.push(aircom2);
    allCompanies.push(aircom3);
    allCompanies.push(aircom4);
    allCompanies.push(aircom5);

    return allCompanies;
  }
}

