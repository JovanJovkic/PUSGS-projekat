import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AviokompanijePocetnaComponent } from './aviokompanije-pocetna.component';

describe('AviokompanijePocetnaComponent', () => {
  let component: AviokompanijePocetnaComponent;
  let fixture: ComponentFixture<AviokompanijePocetnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AviokompanijePocetnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AviokompanijePocetnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
