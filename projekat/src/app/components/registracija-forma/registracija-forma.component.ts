import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/korisnik-service/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-registracija-forma',
  templateUrl: './registracija-forma.component.html',
  styleUrls: ['./registracija-forma.component.css']
})
export class RegistracijaFormaComponent implements OnInit {

  constructor(public service: UserService, private toastr: ToastrService) { }
  //constructor() { }

  ngOnInit(): void {
    this.service.formModel.reset();
  }

  onClear() {
    this.service.formModel.reset();
  }

  /*
  onSubmit() {
    console.log(this.registracijaForma.value);
    console.log(this.registracijaForma);
  }
  */

  onSubmit() {
      this.service.register().subscribe(
      (res: any) => {
        if (res.succeeded) {
          this.service.formModel.reset();
          this.toastr.success('New user created!', 'Registration successful.');
          console.log('Uspesno ste registrovali');
        } else {
          res.errors.forEach(element => {
            switch (element.code) {
              case 'DuplicateUserName':
                this.toastr.error('Username is already taken','Registration failed.');
                break;

              default:
              this.toastr.error(element.description,'Registration failed.');
                break;
            }
          });
        }
      },
      err => {
        console.log('greska');
        console.log(err);
      }
      
    );
  }

}


/*
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/korisnik-service/user.service';

@Component({
  selector: 'app-registracija-forma',
  templateUrl: './registracija-forma.component.html',
  styleUrls: ['./registracija-forma.component.css']
})
export class RegistracijaFormaComponent implements OnInit {

  registracijaForma: FormGroup;

  constructor(public service: UserService) { }
  //constructor(public service: UserService, private toastr: ToastrService) { }
  //constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.registracijaForma = new FormGroup({
      'email': new FormControl('Unesite e-mail adresu', [Validators.required, Validators.maxLength(30),Validators.email]),
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
*/