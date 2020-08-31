import { TestBed } from '@angular/core/testing';

import { RestaurantAfriqueService } from './restaurant-afrique.service';

describe('RestaurantAfriqueService', () => {
  let service: RestaurantAfriqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantAfriqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
