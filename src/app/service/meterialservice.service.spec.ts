import { TestBed } from '@angular/core/testing';

import { MeterialserviceService } from './meterialservice.service';

describe('MeterialserviceService', () => {
  let service: MeterialserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeterialserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
