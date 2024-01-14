import { TestBed } from '@angular/core/testing';

import { JavascriptContentService } from './javascript-content.service';

describe('JavascriptContentService', () => {
  let service: JavascriptContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JavascriptContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
