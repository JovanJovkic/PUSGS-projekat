import { TestBed } from '@angular/core/testing';

import { FilijaleService } from './filijale.service';

describe('FilijaleService', () => {
  let service: FilijaleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilijaleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
