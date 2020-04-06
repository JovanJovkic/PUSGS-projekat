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
      'email': new FormControl('', Validators.required),
      'lozinka': new FormControl('', Validators.required),
      'lozinka2': new FormControl('', [Validators.required]),
      'ime': new FormControl('', Validators.required),
      'prezime': new FormControl('', Validators.required),
      'grad': new FormControl('', Validators.required),
      'telefon': new FormControl('+381', Validators.required)
    });
  }

  onClear() {
    this.registracijaForma.reset();
  }

}
