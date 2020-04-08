import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dodaj-akomp-forma',
  templateUrl: './dodaj-akomp-forma.component.html',
  styleUrls: ['./dodaj-akomp-forma.component.css']
})
export class DodajAkompFormaComponent implements OnInit {

  dodajAvioKompForma: FormGroup;
  
  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.dodajAvioKompForma = new FormGroup({
      'naziv': new FormControl('', Validators.required),
      'adresa': new FormControl('', Validators.required),
    });
  }

  onClear() {
    this.dodajAvioKompForma.reset();
  }

}
