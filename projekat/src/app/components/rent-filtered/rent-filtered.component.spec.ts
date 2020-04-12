import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentFilteredComponent } from './rent-filtered.component';

describe('RentFilteredComponent', () => {
  let component: RentFilteredComponent;
  let fixture: ComponentFixture<RentFilteredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentFilteredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentFilteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
