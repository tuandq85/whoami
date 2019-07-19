import { TestBed } from '@angular/core/testing';

import { GoleanServiceService } from './golean-service.service';

describe('GoleanServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoleanServiceService = TestBed.get(GoleanServiceService);
    expect(service).toBeTruthy();
  });
});
