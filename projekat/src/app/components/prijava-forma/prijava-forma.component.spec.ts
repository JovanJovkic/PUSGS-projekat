import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrijavaFormaComponent } from './prijava-forma.component';

describe('PrijavaFormaComponent', () => {
  let component: PrijavaFormaComponent;
  let fixture: ComponentFixture<PrijavaFormaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrijavaFormaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrijavaFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
