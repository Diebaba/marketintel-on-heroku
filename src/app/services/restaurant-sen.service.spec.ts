import { TestBed } from '@angular/core/testing';

import { RestaurantSenService } from './restaurant-sen.service';

describe('RestaurantSenService', () => {
  let service: RestaurantSenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantSenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
