import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoleanComponent } from './golean.component';

describe('GoleanComponent', () => {
  let component: GoleanComponent;
  let fixture: ComponentFixture<GoleanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoleanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoleanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
