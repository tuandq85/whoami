import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoleanProductComponent } from './golean-product.component';

describe('GoleanProductComponent', () => {
  let component: GoleanProductComponent;
  let fixture: ComponentFixture<GoleanProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoleanProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoleanProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
