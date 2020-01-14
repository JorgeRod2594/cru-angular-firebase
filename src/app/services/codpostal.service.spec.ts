import { TestBed } from '@angular/core/testing';

import { CodpostalService } from './codpostal.service';

describe('CodpostalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CodpostalService = TestBed.get(CodpostalService);
    expect(service).toBeTruthy();
  });
});
