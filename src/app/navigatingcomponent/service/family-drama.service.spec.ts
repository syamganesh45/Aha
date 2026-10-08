import { TestBed } from '@angular/core/testing';

import { FamilyDramaService } from './family-drama.service';

describe('FamilyDramaService', () => {
  let service: FamilyDramaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FamilyDramaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
