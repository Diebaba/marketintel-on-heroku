import { TestBed } from '@angular/core/testing';

import { UnivPubliqueService } from './univ-publique.service';

describe('UnivPubliqueService', () => {
  let service: UnivPubliqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnivPubliqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
