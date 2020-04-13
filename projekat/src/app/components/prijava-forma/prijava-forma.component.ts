import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-prijava-forma',
  templateUrl: './prijava-forma.component.html',
  styleUrls: ['./prijava-forma.component.css']
})
export class PrijavaFormaComponent implements OnInit {

  prijavaForma: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.prijavaForma = new FormGroup({
      'email': new FormControl('Unesite e-mail adresu', [Validators.required, Validators.maxLength(30)]),
      'lozinka': new FormControl('', [Validators.required, Validators.maxLength(15)]),
    });
  }

  onClear() {
    this.prijavaForma.reset();
  }

  onSubmit() {
    console.log(this.prijavaForma.value);
    console.log(this.prijavaForma);
  }

}
