import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantSenegalComponent } from './restaurant-senegal.component';

describe('RestaurantSenegalComponent', () => {
  let component: RestaurantSenegalComponent;
  let fixture: ComponentFixture<RestaurantSenegalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantSenegalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantSenegalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
