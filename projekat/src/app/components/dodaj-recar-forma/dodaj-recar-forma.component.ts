import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dodaj-recar-forma',
  templateUrl: './dodaj-recar-forma.component.html',
  styleUrls: ['./dodaj-recar-forma.component.css']
})
export class DodajRecarFormaComponent implements OnInit {

  dodajRentCarForma: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.dodajRentCarForma = new FormGroup({
      'naziv': new FormControl('', Validators.required),
      'adresa': new FormControl('', Validators.required),
    });
  }

  onClear() {
    this.dodajRentCarForma.reset();
  }
}
