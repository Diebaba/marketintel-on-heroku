import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantGuineeComponent } from './restaurant-guinee.component';

describe('RestaurantGuineeComponent', () => {
  let component: RestaurantGuineeComponent;
  let fixture: ComponentFixture<RestaurantGuineeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantGuineeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantGuineeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
