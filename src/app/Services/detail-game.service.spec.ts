import { TestBed, inject } from '@angular/core/testing';

import { DetailGameService } from './detail-game.service';

describe('DetailGameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailGameService]
    });
  });

  it('should be created', inject([DetailGameService], (service: DetailGameService) => {
    expect(service).toBeTruthy();
  }));
});
