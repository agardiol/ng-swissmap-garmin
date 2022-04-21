import { TestBed } from '@angular/core/testing';

import { GeoAdminAPIService } from './geo-admin-api.service';

describe('GeoAdminAPIService', () => {
  let service: GeoAdminAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeoAdminAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
