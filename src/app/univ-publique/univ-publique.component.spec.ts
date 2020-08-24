import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnivPubliqueComponent } from './univ-publique.component';

describe('UnivPubliqueComponent', () => {
  let component: UnivPubliqueComponent;
  let fixture: ComponentFixture<UnivPubliqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnivPubliqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnivPubliqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
