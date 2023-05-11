import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteArrowsComponent } from './route-arrows.component';

describe('RouteArrowsComponent', () => {
  let component: RouteArrowsComponent;
  let fixture: ComponentFixture<RouteArrowsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RouteArrowsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RouteArrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
