import { NumberValueAccessor } from '@angular/forms';
import { RentACarServis } from '../rentacar/rentacar';

export class Vozilo {
    id: number;
    naziv: string;
    marka: string;
    model: string;
    godinaProizvodnje: number;
    brojSedista: number;
    tipVozila: string;
    rentACarId:number;
    filijalaId:number;
    rowVersion:any[];
    ocena:number;


    constructor(id:number, naziv: string, marka: string, model: string, godinaProizvodnje: number, brojSedista: number, tipVozila: string, rowVersion:any[]) {
        this.id = id;
        this.naziv = naziv;
        this.marka = marka;
        this.model = model;
        this.godinaProizvodnje = godinaProizvodnje;
        this.brojSedista = brojSedista;
        this.tipVozila = tipVozila;
        this.rowVersion = rowVersion;
    }


}