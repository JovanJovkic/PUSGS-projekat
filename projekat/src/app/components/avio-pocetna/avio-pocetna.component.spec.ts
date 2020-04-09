import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvioPocetnaComponent } from './avio-pocetna.component';

describe('AvioPocetnaComponent', () => {
  let component: AvioPocetnaComponent;
  let fixture: ComponentFixture<AvioPocetnaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvioPocetnaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvioPocetnaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
