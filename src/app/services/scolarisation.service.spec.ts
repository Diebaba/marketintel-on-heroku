import { TestBed } from '@angular/core/testing';

import { ScolarisationService } from './scolarisation.service';

describe('ScolarisationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScolarisationService = TestBed.get(ScolarisationService);
    expect(service).toBeTruthy();
  });
});
