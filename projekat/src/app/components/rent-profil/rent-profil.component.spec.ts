import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentProfilComponent } from './rent-profil.component';

describe('RentProfilComponent', () => {
  let component: RentProfilComponent;
  let fixture: ComponentFixture<RentProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
