import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageFormaComponent } from './homepage-forma.component';

describe('HomepageFormaComponent', () => {
  let component: HomepageFormaComponent;
  let fixture: ComponentFixture<HomepageFormaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageFormaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageFormaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
