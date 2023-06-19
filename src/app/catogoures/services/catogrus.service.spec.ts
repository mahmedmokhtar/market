import { TestBed } from '@angular/core/testing';

import { CatogrusService } from './catogrus.service';

describe('CatogrusService', () => {
  let service: CatogrusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatogrusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
