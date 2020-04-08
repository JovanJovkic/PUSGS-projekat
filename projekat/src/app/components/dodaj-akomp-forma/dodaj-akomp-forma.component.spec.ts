import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajAkompFormaComponent } from './dodaj-akomp-forma.component';

describe('DodajAkompFormaComponent', () => {
  let component: DodajAkompFormaComponent;
  let fixture: ComponentFixture<DodajAkompFormaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajAkompFormaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajAkompFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
