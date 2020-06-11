import { TestBed } from '@angular/core/testing';

import { RezervacijaDestinacijeService } from './rezervacija-destinacije.service';

describe('RezervacijaDestinacijeService', () => {
  let service: RezervacijaDestinacijeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RezervacijaDestinacijeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
