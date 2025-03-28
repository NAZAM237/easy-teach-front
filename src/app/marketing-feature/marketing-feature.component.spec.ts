import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketingFeatureComponent } from './marketing-feature.component';

describe('MarketingFeatureComponent', () => {
  let component: MarketingFeatureComponent;
  let fixture: ComponentFixture<MarketingFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MarketingFeatureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketingFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
