import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Korisnik } from 'src/app/entities/korisnik/korisnik';

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
    uloga: [''],
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

  registerAdmin() {
    var body = {
      Email: this.formModel.value.email,
      Ime: this.formModel.value.ime,
      Prezime: this.formModel.value.prezime,
      Grad: this.formModel.value.grad,
      Telefon: this.formModel.value.telefon,
      Lozinka: this.formModel.value.Passwords.lozinka,
      Uloga: ""
    };
    if(this.formModel.value.uloga=="adminAvio")
    {
      body.Uloga = "AdminAvioKompanije";
    }
    else if((this.formModel.value.uloga=="adminRent"))
    {
      body.Uloga = "AdminRentACarServisa";
    }
    else
    {
      body.Uloga = "Administrator";
    }

    return this.http.post(this.BaseURI + '/ApplicationUser/RegisterAdmin', body);
  }

  login(formData) {
    return this.http.post(this.BaseURI + '/ApplicationUser/Login', formData);
  }

  externalLogin(formData){
    var body = {
      Id : formData.id,
      Ime : formData.firstName ,
      Prezime : formData.lastName,
      Email : formData.email,
      IdToken : formData.idToken
    };
    return this.http.post(this.BaseURI + '/ApplicationUser/SocialLogin',body);
  }

  getUserProfile() {
    return this.http.get(this.BaseURI + '/UserProfile/GetUserProfile');
  }

  promeniLozinku(staraLozinka:string, novaLozinka:string)
  {
    var body = {
      Email : localStorage.getItem("userName"),
      NovaSifra : novaLozinka,
      StaraSifra : staraLozinka,
    };
    return this.http.put(this.BaseURI + '/ApplicationUser/IzmeniSifru',body);
  }

  getUser(email:string) {
    return this.http.get(this.BaseURI + '/ApplicationUser/GetUser/'+email);
  }

  izmeniKorisnika(korisnik:Korisnik) {

    return this.http.post(this.BaseURI + '/ApplicationUser/UpdateUser',korisnik);
  }

}
