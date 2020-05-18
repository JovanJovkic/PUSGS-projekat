import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private fb: FormBuilder, private http: HttpClient) { }
  readonly BaseURI = 'https://localhost:44308/api';

  formModel = this.fb.group({
    email: ['', Validators.email],
    ime: [''],
    prezime: [''],
    grad: [''],
    telefon: [''],
    Passwords: this.fb.group({
        lozinka: ['', [Validators.required, Validators.minLength(4)]],
        lozinka2: ['', Validators.required]
    }, { validator: this.comparePasswords })

  });

  comparePasswords(fb: FormGroup) {
    let confirmPswrdCtrl = fb.get('lozinka2');
    //passwordMismatch
    //confirmPswrdCtrl.errors={passwordMismatch:true}
    if (confirmPswrdCtrl.errors == null || 'passwordMismatch' in confirmPswrdCtrl.errors) {
      if (fb.get('lozinka').value != confirmPswrdCtrl.value)
        confirmPswrdCtrl.setErrors({ passwordMismatch: true });
      else
        confirmPswrdCtrl.setErrors(null);
    }
  }

  register() {
    var body = {
      Email: this.formModel.value.email,
      Ime: this.formModel.value.ime,
      Prezime: this.formModel.value.prezime,
      Grad: this.formModel.value.grad,
      Telefon: this.formModel.value.telefon,
      Lozinka: this.formModel.value.Passwords.lozinka,
    };
    return this.http.post(this.BaseURI + '/ApplicationUser/Register', body);
  }

  login(formData) {
    return this.http.post(this.BaseURI + '/ApplicationUser/Login', formData);
  }

  externalLogin(formData){
    return this.http.post(this.BaseURI + '/ApplicationUser/SocialLogin',formData);
  }

  getUserProfile() {
    return this.http.get(this.BaseURI + '/UserProfile/GetUserProfile');
  }
}
