import { TestBed } from '@angular/core/testing';

import { RestaurantCoteService } from './restaurant-cote.service';

describe('RestaurantCoteService', () => {
  let service: RestaurantCoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantCoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
