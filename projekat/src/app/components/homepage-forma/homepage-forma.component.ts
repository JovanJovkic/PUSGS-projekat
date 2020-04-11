import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-homepage-forma',
  templateUrl: './homepage-forma.component.html',
  styleUrls: ['./homepage-forma.component.css']
})
export class HomepageFormaComponent implements OnInit {

  homepageForma : FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
