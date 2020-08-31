import { TestBed } from '@angular/core/testing';

import { RestaurantTogoService } from './restaurant-togo.service';

describe('RestaurantTogoService', () => {
  let service: RestaurantTogoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantTogoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
