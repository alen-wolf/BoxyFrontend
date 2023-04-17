import { TestBed } from '@angular/core/testing';

import { DbBackService } from './db-back.service';

describe('DbBackService', () => {
  let service: DbBackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbBackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
