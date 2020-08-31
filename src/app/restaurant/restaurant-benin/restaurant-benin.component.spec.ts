import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantBeninComponent } from './restaurant-benin.component';

describe('RestaurantBeninComponent', () => {
  let component: RestaurantBeninComponent;
  let fixture: ComponentFixture<RestaurantBeninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantBeninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantBeninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
