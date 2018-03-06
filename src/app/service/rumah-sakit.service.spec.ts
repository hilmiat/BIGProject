import { TestBed, inject } from '@angular/core/testing';

import { RumahSakitService } from './rumah-sakit.service';

describe('RumahSakitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RumahSakitService]
    });
  });

  it('should be created', inject([RumahSakitService], (service: RumahSakitService) => {
    expect(service).toBeTruthy();
  }));
});
