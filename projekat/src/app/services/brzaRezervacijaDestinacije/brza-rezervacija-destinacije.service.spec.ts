import { TestBed } from '@angular/core/testing';

import { BrzaRezervacijaDestinacijeService } from './brza-rezervacija-destinacije.service';

describe('BrzaRezervacijaDestinacijeService', () => {
  let service: BrzaRezervacijaDestinacijeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrzaRezervacijaDestinacijeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
