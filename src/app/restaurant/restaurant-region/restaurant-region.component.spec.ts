import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantRegionComponent } from './restaurant-region.component';

describe('RestaurantRegionComponent', () => {
  let component: RestaurantRegionComponent;
  let fixture: ComponentFixture<RestaurantRegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantRegionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
