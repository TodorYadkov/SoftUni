import { TestBed } from '@angular/core/testing';

import { RequesterInterceptor } from './requester.interceptor';

describe('RequesterInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      RequesterInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: RequesterInterceptor = TestBed.inject(RequesterInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
