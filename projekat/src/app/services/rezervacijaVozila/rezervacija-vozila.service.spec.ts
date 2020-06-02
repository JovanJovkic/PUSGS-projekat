import { TestBed } from '@angular/core/testing';

import { RezervacijaVozilaService } from './rezervacija-vozila.service';

describe('RezervacijaVozilaService', () => {
  let service: RezervacijaVozilaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RezervacijaVozilaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
