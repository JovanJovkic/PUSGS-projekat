import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ChartsModule, WavesModule } from 'angular-bootstrap-md'
import { RentPocetnaComponent } from './rent-pocetna.component';

describe('RentPocetnaComponent', () => {
  let component: RentPocetnaComponent;
  let fixture: ComponentFixture<RentPocetnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RentPocetnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RentPocetnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
