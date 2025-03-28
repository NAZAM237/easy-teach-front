import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAvantageComponent } from './main-avantage.component';

describe('MainAvantageComponent', () => {
  let component: MainAvantageComponent;
  let fixture: ComponentFixture<MainAvantageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainAvantageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainAvantageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
