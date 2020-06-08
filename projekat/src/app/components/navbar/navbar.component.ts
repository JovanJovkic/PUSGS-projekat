import { Component, OnInit } from '@angular/core';
import { environment }  from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  static  uloga = environment.uloga;

  constructor( private router: Router) {
    if(environment.uloga == null)
    {
      environment.uloga = '0';
      localStorage.setItem('uloga','0');
    }
   }

  ngOnInit(): void {
  }

  get Getuloga() {
    return NavbarComponent.uloga;
  }

  odjaviSe():void{
    environment.uloga = '0';
    NavbarComponent.uloga = '0';
    localStorage.removeItem('uloga');
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.setItem('userName','');
    localStorage.setItem('uloga','0');
    this.router.navigateByUrl('prijava');
  }

}
