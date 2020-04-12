import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rent-filtered',
  templateUrl: './rent-filtered.component.html',
  styleUrls: ['./rent-filtered.component.css']
})
export class RentFilteredComponent implements OnInit {

  @Input() allRentACarServisFilter

  constructor() { }

  ngOnInit(): void {
  }

}
