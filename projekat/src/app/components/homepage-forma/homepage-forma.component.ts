import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Destinacija } from 'src/app/entities/destinacija/destinacija';
import { DestinacijaService } from 'src/app/services/destinacija-service/destinacija.service';
import { Vozilo } from 'src/app/entities/vozilo/vozilo';
import { VoziloService } from 'src/app/services/vozilo/vozilo.service';

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
