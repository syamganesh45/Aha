import { TestBed } from '@angular/core/testing';

import { WatchInTeluguAndTamilService } from './watch-in-telugu-and-tamil.service';

describe('WatchInTeluguAndTamilService', () => {
  let service: WatchInTeluguAndTamilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WatchInTeluguAndTamilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
