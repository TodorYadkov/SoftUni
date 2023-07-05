import { TestBed } from '@angular/core/testing';
import { CanMatchFn } from '@angular/router';

import { onlyForLoggedInGuard } from './only-for-logged-in.guard';

describe('onlyForLoggedInGuard', () => {
  const executeGuard: CanMatchFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => onlyForLoggedInGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
