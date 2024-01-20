import { TestBed } from '@angular/core/testing';

import { LoadAppConfigJsonService } from './load-app-config-Json.service';

describe('LoadAppConfigJsonService', () => {
  let service: LoadAppConfigJsonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadAppConfigJsonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
