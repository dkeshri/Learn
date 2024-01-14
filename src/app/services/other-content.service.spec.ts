import { TestBed } from '@angular/core/testing';

import { OtherContentService } from './other-content.service';

describe('OtherContentService', () => {
  let service: OtherContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OtherContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
