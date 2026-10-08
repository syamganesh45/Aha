import { TestBed } from '@angular/core/testing';

import { AhaOriginalsService } from './aha-originals.service';

describe('AhaOriginalsService', () => {
  let service: AhaOriginalsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AhaOriginalsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
