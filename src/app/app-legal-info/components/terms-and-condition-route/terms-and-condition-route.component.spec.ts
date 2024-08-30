import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TermsAndConditionRouteComponent } from './terms-and-condition-route.component';

describe('TermsAndConditionRouteComponent', () => {
  let component: TermsAndConditionRouteComponent;
  let fixture: ComponentFixture<TermsAndConditionRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TermsAndConditionRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TermsAndConditionRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
