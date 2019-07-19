import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroItemDetailComponent } from './intro-item-detail.component';

describe('IntroItemDetailComponent', () => {
  let component: IntroItemDetailComponent;
  let fixture: ComponentFixture<IntroItemDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IntroItemDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroItemDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
