import { TestBed } from '@angular/core/testing';

import { VideoContentService } from './video-content.service';

describe('VideoContentService', () => {
  let service: VideoContentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoContentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
