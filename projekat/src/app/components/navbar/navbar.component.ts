import { Component, OnInit } from '@angular/core';
import { environment }  from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  static  uloga = environment.uloga;

  constructor() { }

  ngOnInit(): void {
  }

  get Getuloga() {
    return NavbarComponent.uloga;
  }

}
