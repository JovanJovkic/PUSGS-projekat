import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-aviokompanije-filtered',
  templateUrl: './aviokompanije-filtered.component.html',
  styleUrls: ['./aviokompanije-filtered.component.css']
})
export class AviokompanijeFilteredComponent implements OnInit {

  @Input() filteredAirCompanies

  constructor() { }

  ngOnInit(): void {
  }

}