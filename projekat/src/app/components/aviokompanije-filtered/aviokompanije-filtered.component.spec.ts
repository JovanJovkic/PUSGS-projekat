import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AviokompanijeFilteredComponent } from './aviokompanije-filtered.component';

describe('AviokompanijeFilteredComponent', () => {
  let component: AviokompanijeFilteredComponent;
  let fixture: ComponentFixture<AviokompanijeFilteredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AviokompanijeFilteredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AviokompanijeFilteredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
