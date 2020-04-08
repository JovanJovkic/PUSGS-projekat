import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSistemProfilComponent } from './admin-sistem-profil.component';

describe('AdminSistemProfilComponent', () => {
  let component: AdminSistemProfilComponent;
  let fixture: ComponentFixture<AdminSistemProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSistemProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSistemProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
