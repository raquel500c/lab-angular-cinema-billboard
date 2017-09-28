import { TestBed, inject } from '@angular/core/testing';

import { InfoMoviesService } from './info-movies.service';

describe('InfoMoviesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InfoMoviesService]
    });
  });

  it('should be created', inject([InfoMoviesService], (service: InfoMoviesService) => {
    expect(service).toBeTruthy();
  }));
});
