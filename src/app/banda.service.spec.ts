import { TestBed, inject } from '@angular/core/testing';

import { BandaService } from './banda.service';

describe('BandaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BandaService]
    });
  });

  it('should be created', inject([BandaService], (service: BandaService) => {
    expect(service).toBeTruthy();
  }));
});
