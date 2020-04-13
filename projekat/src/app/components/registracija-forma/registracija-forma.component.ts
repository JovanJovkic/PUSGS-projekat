import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-registracija-forma',
  templateUrl: './registracija-forma.component.html',
  styleUrls: ['./registracija-forma.component.css']
})
export class RegistracijaFormaComponent implements OnInit {

  registracijaForma: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.registracijaForma = new FormGroup({
      'email': new FormControl('Unesite e-mail adresu', [Validators.required, Validators.maxLength(30)]),
      'lozinka': new FormControl('', [Validators.required, Validators.maxLength(20)]),
      'lozinka2': new FormControl('', [Validators.required, Validators.maxLength(20)]),
      'ime': new FormControl('', [Validators.required, Validators.maxLength(20)]),
      'prezime': new FormControl('', [Validators.required, Validators.maxLength(20)]),
      'grad': new FormControl('', [Validators.required, Validators.maxLength(20)]),
      'telefon': new FormControl('+381', [Validators.required, Validators.maxLength(20)])
    });
  }

  onClear() {
    this.registracijaForma.reset();
  }

  onSubmit() {
    console.log(this.registracijaForma.value);
    console.log(this.registracijaForma);
  }

}
