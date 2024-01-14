import { TestBed } from '@angular/core/testing';

import { DotnetContentService } from './dotnet-content.service';

describe('DotnetContentService', () => {
  let service: DotnetContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DotnetContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
