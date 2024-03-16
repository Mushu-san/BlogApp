import { TestBed } from '@angular/core/testing';

import { BlockUiServiceService } from './block-ui-service.service';

describe('BlockUiServiceService', () => {
  let service: BlockUiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlockUiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
