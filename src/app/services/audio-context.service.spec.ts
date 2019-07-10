import { TestBed } from '@angular/core/testing';

import { AudioContextService } from './audio-context.service';

describe('AudioContextService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AudioContextService = TestBed.get(AudioContextService);
    expect(service).toBeTruthy();
  });
});
