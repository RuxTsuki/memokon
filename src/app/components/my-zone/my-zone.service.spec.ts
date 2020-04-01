import { TestBed } from '@angular/core/testing';

import { MyZoneService } from './my-zone.service';

describe('MyZoneService', () => {
  let service: MyZoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyZoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
