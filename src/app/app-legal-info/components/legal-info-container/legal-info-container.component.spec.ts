import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegalInfoContainerComponent } from './legal-info-container.component';

describe('LegalInfoContainerComponent', () => {
  let component: LegalInfoContainerComponent;
  let fixture: ComponentFixture<LegalInfoContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegalInfoContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LegalInfoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
