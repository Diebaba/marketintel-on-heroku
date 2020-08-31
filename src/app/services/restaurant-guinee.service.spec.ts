import { TestBed } from '@angular/core/testing';

import { RestaurantGuineeService } from './restaurant-guinee.service';

describe('RestaurantGuineeService', () => {
  let service: RestaurantGuineeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantGuineeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
