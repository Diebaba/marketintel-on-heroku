import { TestBed } from '@angular/core/testing';

import { RestaurantBeninService } from './restaurant-benin.service';

describe('RestaurantBeninService', () => {
  let service: RestaurantBeninService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestaurantBeninService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
