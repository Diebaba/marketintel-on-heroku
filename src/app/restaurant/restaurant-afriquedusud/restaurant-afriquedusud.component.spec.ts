import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantAfriquedusudComponent } from './restaurant-afriquedusud.component';

describe('RestaurantAfriquedusudComponent', () => {
  let component: RestaurantAfriquedusudComponent;
  let fixture: ComponentFixture<RestaurantAfriquedusudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantAfriquedusudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantAfriquedusudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
