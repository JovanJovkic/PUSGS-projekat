import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RentAdminProfilComponent } from './rent-admin-profil.component';

describe('RentAdminProfilComponent', () => {
  let component: RentAdminProfilComponent;
  let fixture: ComponentFixture<RentAdminProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentAdminProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentAdminProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
