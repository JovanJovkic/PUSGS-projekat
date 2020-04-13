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
      'naziv': new FormControl('', [Validators.required, Validators.maxLength(20)]),
      'adresa': new FormControl('', [Validators.required, Validators.maxLength(20)]),
    });
  }

  onClear() {
    this.dodajAvioKompForma.reset();
  }

  onSubmit() {
    console.log(this.dodajAvioKompForma.value);
    console.log(this.dodajAvioKompForma);
  }


}
