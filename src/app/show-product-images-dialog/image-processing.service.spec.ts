import { TestBed } from '@angular/core/testing';

import { ImageProcessingService } from '../show-product-details/image-processing.service';

describe('ImageProcessingService', () => {
  let service: ImageProcessingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ImageProcessingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
