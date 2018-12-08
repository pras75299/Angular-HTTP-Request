import { TestBed, inject } from '@angular/core/testing';

import { GithubFollowerServiceService } from './github-follower-service.service';

describe('GithubFollowerServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubFollowerServiceService]
    });
  });

  it('should be created', inject([GithubFollowerServiceService], (service: GithubFollowerServiceService) => {
    expect(service).toBeTruthy();
  }));
});
