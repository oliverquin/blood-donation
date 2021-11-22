import { TestBed } from '@angular/core/testing';

import { DonarService } from './donar.service';

describe('DonarRegistrationService', () => {
  let service: DonarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
