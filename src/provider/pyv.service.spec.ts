import { TestBed } from '@angular/core/testing';

import { PyvService } from './pyv.service';

describe('PyvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PyvService = TestBed.get(PyvService);
    expect(service).toBeTruthy();
  });
});
