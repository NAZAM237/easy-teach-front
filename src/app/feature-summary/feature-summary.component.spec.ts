import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureSummaryComponent } from './feature-summary.component';

describe('FeatureSummaryComponent', () => {
  let component: FeatureSummaryComponent;
  let fixture: ComponentFixture<FeatureSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeatureSummaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeatureSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
