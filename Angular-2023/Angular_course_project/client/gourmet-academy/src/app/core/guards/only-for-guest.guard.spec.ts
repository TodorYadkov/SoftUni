import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { onlyForGuestGuard } from './only-for-guest.guard';

describe('onlyForGuestGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => onlyForGuestGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
