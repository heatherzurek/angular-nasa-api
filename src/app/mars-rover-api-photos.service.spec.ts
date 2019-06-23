import { TestBed, inject } from '@angular/core/testing';

import { MarsRoverApiPhotosService } from './mars-rover-api-photos.service';

describe('MarsRoverApiPhotosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarsRoverApiPhotosService]
    });
  });

  it('should be created', inject([MarsRoverApiPhotosService], (service: MarsRoverApiPhotosService) => {
    expect(service).toBeTruthy();
  }));
});
