import { TestBed } from '@angular/core/testing';

import { HttpMService } from './http-m.service';

describe('HttpMService', () => {
  let service: HttpMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
