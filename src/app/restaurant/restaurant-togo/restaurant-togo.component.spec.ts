import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantTogoComponent } from './restaurant-togo.component';

describe('RestaurantTogoComponent', () => {
  let component: RestaurantTogoComponent;
  let fixture: ComponentFixture<RestaurantTogoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantTogoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantTogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
