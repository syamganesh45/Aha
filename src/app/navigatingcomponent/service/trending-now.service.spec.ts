import { TestBed } from '@angular/core/testing';

import { TrendingNowService } from './trending-now.service';

describe('TrendingNowService', () => {
  let service: TrendingNowService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrendingNowService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
