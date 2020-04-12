import { TestBed } from '@angular/core/testing';

import { AircompaniesService } from './aircompanies.service';

describe('AircompaniesService', () => {
  let service: AircompaniesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AircompaniesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
