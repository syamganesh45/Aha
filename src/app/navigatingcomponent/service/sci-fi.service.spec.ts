import { TestBed } from '@angular/core/testing';

import { SciFiService } from './sci-fi.service';

describe('SciFiService', () => {
  let service: SciFiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SciFiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
