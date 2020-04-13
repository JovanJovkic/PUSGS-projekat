import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AviokompAdminProfilComponent } from './aviokomp-admin-profil.component';

describe('AviokompAdminProfilComponent', () => {
  let component: AviokompAdminProfilComponent;
  let fixture: ComponentFixture<AviokompAdminProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AviokompAdminProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AviokompAdminProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
