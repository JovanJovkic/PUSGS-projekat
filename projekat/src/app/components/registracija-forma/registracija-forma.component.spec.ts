import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistracijaFormaComponent } from './registracija-forma.component';


describe('RegistracijaFormaComponent', () => {
  let component: RegistracijaFormaComponent;
  let fixture: ComponentFixture<RegistracijaFormaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistracijaFormaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistracijaFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
