import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajRecarFormaComponent } from './dodaj-recar-forma.component';

describe('DodajRecarFormaComponent', () => {
  let component: DodajRecarFormaComponent;
  let fixture: ComponentFixture<DodajRecarFormaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajRecarFormaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajRecarFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
