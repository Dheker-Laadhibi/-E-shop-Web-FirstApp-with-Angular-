import { TestBed } from '@angular/core/testing';

import { MyfirstService } from './myfirst.service';

describe('MyfirstService', () => {
  let service: MyfirstService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyfirstService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
