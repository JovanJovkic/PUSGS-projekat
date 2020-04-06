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
      'email': new FormControl('', Validators.required),
      'lozinka': new FormControl('', Validators.required),
    });
  }

  onClear() {
    this.prijavaForma.reset();
  }

}
