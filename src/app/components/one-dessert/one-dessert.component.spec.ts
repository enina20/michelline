import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneDessertComponent } from './one-dessert.component';

describe('OneDessertComponent', () => {
  let component: OneDessertComponent;
  let fixture: ComponentFixture<OneDessertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneDessertComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneDessertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
