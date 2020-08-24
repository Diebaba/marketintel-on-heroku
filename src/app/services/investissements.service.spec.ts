import { TestBed } from '@angular/core/testing';

import { InvestissementsService } from './investissements.service';

describe('InvestissementsService', () => {
  let service: InvestissementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvestissementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
