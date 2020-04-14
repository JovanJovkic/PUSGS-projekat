import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvioProfilComponent } from './avio-profil.component';

describe('AvioProfilComponent', () => {
  let component: AvioProfilComponent;
  let fixture: ComponentFixture<AvioProfilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvioProfilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvioProfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
