import { TestBed } from '@angular/core/testing';

import { ServicehistoryService } from './servicehistory.service';

describe('ServicehistoryService', () => {
  let service: ServicehistoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicehistoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
