import { NumberValueAccessor } from '@angular/forms';
import { RentACarServis } from '../rentacar/rentacar';

export class Filijala {
    id: number;
    ulica: string;
    broj: number;
    mesto: string;
    rentACarId:number;

    constructor(id:number, ulica: string, broj: number, mesto: string) {
        this.id = id;
        this.ulica = ulica;
        this.broj = broj;
        this.mesto = mesto;
    }


}