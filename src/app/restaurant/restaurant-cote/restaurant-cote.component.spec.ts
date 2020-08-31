import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantCoteComponent } from './restaurant-cote.component';

describe('RestaurantCoteComponent', () => {
  let component: RestaurantCoteComponent;
  let fixture: ComponentFixture<RestaurantCoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantCoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantCoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
