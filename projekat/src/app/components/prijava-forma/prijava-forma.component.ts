import {  ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/services/korisnik-service/user.service';
import { Component, OnInit, Inject,ViewChild  } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';
import { DOCUMENT } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-prijava-forma',
  templateUrl: './prijava-forma.component.html',
  styleUrls: ['./prijava-forma.component.css']
})
export class PrijavaFormaComponent implements OnInit {
 
  formModel = {
    UserName: '',
    Password: ''
  }

  socialProvider = "google";

  constructor(private service: UserService, private router: Router, private toastr: ToastrService,
    public OAuth: AuthService,
    private cookieService: CookieService, @Inject(DOCUMENT) private document: Document) {  }

  ngOnInit() {
    //if (localStorage.getItem('token') != null)
      //this.router.navigateByUrl('/home');
  }

  LoginWithGoogle(){
    let socialPlatformProvider;  
    if (this.socialProvider === 'facebook') {  
      socialPlatformProvider = FacebookLoginProvider.PROVIDER_ID;  
    } else if (this.socialProvider === 'google') {  
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;  
    }  
    this.OAuth.signIn(socialPlatformProvider).then(socialusers => {  
      console.log(socialusers);   

      this.service.externalLogin(socialusers).subscribe((res:any)=>{
        localStorage.setItem('token', res.token);
        localStorage.setItem('userName', res.userName);
        localStorage.setItem('uloga', res.uloga);
        localStorage.setItem('sifraIzmenjena', res.izmenjenaLozinka);
        this.router.navigateByUrl('/homepage-forma');
        environment.uloga = res.uloga;
        NavbarComponent.uloga = res.uloga;
        //this.router.navigateByUrl('//homepage-forma');
      });
   
      console.log(socialusers);  
    });  

  }

  onSubmit(form: NgForm) {
    this.service.login(form.value).subscribe(
      (res: any) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        localStorage.setItem('userName', res.userName);
        localStorage.setItem('uloga', res.uloga);
        localStorage.setItem('sifraIzmenjena', res.izmenjenaLozinka);
        this.router.navigateByUrl('/homepage-forma');
        environment.uloga = res.uloga;
        NavbarComponent.uloga = res.uloga;
      },
      err => {
        if (err.status == 400)
        
          this.toastr.error('Incorrect username or password.', 'Authentication failed.', {
            timeOut: 8000,
           // positionClass: 'toast-top-left',
          });
        else
          console.log(err);
      }
    );
  }

}



/*
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
      'email': new FormControl('Unesite e-mail adresu', [Validators.required, Validators.maxLength(30),Validators.email]),
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

*/
