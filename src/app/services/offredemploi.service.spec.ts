import { TestBed } from '@angular/core/testing';

import { OffredemploiService } from './offredemploi.service';

describe('OffredemploiService', () => {
  let service: OffredemploiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OffredemploiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
