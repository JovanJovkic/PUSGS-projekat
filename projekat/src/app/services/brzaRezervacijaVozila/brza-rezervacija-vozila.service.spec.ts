import { TestBed } from '@angular/core/testing';

import { BrzaRezervacijaVozilaService } from './brza-rezervacija-vozila.service';

describe('BrzaRezervacijaVozilaService', () => {
  let service: BrzaRezervacijaVozilaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrzaRezervacijaVozilaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
