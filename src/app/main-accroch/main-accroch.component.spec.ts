import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAccrochComponent } from './main-accroch.component';

describe('MainAccrochComponent', () => {
  let component: MainAccrochComponent;
  let fixture: ComponentFixture<MainAccrochComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainAccrochComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainAccrochComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
