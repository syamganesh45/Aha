import { TestBed } from '@angular/core/testing';

import { WatchForFreeService } from './watch-for-free.service';

describe('WatchForFreeService', () => {
  let service: WatchForFreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatchForFreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
