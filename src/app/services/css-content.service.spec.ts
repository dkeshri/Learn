import { TestBed } from '@angular/core/testing';

import { CssContentService } from './css-content.service';

describe('CssContentService', () => {
  let service: CssContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CssContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
