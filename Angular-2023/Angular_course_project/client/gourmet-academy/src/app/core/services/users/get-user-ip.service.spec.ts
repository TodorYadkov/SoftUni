import { TestBed } from '@angular/core/testing';

import { GetUserIpService } from './get-user-ip.service';

describe('GetUserIpService', () => {
  let service: GetUserIpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetUserIpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
