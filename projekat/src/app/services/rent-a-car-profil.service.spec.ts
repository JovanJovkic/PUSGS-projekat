import { TestBed } from '@angular/core/testing';

import { RentACarProfilService } from './rent-a-car-profil.service';

describe('RentACarProfilService', () => {
  let service: RentACarProfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RentACarProfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
