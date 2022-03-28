import { TestBed } from '@angular/core/testing';

import { CityDetailGuard } from './city-detail.guard';

describe('CityDetailGuard', () => {
  let guard: CityDetailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CityDetailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
